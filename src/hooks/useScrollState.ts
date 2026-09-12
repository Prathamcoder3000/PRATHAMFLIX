"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("scroll", callback, { passive: true });
  return () => {
    window.removeEventListener("scroll", callback);
  };
}

function getScrollSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY > 20;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useScrollState(threshold = 20) {
  const isScrolled = useSyncExternalStore(
    subscribe,
    () => {
      if (typeof window === "undefined") return false;
      return window.scrollY > threshold;
    },
    getServerSnapshot
  );

  return { isScrolled };
}
