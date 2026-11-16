"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { enterDemoMode } from "@/lib/demo";
import { listResumes } from "@/lib/data";

// Turns on demo mode for this tab and opens the sample resume in the editor.
export default function DemoPage() {
  const router = useRouter();

  useEffect(() => {
    enterDemoMode();
    listResumes().then((resumes) => {
      router.replace(resumes[0] ? `/editor?id=${resumes[0].id}` : "/dashboard");
    });
  }, [router]);

  return <p className="p-8 text-center text-sm text-subtle">Opening the demo…</p>;
}
