import Link from "next/link";
import { LuArrowRight, LuDownload, LuEye, LuLayoutTemplate, LuRepeat } from "react-icons/lu";
import { Logo } from "@/components/logo";
import { TemplateThumb } from "@/components/template-thumb";
import { accountsEnabled } from "@/lib/config";
import { TEMPLATES } from "@/lib/templates";

const HERO = ["business", "law", "data-analytics"];

const FEATURES = [
  { icon: LuEye, title: "Live PDF preview", body: "Every keystroke re-renders the real PDF beside the form, so what you see is exactly what you send." },
  { icon: LuLayoutTemplate, title: "Templates by field", body: `${TEMPLATES.length} layouts tuned for business, STEM, health, law, policy, journalism and more.` },
  { icon: LuRepeat, title: "Switch any time", body: "Your content lives apart from the design. Try another template and nothing gets lost." },
  { icon: LuDownload, title: "One-click PDF", body: "Download a clean, text-based PDF that applicant tracking systems can read." },
];

const STEPS = [
  { n: "01", title: "Pick a template", body: "Start from a layout recruiters in your field expect." },
  { n: "02", title: "Fill in your story", body: "Education, experience, leadership, honors and skills, one section at a time." },
  { n: "03", title: "Download and apply", body: "Tweak the font and size, then export a polished PDF." },
];

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Logo />
          <nav className="ml-6 hidden items-center gap-6 text-sm text-subtle md:flex" aria-label="Main">
            <a href="#templates" className="hover:text-ink">Templates</a>
            <a href="#how" className="hover:text-ink">How it works</a>
          </nav>
          <div className="flex-1" />
          {accountsEnabled && (
            <Link href="/register/login" className="btn btn-ghost hidden sm:inline-flex">
              Sign in
            </Link>
          )}
          <Link href="/demo" className="btn btn-primary">
            Try the demo
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[36rem] max-w-4xl rounded-full bg-accent/30 blur-3xl dark:bg-accent/10" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
            <div>
              <p className="eyebrow">Resume builder for students</p>
              <h1 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                A resume that looks the part, <span className="italic text-accent-ink">in an afternoon.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-subtle">
                Pick a template made for your field, fill in your story, and watch a polished PDF update as you type.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/demo" className="btn btn-primary px-6 py-3 text-base">
                  Try the demo <LuArrowRight />
                </Link>
                <a href="#templates" className="btn btn-secondary px-6 py-3 text-base">
                  See the templates
                </a>
              </div>
              <p className="mt-4 text-sm text-subtle">No sign-up. The demo opens a sample resume you can edit and download.</p>
            </div>

            <div className="relative mx-auto h-[25rem] w-full max-w-md sm:h-[30rem]">
              {HERO.map((id, i) => {
                const t = TEMPLATES.find((x) => x.id === id)!;
                const pos = [
                  "left-0 top-8 -rotate-6 w-[58%]",
                  "right-0 top-0 rotate-[5deg] w-[58%]",
                  "left-1/2 top-14 -translate-x-1/2 w-[64%] z-10",
                ][i];
                return (
                  <div key={id} className={`absolute ${pos} rounded-lg shadow-page`}>
                    <TemplateThumb id={id} name={t.name} priority sizes="(min-width: 640px) 290px, 60vw" />
                  </div>
                );
              })}
              <div className="absolute bottom-6 left-0 z-20 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-medium shadow-soft sm:bottom-10 sm:-left-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live preview
              </div>
              <div className="absolute bottom-0 right-0 z-20 rounded-xl border border-line bg-surface px-3 py-2 text-xs shadow-soft sm:bottom-4 sm:-right-4">
                <span className="text-subtle">Template</span> <span className="font-semibold">Data Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/35 text-lg text-accent-ink dark:bg-accent/15">
                  <f.icon />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-subtle">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{TEMPLATES.length} templates</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Made for the job you want</h2>
              <p className="mt-2 max-w-xl text-subtle">Every preview below is the real template, rendered with the demo&apos;s sample resume.</p>
            </div>
            <Link href="/demo" className="btn btn-secondary">
              Open one in the editor <LuArrowRight />
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
            {TEMPLATES.map((t) => (
              <li key={t.id} className="group">
                <div className="transition duration-300 group-hover:-translate-y-1 group-hover:shadow-page">
                  <TemplateThumb id={t.id} name={t.name} sizes="(min-width: 1280px) 210px, (min-width: 640px) 30vw, 45vw" />
                </div>
                <p className="mt-3 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-subtle">{t.category}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-20 bg-primary text-on-primary">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-on-primary/70">How it works</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">From blank page to PDF in three steps</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="border-t border-on-primary/20 pt-6">
                  <span className="font-display text-4xl font-semibold text-accent dark:text-on-primary/60">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm opacity-75">{s.body}</p>
                </li>
              ))}
            </ol>
            <Link href="/demo" className="btn mt-12 bg-accent px-6 py-3 text-base text-navy hover:opacity-90 dark:bg-on-primary dark:text-accent">
              Try the demo <LuArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-subtle sm:flex-row sm:px-6">
        <Logo />
        <nav className="flex gap-6" aria-label="Legal">
          <Link href="/legal/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/legal/terms" className="hover:text-ink">Terms</Link>
          <a href="https://github.com/alexlautin/sevenworks" className="hover:text-ink">GitHub</a>
        </nav>
      </footer>
    </div>
  );
}
