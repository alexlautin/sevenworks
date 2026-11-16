"use client";

// The one data layer for resumes. In demo mode every call goes to the sessionStorage store in
// demo-data.ts; otherwise it uses Firestore (user_resumes/{uid}/resumes/{id}) for the signed-in user.
import { isDemoMode } from "./demo";
import { demoData } from "./demo-data";
import { accountsEnabled } from "./config";
import type { Resume, ResumeSummary } from "./resume";
import { getTemplateInfo } from "./templates";

async function firestore() {
  if (!accountsEnabled) throw new Error("Accounts are turned off on this deployment. Try the demo instead.");
  const [{ getDb, getFirebaseAuth }, fs] = await Promise.all([import("./firebase"), import("firebase/firestore")]);
  const user = getFirebaseAuth().currentUser;
  if (!user) throw new Error("Please sign in first.");
  return { db: getDb(), uid: user.uid, fs };
}

function fromDoc(id: string, data: Record<string, unknown>): Resume {
  const updated = data.lastModified as { toMillis?: () => number } | undefined;
  return {
    id,
    name: (data.name as string) || "Untitled resume",
    templateId: (data.templateID as string) || "business",
    formData: (data.formData as Resume["formData"]) || {},
    updatedAt: updated?.toMillis?.() ?? 0,
  };
}

export async function listResumes(): Promise<ResumeSummary[]> {
  const all = isDemoMode() ? await demoData.list() : await (async () => {
    const { db, uid, fs } = await firestore();
    const snap = await fs.getDocs(fs.collection(db, "user_resumes", uid, "resumes"));
    return snap.docs.map((d) => fromDoc(d.id, d.data()));
  })();
  return all
    .map(({ id, name, templateId, updatedAt }) => ({ id, name, templateId, updatedAt }))
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

export async function getResume(id: string): Promise<Resume | null> {
  if (isDemoMode()) return demoData.get(id);
  const { db, uid, fs } = await firestore();
  const snap = await fs.getDoc(fs.doc(db, "user_resumes", uid, "resumes", id));
  return snap.exists() ? fromDoc(snap.id, snap.data()) : null;
}

export async function createResume(templateId: string): Promise<string> {
  const name = `${getTemplateInfo(templateId).name} resume`;
  if (isDemoMode()) return demoData.create(templateId, name);
  const { db, uid, fs } = await firestore();
  const ref = await fs.addDoc(fs.collection(db, "user_resumes", uid, "resumes"), {
    templateID: templateId,
    name,
    formData: {},
    createdAt: fs.Timestamp.now(),
    lastModified: fs.Timestamp.now(),
  });
  return ref.id;
}

export async function saveResume(
  id: string,
  patch: Partial<Pick<Resume, "name" | "templateId" | "formData">>,
): Promise<void> {
  if (isDemoMode()) return demoData.save(id, patch);
  const { db, uid, fs } = await firestore();
  const update: Record<string, unknown> = { lastModified: fs.Timestamp.now() };
  if (patch.name !== undefined) update.name = patch.name;
  if (patch.templateId !== undefined) update.templateID = patch.templateId;
  if (patch.formData !== undefined) update.formData = patch.formData;
  await fs.setDoc(fs.doc(db, "user_resumes", uid, "resumes", id), update, { merge: true });
}

export async function deleteResume(id: string): Promise<void> {
  if (isDemoMode()) return demoData.remove(id);
  const { db, uid, fs } = await firestore();
  await fs.deleteDoc(fs.doc(db, "user_resumes", uid, "resumes", id));
}
