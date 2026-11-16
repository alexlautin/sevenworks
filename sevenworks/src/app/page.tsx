import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Logo } from "@/components/logo";
import { TemplateThumb } from "@/components/template-thumb";
import { accountsEnabled } from "@/lib/config";
import { TEMPLATES } from "@/lib/templates";

const SHOWCASE = ["business", "software-engineering", "data-analytics", "law", "journalism"];

export default function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-var(--banner-h,0px))] flex-col overflow-x-clip">
      <header className="mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <Logo />
        <div className="flex-1" />
        <nav className="flex items-center gap-1 text-sm" aria-label="Main">
          {accountsEnabled && (
            <Link href="/register/login" className="btn btn-ghost">
              Sign in
            </Link>
          )}
          <a href="https://github.com/alexlautin/sevenworks" className="btn btn-ghost hidden sm:inline-flex">
            GitHub
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
            Resumes that look the part.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-balance text-lg text-subtle">
            Pick a template, fill in your story, and watch the PDF update as you type.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/demo" className="btn btn-primary group h-11 px-5 text-[15px]">
              Try the demo
              <LuArrowRight className="transition group-hover:translate-x-0.5" />
            </Link>
            <span className="text-sm text-subtle">No sign-up needed</span>
          </div>
        </section>

        <section aria-label="Templates" className="relative pb-24">
          <ul className="no-scrollbar mx-auto flex max-w-6xl snap-x gap-4 overflow-x-auto px-4 sm:grid sm:grid-cols-5 sm:gap-5 sm:overflow-visible sm:px-6">
            {SHOWCASE.map((id, i) => {
              const t = TEMPLATES.find((x) => x.id === id)!;
              return (
                <li
                  key={id}
                  className={`w-[62%] shrink-0 snap-center sm:w-auto ${i % 2 ? "sm:translate-y-8" : ""}`}
                >
                  <div className="rounded-md shadow-page transition duration-300 hover:-translate-y-1">
                    <TemplateThumb id={id} name={t.name} priority sizes="(min-width: 640px) 220px, 62vw" />
                  </div>
                  <p className="mt-3 text-center text-xs text-subtle">{t.name}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-14 text-center text-sm text-subtle">
            {TEMPLATES.length} templates for business, STEM, health, law, policy and the arts.
          </p>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-t border-line px-4 py-6 text-xs text-subtle sm:px-6">
        <span>© SevenWorks</span>
        <nav className="flex gap-5" aria-label="Legal">
          <Link href="/legal/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/legal/terms" className="hover:text-ink">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
