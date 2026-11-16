"use client";

import { useSyncExternalStore } from "react";

// Demo mode flag. Lives in sessionStorage so it lasts for this tab only.
const FLAG_KEY = "sevenworks-demo";
const CHANGE_EVENT = "sevenworks-demo-change";

// Fallback for when sessionStorage is blocked (private windows, strict settings).
let memoryFlag = false;

export function isDemoMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(FLAG_KEY) === "1" || memoryFlag;
  } catch {
    return memoryFlag;
  }
}

function setFlag(on: boolean) {
  memoryFlag = on;
  try {
    if (on) window.sessionStorage.setItem(FLAG_KEY, "1");
    else window.sessionStorage.removeItem(FLAG_KEY);
  } catch {
    // memoryFlag covers this page load.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export const enterDemoMode = () => setFlag(true);
export const exitDemoMode = () => setFlag(false);

function subscribe(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// React hook: re-renders when demo mode turns on or off. Always false during SSR.
export function useDemoMode(): boolean {
  return useSyncExternalStore(subscribe, isDemoMode, () => false);
}
