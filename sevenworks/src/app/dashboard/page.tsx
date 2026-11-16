"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuEllipsis, LuPlus, LuTrash2 } from "react-icons/lu";
import { AppHeader } from "@/components/app-header";
import { RequireWorkspace } from "@/components/require-workspace";
import { TemplateThumb } from "@/components/template-thumb";
import { createResume, deleteResume, listResumes } from "@/lib/data";
import type { ResumeSummary } from "@/lib/resume";
import { DEFAULT_TEMPLATE_ID, getTemplateInfo, resolveLegacyId } from "@/lib/templates";

function timeAgo(ms: number) {
  if (!ms) return "";
  const mins = Math.round((Date.now() - ms) / 60000);
  if (mins < 1) return "Edited just now";
  if (mins < 60) return `Edited ${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `Edited ${hours} h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `Edited ${days} day${days === 1 ? "" : "s"} ago`;
  return `Edited ${new Date(ms).toLocaleDateString()}`;
}

export default function DashboardPage() {
  return (
    <RequireWorkspace>
      <AppHeader />
      <Dashboard />
    </RequireWorkspace>
  );
}

function Dashboard() {
  const router = useRouter();
  const [resumes, setResumes] = useState<ResumeSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const load = useCallback(() => {
    listResumes()
      .then(setResumes)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);
  useEffect(load, [load]);

  const onCreate = async () => {
    setCreating(true);
    try {
      router.push(`/editor?id=${await createResume(DEFAULT_TEMPLATE_ID)}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setCreating(false);
    }
  };

  const onDelete = async (r: ResumeSummary) => {
    if (!window.confirm(`Delete “${r.name}”? This can't be undone.`)) return;
    await deleteResume(r.id);
    load();
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Workspace</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">My resumes</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/templates" className="btn btn-secondary">
            Browse templates
          </Link>
          <button className="btn btn-primary" onClick={onCreate} disabled={creating}>
            <LuPlus /> New resume
          </button>
        </div>
      </div>

      {error && <p className="mt-6 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">{error}</p>}

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        <li>
          <button
            onClick={onCreate}
            disabled={creating}
            className="group flex aspect-[8.5/11] w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-line text-subtle transition hover:border-accent hover:bg-accent/10 hover:text-ink"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-muted text-2xl transition group-hover:bg-accent/40">
              <LuPlus />
            </span>
            <span className="text-sm font-medium">New resume</span>
          </button>
        </li>
        {resumes === null
          ? Array.from({ length: 3 }, (_, i) => (
              <li key={i} className="aspect-[8.5/11] animate-pulse rounded-xl bg-muted" />
            ))
          : resumes.map((r) => {
              const t = getTemplateInfo(resolveLegacyId(r.templateId));
              return (
                <li key={r.id} className="group relative">
                  <Link href={`/editor?id=${r.id}`} className="block rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                    <div className="transition group-hover:-translate-y-1 group-hover:shadow-page">
                      <TemplateThumb id={t.id} name={t.name} />
                    </div>
                    <p className="mt-3 truncate text-sm font-semibold">{r.name}</p>
                    <p className="truncate text-xs text-subtle">
                      {t.name} · {timeAgo(r.updatedAt)}
                    </p>
                  </Link>
                  <details className="absolute right-2 top-2">
                    <summary className="grid h-8 w-8 cursor-pointer list-none place-items-center rounded-full bg-surface/90 text-subtle opacity-100 shadow-soft ring-1 ring-line transition hover:text-ink sm:opacity-0 sm:group-hover:opacity-100 [&::-webkit-details-marker]:hidden">
                      <LuEllipsis aria-label="Resume options" />
                    </summary>
                    <div className="absolute right-0 mt-1 w-36 rounded-lg border border-line bg-surface p-1 shadow-page">
                      <button onClick={() => onDelete(r)} className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-red-600 hover:bg-muted">
                        <LuTrash2 /> Delete
                      </button>
                    </div>
                  </details>
                </li>
              );
            })}
      </ul>
      {resumes?.length === 0 && <p className="mt-6 text-sm text-subtle">No resumes yet. Start a new one or pick a template.</p>}
    </main>
  );
}
