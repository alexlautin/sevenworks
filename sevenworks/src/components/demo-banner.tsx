"use client";

import { useEffect } from "react";
import { useDemoMode } from "@/lib/demo";

// Thin bar shown on every page while demo mode is on.
export function DemoBanner() {
  const demo = useDemoMode();

  // Lets full-height pages (the editor) subtract the banner.
  useEffect(() => {
    document.documentElement.style.setProperty("--banner-h", demo ? "2.25rem" : "0px");
  }, [demo]);
  if (!demo) return null;

  return (
    <div
      role="status"
      className="relative z-[60] flex h-9 shrink-0 items-center justify-center gap-2 border-b border-accent/50 bg-accent/30 px-4 text-xs text-ink sm:text-sm"
    >
      <span className="truncate">
        <span className="font-semibold">Demo mode</span>
        <span className="hidden sm:inline"> · sample data, saved only in this tab</span>
      </span>
      <span aria-hidden="true">·</span>
      <a href="/demo/exit" className="shrink-0 font-semibold underline underline-offset-2 hover:text-accent-ink">
        Exit demo
      </a>
    </div>
  );
}
