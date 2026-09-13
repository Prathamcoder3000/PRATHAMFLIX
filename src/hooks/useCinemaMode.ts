"use client";

import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "prathamflix_cinema_mode";
const SYNC_EVENT = "prathamflix_cinema_mode_change";

let cachedRaw: string | null = null;
let cachedCinemaMode = false;

function getSnapshot(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedCinemaMode = raw === "true";
    }
  } catch {
    cachedCinemaMode = false;
  }

  return cachedCinemaMode;
}

const SERVER_SNAPSHOT = false;

function getServerSnapshot(): boolean {
  return SERVER_SNAPSHOT;
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(SYNC_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(SYNC_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function saveCinemaMode(enabled: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, String(enabled));
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: enabled }));
  } catch (err) {
    console.warn("Failed to persist cinema mode state:", err);
  }
}

export function useCinemaMode() {
  const isCinemaMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const enterCinemaMode = useCallback(() => {
    saveCinemaMode(true);
  }, []);

  const exitCinemaMode = useCallback(() => {
    saveCinemaMode(false);
  }, []);

  const toggleCinemaMode = useCallback(() => {
    saveCinemaMode(!cachedCinemaMode);
  }, []);

  return {
    isCinemaMode,
    enterCinemaMode,
    exitCinemaMode,
    toggleCinemaMode,
  };
}

export function triggerCinemaModeToggle() {
  if (typeof window !== "undefined") {
    const next = !getSnapshot();
    saveCinemaMode(next);
  }
}
