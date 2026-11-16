"use client";

import type { ResumeData } from "@/lib/resume";

// Renders a resume to a PDF blob. react-pdf and the templates load on first use only.
export async function renderPdfBlob(templateId: string, data: ResumeData): Promise<Blob> {
  const [{ pdf }, { renderTemplate }] = await Promise.all([import("@react-pdf/renderer"), import("./templates/registry")]);
  return pdf(renderTemplate(templateId, data)).toBlob();
}

export async function downloadPdf(templateId: string, data: ResumeData, fileName: string) {
  const blob = await renderPdfBlob(templateId, data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName.replace(/[\\/:*?"<>|]+/g, "").trim() || "resume"}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
