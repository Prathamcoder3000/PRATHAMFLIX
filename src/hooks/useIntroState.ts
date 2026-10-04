"use client";

import { useState, useCallback, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  const [isDismissed, setIsDismissed] = useState(false);

  // Active upon mount until dismissed or skipped
  const isIntroActive = isMounted && !isDismissed;

  const completeIntro = useCallback(() => {
    setIsDismissed(true);
  }, []);

  const replayIntro = useCallback(() => {
    setIsDismissed(false);
  }, []);

  return {
    isIntroActive,
    isReturningVisitor: false,
    hasReducedMotion,
    isMounted,
    completeIntro,
    replayIntro,
  };
}
