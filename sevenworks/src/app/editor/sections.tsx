"use client";

import type { ReactNode } from "react";
import { LuArrowDown, LuArrowUp, LuPlus, LuTrash2, LuX } from "react-icons/lu";
import type { EducationEntry, ExperienceEntry, LeadershipEntry, ResumeData } from "@/lib/resume";

export const SECTIONS = [
  { id: "personal", label: "Personal" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "honors", label: "Honors" },
  { id: "skills", label: "Skills" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

interface SectionProps {
  data: ResumeData;
  update: (fn: (d: ResumeData) => ResumeData) => void;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="field-label">{label}</span>
      <input className="field" type={type} value={value ?? ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function SectionHeader({ title, hint }: { title: string; hint: string }) {
  return (
    <header className="mb-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-0.5 text-sm text-subtle">{hint}</p>
    </header>
  );
}

function AddButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-line py-2.5 text-sm font-medium text-subtle transition hover:border-ink/30 hover:bg-muted hover:text-ink"
    >
      <LuPlus aria-hidden /> {children}
    </button>
  );
}

// Generic editable list of entries, each in its own card with move / remove controls.
function EntryList<T>({
  items,
  onChange,
  blank,
  addLabel,
  title,
  render,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  blank: T;
  addLabel: string;
  title: (item: T, i: number) => string;
  render: (item: T, set: (patch: Partial<T>) => void) => ReactNode;
}) {
  const move = (i: number, d: number) => {
    const next = [...items];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    onChange(next);
  };
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-1">
            <p className="min-w-0 flex-1 truncate text-sm font-semibold">{title(item, i)}</p>
            <button type="button" className="rounded-md p-1.5 text-subtle transition hover:bg-muted hover:text-ink disabled:opacity-30" aria-label="Move up" disabled={i === 0} onClick={() => move(i, -1)}>
              <LuArrowUp />
            </button>
            <button type="button" className="rounded-md p-1.5 text-subtle transition hover:bg-muted hover:text-ink disabled:opacity-30" aria-label="Move down" disabled={i === items.length - 1} onClick={() => move(i, 1)}>
              <LuArrowDown />
            </button>
            <button
              type="button"
              className="rounded-md p-1.5 text-subtle hover:bg-red-500/10 hover:text-red-600"
              aria-label="Remove"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
            >
              <LuTrash2 />
            </button>
          </div>
          {render(item, (patch) => onChange(items.map((it, j) => (j === i ? { ...it, ...patch } : it))))}
        </div>
      ))}
      <AddButton onClick={() => onChange([...items, structuredClone(blank)])}>{addLabel}</AddButton>
    </div>
  );
}

