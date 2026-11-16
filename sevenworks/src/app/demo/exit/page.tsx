"use client";

import { useEffect } from "react";
import { exitDemoMode } from "@/lib/demo";
import { resetDemoData } from "@/lib/demo-data";

export default function ExitDemoPage() {
  useEffect(() => {
    exitDemoMode();
    resetDemoData();
    // Full reload so in-memory sample data is dropped too
    window.location.replace("/");
  }, []);

  return <p className="p-8 text-center text-sm text-subtle">Leaving the demo…</p>;
}
