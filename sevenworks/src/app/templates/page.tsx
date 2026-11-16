"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/components/app-header";
import { RequireWorkspace } from "@/components/require-workspace";
import { TemplateThumb } from "@/components/template-thumb";
import { createResume } from "@/lib/data";
import { CATEGORIES, TEMPLATES, type Category } from "@/lib/templates";

export default function TemplatesPage() {
  return (
    <RequireWorkspace>
      <AppHeader />
      <Gallery />
    </RequireWorkspace>
  );
}

function Gallery() {
  const router = useRouter();
  const [category, setCategory] = useState<Category | "All">("All");
  const [busy, setBusy] = useState<string | null>(null);
  const shown = category === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === category);

  const use = async (id: string) => {
    setBusy(id);
    router.push(`/editor?id=${await createResume(id)}`);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="eyebrow">{TEMPLATES.length} templates</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Pick a starting point</h1>
      <p className="mt-2 max-w-xl text-subtle">
        Each one is tuned for a field. You can switch templates any time in the editor without losing what you wrote.
      </p>

      <div className="no-scrollbar -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist">
        {(["All", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition ${
              category === c ? "border-primary bg-primary text-on-primary" : "border-line bg-surface text-subtle hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
        {shown.map((t) => (
          <li key={t.id}>
            <button onClick={() => use(t.id)} disabled={busy !== null} className="group block w-full text-left">
              <div className="relative transition group-hover:-translate-y-1 group-hover:shadow-page">
                <TemplateThumb id={t.id} name={t.name} />
                <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-primary py-2 text-center text-sm font-medium text-on-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {busy === t.id ? "Opening…" : "Use this template"}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-subtle">{t.blurb}</p>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
