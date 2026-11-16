"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getResume, saveResume } from "@/lib/data";
import type { Resume, ResumeData } from "@/lib/resume";

export type SaveStatus = "saved" | "saving" | "unsaved" | "error";

const AUTOSAVE_MS = 800;

// Loads one resume through the data layer and autosaves edits shortly after the last change.
export function useResumeEditor(id: string | null) {
  const [resume, setResume] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<SaveStatus>("saved");
  const pending = useRef<Partial<Pick<Resume, "name" | "templateId" | "formData">>>({});
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No resume selected.");
      return;
    }
    let cancelled = false;
    setResume(null);
    setError(null);
    getResume(id)
      .then((r) => {
        if (cancelled) return;
        if (r) setResume(r);
        else setError("This resume could not be found.");
      })
      .catch((e: Error) => !cancelled && setError(e.message));
    return () => {
      cancelled = true;
    };
  }, [id]);

  const flush = useCallback(async () => {
    if (!id || Object.keys(pending.current).length === 0) return;
    const patch = pending.current;
    pending.current = {};
    setStatus("saving");
    try {
      await saveResume(id, patch);
      setStatus(Object.keys(pending.current).length ? "unsaved" : "saved");
    } catch {
      pending.current = { ...patch, ...pending.current };
      setStatus("error");
    }
  }, [id]);

  const queue = useCallback(
    (patch: Partial<Pick<Resume, "name" | "templateId" | "formData">>) => {
      pending.current = { ...pending.current, ...patch };
      setStatus("unsaved");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(flush, AUTOSAVE_MS);
    },
    [flush],
  );

  // Save whatever is pending when the page is left.
  useEffect(() => {
    const onHide = () => void flush();
    window.addEventListener("pagehide", onHide);
    return () => {
      window.removeEventListener("pagehide", onHide);
      void flush();
    };
  }, [flush]);

  const updateData = useCallback(
    (update: (data: ResumeData) => ResumeData) => {
      setResume((current) => {
        if (!current) return current;
        const formData = update(current.formData);
        queue({ formData });
        return { ...current, formData };
      });
    },
    [queue],
  );

  const setField = useCallback(
    <K extends keyof ResumeData>(key: K, value: ResumeData[K]) => updateData((d) => ({ ...d, [key]: value })),
    [updateData],
  );

  const setTemplate = useCallback(
    (templateId: string) => {
      setResume((r) => (r ? { ...r, templateId } : r));
      queue({ templateId });
    },
    [queue],
  );

  const setName = useCallback(
    (name: string) => {
      setResume((r) => (r ? { ...r, name } : r));
      queue({ name });
    },
    [queue],
  );

  return { resume, error, status, setField, updateData, setTemplate, setName, saveNow: flush };
}
