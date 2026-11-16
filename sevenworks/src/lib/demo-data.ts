"use client";

// Demo-mode resume store: sample resumes kept in sessionStorage (in memory if storage is blocked).
// Nothing leaves the browser tab, and closing the tab or exiting the demo resets it.
import sample from "./sample-resume.json";
import type { Resume, ResumeData } from "./resume";

const STORE_KEY = "sevenworks-demo-resumes";
let memoryStore: Resume[] | null = null;

function seed(): Resume[] {
  const now = Date.now();
  const base = structuredClone(sample) as ResumeData;
  return [
    { id: "demo-data-analytics", name: "Maya Okafor · Data Analytics", templateId: "data-analytics", formData: base, updatedAt: now },
    {
      id: "demo-business",
      name: "Maya Okafor · Business",
      templateId: "business",
      formData: { ...structuredClone(base), font: "Times-Roman" },
      updatedAt: now - 1000 * 60 * 60 * 26,
    },
  ];
}

function read(): Resume[] {
  try {
    const raw = window.sessionStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw) as Resume[];
  } catch {
    // fall through to the in-memory copy
  }
  if (!memoryStore) memoryStore = seed();
  return memoryStore;
}

function write(resumes: Resume[]) {
  memoryStore = resumes;
  try {
    window.sessionStorage.setItem(STORE_KEY, JSON.stringify(resumes));
  } catch {
    // memoryStore covers this page load
  }
}

export function resetDemoData() {
  memoryStore = null;
  try {
    window.sessionStorage.removeItem(STORE_KEY);
  } catch {}
}

export const demoData = {
  async list(): Promise<Resume[]> {
    const resumes = read();
    write(resumes); // persists the seed on first visit
    return resumes;
  },
  async get(id: string): Promise<Resume | null> {
    return read().find((r) => r.id === id) ?? null;
  },
  async create(templateId: string, name: string): Promise<string> {
    const id = `demo-${Math.random().toString(36).slice(2, 10)}`;
    const formData = structuredClone(sample) as ResumeData;
    write([{ id, name, templateId, formData, updatedAt: Date.now() }, ...read()]);
    return id;
  },
  async save(id: string, patch: Partial<Pick<Resume, "name" | "templateId" | "formData">>): Promise<void> {
    write(read().map((r) => (r.id === id ? { ...r, ...patch, updatedAt: Date.now() } : r)));
  },
  async remove(id: string): Promise<void> {
    write(read().filter((r) => r.id !== id));
  },
};
