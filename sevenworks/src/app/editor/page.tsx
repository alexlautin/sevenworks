"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LuArrowLeft, LuArrowRight, LuCheck, LuChevronDown, LuCloudOff, LuDownload, LuLoaderCircle, LuMinus, LuPlus } from "react-icons/lu";
import { RequireWorkspace } from "@/components/require-workspace";
import { resolveLegacyId, TEMPLATES } from "@/lib/templates";
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
        <h1 className="text-xl font-semibold tracking-tight">Couldn&apos;t open this resume</h1>
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
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-ink" aria-label="Loading" />
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

  const sectionIndex = SECTIONS.findIndex((s) => s.id === section);

  const styleControls = (
    <>
      <Select label="Template" value={templateId} onChange={setTemplate} options={TEMPLATES.map((t) => ({ value: t.id, label: t.name }))} />
      <Select
        label="Font"
        value={data.font ?? "Arial"}
        onChange={(v) => updateData((d) => ({ ...d, font: v }))}
        options={FONTS}
      />
      <Select
        label="Size"
        value={String(Number(data.fontSize) || 10)}
        onChange={(v) => updateData((d) => ({ ...d, fontSize: Number(v) }))}
        options={SIZES.map((s) => ({ value: String(s.value), label: s.label }))}
      />
    </>
  );

  return (
    <div className="flex h-[calc(100dvh-var(--banner-h,0px))] flex-col bg-surface">
      {/* Top bar */}
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-3">
        <Link href="/dashboard" className="btn btn-ghost w-9 px-0" aria-label="Back to my resumes">
          <LuArrowLeft className="text-base" />
        </Link>
        <span className="h-5 w-px bg-line" aria-hidden />
        <input
          aria-label="Resume name"
          className="min-w-0 max-w-xs flex-1 truncate rounded-md bg-transparent px-2 py-1 text-sm font-medium hover:bg-muted focus:bg-muted focus:outline-none"
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

      {/* Phone: edit / preview switch */}
      <div className="flex shrink-0 border-b border-line lg:hidden" role="tablist">
        {(["edit", "preview"] as const).map((v) => (
          <button
            key={v}
            role="tab"
            aria-selected={mobileView === v}
            onClick={() => setMobileView(v)}
            className={`flex-1 border-b-2 py-2.5 text-sm font-medium capitalize transition ${
              mobileView === v ? "border-ink text-ink" : "border-transparent text-subtle"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Form */}
        <div
          className={`min-h-0 w-full flex-col border-line lg:flex lg:w-[460px] lg:shrink-0 lg:border-r xl:w-[520px] ${
            mobileView === "edit" ? "flex" : "hidden"
          }`}
        >
          <nav className="no-scrollbar flex shrink-0 gap-5 overflow-x-auto border-b border-line px-5" aria-label="Resume sections">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                aria-current={section === s.id}
                className={`-mb-px shrink-0 whitespace-nowrap border-b-2 py-3 text-[13px] font-medium transition ${
                  section === s.id ? "border-ink text-ink" : "border-transparent text-subtle hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-6">
            <SectionForm section={section} data={data} update={updateData} />
            <div className="mt-10 flex items-center justify-between border-t border-line pt-4">
              <button className="btn btn-ghost" disabled={sectionIndex === 0} onClick={() => setSection(SECTIONS[sectionIndex - 1].id)}>
                <LuArrowLeft /> Back
              </button>
              {sectionIndex < SECTIONS.length - 1 ? (
                <button className="btn btn-secondary" onClick={() => setSection(SECTIONS[sectionIndex + 1].id)}>
                  Next: {SECTIONS[sectionIndex + 1].label}
                  <LuArrowRight />
                </button>
              ) : (
                <button className="btn btn-primary" onClick={onDownload}>
                  <LuDownload /> Download PDF
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Preview */}
        <section
          aria-label="Live preview"
          className={`min-h-0 min-w-0 flex-1 flex-col bg-muted lg:flex ${mobileView === "preview" ? "flex" : "hidden"}`}
        >
          <div className="no-scrollbar flex shrink-0 items-center gap-2 overflow-x-auto border-b border-line bg-surface px-3 py-2">
            {styleControls}
            <div className="ml-auto hidden shrink-0 items-center rounded-lg border border-line shadow-sm lg:flex">
              <button className="grid h-8 w-8 place-items-center text-subtle hover:text-ink" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(1)))}>
                <LuMinus />
              </button>
              <button className="h-8 w-12 border-x border-line text-xs tabular-nums text-subtle hover:text-ink" onClick={() => setZoom(1)} title="Fit to width">
                {Math.round(zoom * 100)}%
              </button>
              <button className="grid h-8 w-8 place-items-center text-subtle hover:text-ink" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(2, +(z + 0.1).toFixed(1)))}>
                <LuPlus />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1">
            <PdfPreview templateId={templateId} data={data} zoom={zoom} />
          </div>
        </section>
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="relative flex h-8 shrink-0 items-center rounded-lg border border-line bg-surface pl-2.5 text-[13px] shadow-sm hover:bg-muted">
      <span className="hidden text-subtle 2xl:inline">{label}</span>
      <select
        aria-label={label}
        className="h-full cursor-pointer appearance-none bg-transparent pr-7 font-medium text-ink focus:outline-none 2xl:pl-1.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <LuChevronDown className="pointer-events-none absolute right-2 text-subtle" aria-hidden />
    </label>
  );
}
