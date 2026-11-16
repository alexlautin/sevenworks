"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDemoMode } from "@/lib/demo";
import { accountsEnabled } from "@/lib/config";
import { useAuth } from "./auth";

// Lets a page render in demo mode or for a signed-in user. Otherwise it points to the demo
// (accounts off) or sends the visitor to sign in.
export function RequireWorkspace({ children }: { children: ReactNode }) {
  const demo = useDemoMode();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && !demo && accountsEnabled && !loading && !user) router.replace("/register/login");
  }, [mounted, demo, loading, user, router]);

  if (!mounted || (!demo && accountsEnabled && (loading || !user))) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-ink" aria-label="Loading" />
      </div>
    );
  }

  if (!demo && !accountsEnabled) return <DemoRequired />;
  return <>{children}</>;
}

export function DemoRequired({ title = "Accounts are turned off here" }: { title?: string }) {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 text-center">
      <div className="card w-full p-8">
        <p className="eyebrow">Portfolio demo</p>
        <h1 className="mt-3 text-xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-subtle">
          This copy of SevenWorks runs as a public demo, so sign-in and saved accounts are off. The demo has the full
          editor, every template and PDF download, with a sample resume you can change.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link href="/demo" className="btn btn-primary">
            Try the demo
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
