"use client";

import { useState, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "prathamflix_intro_seen";

const emptySubscribe = () => () => {};

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getSeenSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function useIntroState() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const hasReducedMotion = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    getReducedMotionSnapshot,
    () => false
  );

  const isReturningVisitor = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      window.addEventListener("storage", callback);
      return () => window.removeEventListener("storage", callback);
    },
    getSeenSnapshot,
    () => false
  );

  const [hasReplayed, setHasReplayed] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const isIntroActive = isMounted && !isDismissed && (hasReplayed || !isReturningVisitor);

  const completeIntro = useCallback(() => {
    setIsDismissed(true);
    setHasReplayed(false);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const replayIntro = useCallback(() => {
    setIsDismissed(false);
    setHasReplayed(true);
  }, []);

  return {
    isIntroActive,
    isReturningVisitor,
    hasReducedMotion,
    isMounted,
    completeIntro,
    replayIntro,
  };
}