function Bullets({ bullets, onChange }: { bullets: string[] | undefined; onChange: (b: string[]) => void }) {
  const list = bullets ?? [];
  return (
    <div className="mt-3">
      <span className="field-label">Bullet points</span>
      <div className="space-y-2">
        {list.map((b, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-subtle/50" aria-hidden />
            <textarea
              className="field min-h-[2.5rem] resize-none [field-sizing:content]"
              rows={2}
              value={b}
              placeholder="Start with a verb and a result, e.g. Grew sign-ups 30% by…"
              onChange={(e) => onChange(list.map((x, j) => (j === i ? e.target.value : x)))}
            />
            <button
              type="button"
              className="mt-1.5 rounded-md p-1.5 text-subtle hover:bg-red-500/10 hover:text-red-600"
              aria-label="Remove bullet"
              onClick={() => onChange(list.filter((_, j) => j !== i))}
            >
              <LuX />
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-subtle hover:text-ink" onClick={() => onChange([...list, ""])}>
        <LuPlus aria-hidden /> Add bullet
      </button>
    </div>
  );
}

function Personal({ data, update }: SectionProps) {
  const set = (key: keyof ResumeData) => (v: string) => update((d) => ({ ...d, [key]: v }));
  const custom = data.customPersonal ?? [];
  return (
    <>
      <SectionHeader title="Personal details" hint="How employers reach you. Empty fields are left off the page." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First name" value={data.firstName} onChange={set("firstName")} />
        <Field label="Last name" value={data.lastName} onChange={set("lastName")} />
        <Field label="Middle name" value={data.middleName} onChange={set("middleName")} />
        <Field label="Phone" type="tel" value={data.phone} onChange={set("phone")} />
        <Field label="Email" type="email" value={data.email} onChange={set("email")} className="sm:col-span-2" />
        <Field label="Location" value={data.address} onChange={set("address")} placeholder="City, State" className="sm:col-span-2" />
      </div>
      <h3 className="mb-3 mt-8 text-sm font-semibold tracking-tight">Extra links and details</h3>
      <EntryList
        items={custom}
        onChange={(items) => update((d) => ({ ...d, customPersonal: items }))}
        blank={{ id: 0, label: "", value: "" }}
        addLabel="Add a detail (LinkedIn, portfolio…)"
        title={(f) => f.label || "New detail"}
        render={(f, setF) => (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_2fr]">
            <Field label="Label" value={f.label} onChange={(v) => setF({ label: v, id: f.id || Date.now() })} placeholder="LinkedIn" />
            <Field label="Value" value={f.value} onChange={(v) => setF({ value: v })} placeholder="linkedin.com/in/you" />
          </div>
        )}
      />
    </>
  );
}

function Education({ data, update }: SectionProps) {
  return (
    <>
      <SectionHeader title="Education" hint="Schools, degrees and dates. Add GPA or honors to the degree line." />
      <EntryList<EducationEntry>
        items={data.education ?? []}
        onChange={(items) => update((d) => ({ ...d, education: items }))}
        blank={{ institution: "", degree: "", years: "" }}
        addLabel="Add education"
        title={(e) => e.institution || "New school"}
        render={(e, set) => (
          <div className="grid grid-cols-1 gap-3">
            <Field label="School" value={e.institution} onChange={(v) => set({ institution: v })} />
            <Field label="Degree" value={e.degree} onChange={(v) => set({ degree: v })} placeholder="B.S. in Biology · GPA 3.8" />
            <Field label="Dates" value={e.years} onChange={(v) => set({ years: v })} placeholder="Aug 2021 – May 2025" />
          </div>
        )}
      />
    </>
  );
}

function Experience({ data, update }: SectionProps) {
  return (
    <>
      <SectionHeader title="Experience" hint="Jobs and internships, most recent first." />
      <EntryList<ExperienceEntry>
        items={data.experience ?? []}
        onChange={(items) => update((d) => ({ ...d, experience: items }))}
        blank={{ title: "", company: "", years: "", bullets: [""] }}
        addLabel="Add experience"
        title={(e) => [e.title, e.company].filter(Boolean).join(" · ") || "New position"}
        render={(e, set) => (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Job title" value={e.title} onChange={(v) => set({ title: v })} />
              <Field label="Company" value={e.company} onChange={(v) => set({ company: v })} />
              <Field label="Dates" value={e.years} onChange={(v) => set({ years: v })} className="sm:col-span-2" />
            </div>
            <Bullets bullets={e.bullets} onChange={(bullets) => set({ bullets })} />
          </>
        )}
      />
    </>
  );
}

function Leadership({ data, update }: SectionProps) {
  return (
    <>
      <SectionHeader title="Leadership & projects" hint="Clubs, volunteering and projects. Some templates call this section Projects." />
      <EntryList<LeadershipEntry>
        items={data.leadership ?? []}
        onChange={(items) => update((d) => ({ ...d, leadership: items }))}
        blank={{ title: "", role: "", years: "", description: "", bullets: [""] }}
        addLabel="Add activity or project"
        title={(e) => e.title || "New activity"}
        render={(e, set) => (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Organization or project" value={e.title} onChange={(v) => set({ title: v })} className="sm:col-span-2" />
              <Field label="Role" value={e.role} onChange={(v) => set({ role: v })} />
              <Field label="Dates" value={e.years} onChange={(v) => set({ years: v })} />
            </div>
            <Bullets bullets={e.bullets} onChange={(bullets) => set({ bullets })} />
          </>
        )}
      />
    </>
  );
}

function Honors({ data, update }: SectionProps) {
  return (
    <>
      <SectionHeader title="Honors & awards" hint="Scholarships, awards and recognitions." />
      <EntryList<{ honor: string }>
        items={data.honorsList ?? []}
        onChange={(items) => update((d) => ({ ...d, honorsList: items }))}
        blank={{ honor: "" }}
        addLabel="Add honor"
        title={(h, i) => h.honor || `Honor ${i + 1}`}
        render={(h, set) => <Field label="Honor" value={h.honor} onChange={(v) => set({ honor: v })} />}
      />
    </>
  );
}

function Skills({ data, update }: SectionProps) {
  return (
    <>
      <SectionHeader title="Skills & interests" hint="Tools, languages and interests, in a sentence or two." />
      <label className="block">
        <span className="field-label">Skills and interests</span>
        <textarea
          className="field min-h-[10rem] resize-none [field-sizing:content]"
          value={data.skillsInterests ?? ""}
          onChange={(e) => update((d) => ({ ...d, skillsInterests: e.target.value }))}
        />
      </label>
    </>
  );
}

export function SectionForm({ section, ...props }: SectionProps & { section: SectionId }) {
  switch (section) {
    case "personal":
      return <Personal {...props} />;
    case "education":
      return <Education {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "leadership":
      return <Leadership {...props} />;
    case "honors":
      return <Honors {...props} />;
    case "skills":
      return <Skills {...props} />;
  }
}
