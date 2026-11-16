"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDemoMode } from "@/lib/demo";
import { signOutUser, useAuth } from "./auth";
import { Logo } from "./logo";

const NAV = [
  { href: "/dashboard", label: "My resumes" },
  { href: "/templates", label: "Templates" },
];

// Header for the signed-in / demo pages (dashboard, templates, profile).
export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const demo = useDemoMode();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Logo href="/dashboard" className="shrink-0" compact />
        <nav className="flex items-center gap-1 sm:ml-6" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition ${
                pathname === n.href ? "bg-muted font-semibold text-ink" : "text-subtle hover:text-ink"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        {!demo && user && (
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-subtle sm:block">
              {user.displayName || user.email}
            </span>
            <button
              className="btn btn-ghost"
              onClick={async () => {
                await signOutUser();
                router.replace("/");
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
