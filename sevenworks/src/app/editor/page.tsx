"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LuArrowLeft, LuCheck, LuCloudOff, LuDownload, LuLoaderCircle, LuMinus, LuPlus } from "react-icons/lu";
import { RequireWorkspace } from "@/components/require-workspace";
import { TEMPLATES } from "@/lib/templates";
import { resolveLegacyId } from "@/lib/templates";
import { SECTIONS, SectionForm, type SectionId } from "./sections";
import { PdfPreview } from "./pdf-preview";
import { downloadPdf } from "./pdf";
import { useResumeEditor, type SaveStatus } from "./use-resume-editor";

const FONTS = [
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times-Roman", label: "Times" },
  { value: "Courier", label: "Courier" },
];
const SIZES = [
  { value: 9, label: "Compact" },
  { value: 10, label: "Regular" },
  { value: 11, label: "Large" },
];

export default function EditorPage() {
  return (
    <RequireWorkspace>
      <Suspense>
        <Editor />
      </Suspense>
    </RequireWorkspace>
  );
}

function SaveBadge({ status }: { status: SaveStatus }) {
  const map = {
    saved: { icon: <LuCheck />, text: "Saved" },
    saving: { icon: <LuLoaderCircle className="animate-spin" />, text: "Saving…" },
    unsaved: { icon: <LuLoaderCircle className="animate-spin" />, text: "Saving…" },
    error: { icon: <LuCloudOff />, text: "Not saved" },
  }[status];
  return (
    <span className={`hidden items-center gap-1.5 text-xs sm:inline-flex ${status === "error" ? "text-red-600" : "text-subtle"}`} aria-live="polite">
      {map.icon}
      {map.text}
    </span>
  );
}

function Editor() {
  const id = useSearchParams().get("id");
  const { resume, error, status, updateData, setTemplate, setName } = useResumeEditor(id);
  const [section, setSection] = useState<SectionId>("personal");
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");
  const [zoom, setZoom] = useState(1);
  const [downloading, setDownloading] = useState(false);

  if (error) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold">Couldn&apos;t open this resume</h1>
        <p className="mt-2 text-sm text-subtle">{error}</p>
        <Link href="/dashboard" className="btn btn-primary mt-6">
          Back to my resumes
        </Link>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent-ink" aria-label="Loading" />
      </div>
    );
  }

  const data = resume.formData;
  const templateId = resolveLegacyId(resume.templateId);

  const onDownload = async () => {
    setDownloading(true);
    try {
      await downloadPdf(templateId, data, resume.name);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex h-[calc(100dvh-var(--banner-h,0px))] flex-col">
      {/* Top bar */}
      <header className="flex shrink-0 items-center gap-2 border-b border-line bg-surface px-3 py-2 sm:gap-3 sm:px-4">
        <Link href="/dashboard" className="btn btn-ghost px-2" aria-label="Back to my resumes">
          <LuArrowLeft className="text-lg" />
        </Link>
        <input
          aria-label="Resume name"
          className="min-w-0 flex-1 truncate rounded-md bg-transparent px-2 py-1 font-display text-base font-semibold hover:bg-muted focus:bg-muted focus:outline-none sm:max-w-xs sm:text-lg"
          value={resume.name}
          onChange={(e) => setName(e.target.value)}
        />
        <SaveBadge status={status} />
        <div className="flex-1" />
        <button className="btn btn-primary" onClick={onDownload} disabled={downloading}>
          {downloading ? <LuLoaderCircle className="animate-spin" /> : <LuDownload />}
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </header>

      {/* Style toolbar */}
      <div className="no-scrollbar flex shrink-0 items-center gap-2 overflow-x-auto border-b border-line bg-surface/70 px-3 py-2 text-sm sm:px-4">
        <label className="flex shrink-0 items-center gap-2">
          <span className="text-xs text-subtle">Template</span>
          <select className="field w-auto py-1.5" value={templateId} onChange={(e) => setTemplate(e.target.value)}>
            {TEMPLATES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex shrink-0 items-center gap-2">
          <span className="text-xs text-subtle">Font</span>
          <select
            className="field w-auto py-1.5"
            value={data.font ?? "Arial"}
            onChange={(e) => updateData((d) => ({ ...d, font: e.target.value }))}
          >
            {FONTS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex shrink-0 items-center gap-2">
          <span className="text-xs text-subtle">Size</span>
          <select
            className="field w-auto py-1.5"
            value={Number(data.fontSize) || 10}
            onChange={(e) => updateData((d) => ({ ...d, fontSize: Number(e.target.value) }))}
          >
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <div className="ml-auto hidden shrink-0 items-center gap-1 lg:flex">
          <button className="btn btn-ghost px-2" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(1)))}>
            <LuMinus />
          </button>
          <button className="w-14 text-center text-xs tabular-nums text-subtle hover:text-ink" onClick={() => setZoom(1)} title="Fit width">
            {Math.round(zoom * 100)}%
          </button>
          <button className="btn btn-ghost px-2" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(2, +(z + 0.1).toFixed(1)))}>
            <LuPlus />
          </button>
        </div>
      </div>

      {/* Mobile edit / preview switch */}
      <div className="flex shrink-0 gap-1 border-b border-line bg-surface p-1.5 lg:hidden" role="tablist">
        {(["edit", "preview"] as const).map((v) => (
          <button
            key={v}
            role="tab"
            aria-selected={mobileView === v}
            onClick={() => setMobileView(v)}
            className={`flex-1 rounded-full py-1.5 text-sm font-medium capitalize transition ${mobileView === v ? "bg-primary text-on-primary" : "text-subtle"}`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Section nav + form */}
        <div className={`min-h-0 w-full flex-col border-line bg-bg lg:flex lg:w-[440px] lg:shrink-0 lg:border-r xl:w-[500px] ${mobileView === "edit" ? "flex" : "hidden"}`}>
          <nav className="no-scrollbar flex shrink-0 gap-1 overflow-x-auto border-b border-line px-3 py-2" aria-label="Resume sections">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                aria-current={section === s.id}
                className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition ${
                  section === s.id ? "bg-accent/40 font-semibold text-ink" : "text-subtle hover:bg-muted hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <SectionForm section={section} data={data} update={updateData} />
            <div className="mt-8 flex justify-between border-t border-line pt-4">
              {(() => {
                const i = SECTIONS.findIndex((s) => s.id === section);
                return (
                  <>
                    <button className="btn btn-ghost" disabled={i === 0} onClick={() => setSection(SECTIONS[i - 1].id)}>
                      ← {SECTIONS[i - 1]?.label ?? "Back"}
                    </button>
                    {i < SECTIONS.length - 1 ? (
                      <button className="btn btn-secondary" onClick={() => setSection(SECTIONS[i + 1].id)}>
                        {SECTIONS[i + 1].label} →
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={onDownload}>
                        Download PDF
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Preview */}
        <section aria-label="Live preview" className={`min-h-0 flex-1 bg-muted lg:block ${mobileView === "preview" ? "block" : "hidden"}`}>
          <PdfPreview templateId={templateId} data={data} zoom={zoom} />
        </section>
      </div>
    </div>
  );
}
