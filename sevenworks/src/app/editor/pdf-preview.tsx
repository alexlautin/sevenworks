"use client";

import { useEffect, useRef, useState } from "react";
import type { ResumeData } from "@/lib/resume";
import { renderPdfBlob } from "./pdf";

type PdfJs = typeof import("pdfjs-dist");
let pdfjsPromise: Promise<PdfJs> | null = null;

function loadPdfJs(): Promise<PdfJs> {
  if (!pdfjsPromise) {
    pdfjsPromise = import("pdfjs-dist").then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
      return pdfjs;
    });
  }
  return pdfjsPromise;
}

interface Props {
  templateId: string;
  data: ResumeData;
  zoom: number; // 1 = fit width
}

// Live preview: renders the resume with react-pdf, then draws each page to a canvas with pdf.js.
// New pages are drawn off-screen and swapped in, so the preview never flashes while typing.
export function PdfPreview({ templateId, data, zoom }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [updating, setUpdating] = useState(false);
  const run = useRef(0);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!width) return;
    const id = ++run.current;
    setUpdating(true);
    const timer = setTimeout(async () => {
      try {
        const [pdfjs, blob] = await Promise.all([loadPdfJs(), renderPdfBlob(templateId, data)]);
        if (id !== run.current) return;
        const doc = await pdfjs.getDocument({ data: await blob.arrayBuffer() }).promise;
        const pageWidth = Math.min(width - 32, 900) * zoom;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const canvases: HTMLCanvasElement[] = [];
        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (pageWidth / base.width) * dpr });
          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
          canvas.className = "mx-auto block rounded-sm bg-white shadow-page";
          canvas.setAttribute("aria-label", `Resume page ${n}`);
          await page.render({ canvas, canvasContext: canvas.getContext("2d")!, viewport }).promise;
          canvases.push(canvas);
        }
        await doc.destroy();
        if (id !== run.current || !pagesRef.current) return;
        pagesRef.current.replaceChildren(...canvases);
        setState("ready");
      } catch (e) {
        console.error("Preview failed", e);
        if (id === run.current) setState("error");
      } finally {
        if (id === run.current) setUpdating(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [templateId, data, width, zoom]);

  return (
    <div className="relative h-full w-full">
      <div ref={boxRef} className="h-full overflow-auto [scrollbar-gutter:stable]">
        <div ref={pagesRef} className="flex min-w-fit flex-col gap-6 px-4 py-6" />
      </div>
      {state === "loading" && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 text-sm text-subtle">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent-ink" />
            Rendering your resume…
          </div>
        </div>
      )}
      {state === "error" && (
        <p className="absolute inset-x-4 top-4 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">
          The preview could not be rendered. Your changes are still saved.
        </p>
      )}
      {updating && state === "ready" && (
        <span className="pointer-events-none absolute right-4 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-xs text-subtle shadow-soft">
          Updating…
        </span>
      )}
    </div>
  );
}
