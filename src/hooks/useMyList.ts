"use client";

import { useSyncExternalStore, useCallback, useMemo, useTransition } from "react";
import { getAllProjects } from "@/data/projects";
import type { ProjectDetailData, MyListState } from "@/types";

const STORAGE_KEY = "prathamflix_my_list";
const SYNC_EVENT = "prathamflix_my_list_change";

let cachedRaw: string | null = null;
let cachedIds: string[] = [];
const SERVER_SNAPSHOT: string[] = [];

/**
 * Reads stored IDs from localStorage with snapshot caching
 */
function getSnapshot(): string[] {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      if (!raw) {
        cachedIds = [];
      } else {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          cachedIds = parsed.filter((id) => typeof id === "string" && id.trim().length > 0);
        } else {
          cachedIds = [];
        }
      }
    }
  } catch {
    cachedIds = [];
  }

  return cachedIds;
}

function getServerSnapshot(): string[] {
  return SERVER_SNAPSHOT;
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(SYNC_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(SYNC_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Saves IDs safely to localStorage and dispatches sync event
 */
function saveStoredIds(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: ids }));
  } catch (error) {
    console.warn("Failed to persist My List to localStorage:", error);
  }
}

/**
 * Reusable hook for managing saved projects state in PRATHAMFLIX
 */
export function useMyList(): MyListState {
  const savedIds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [, startTransition] = useTransition();

  const isHydrated = typeof window !== "undefined";

  const isSaved = useCallback(
    (projectId: string): boolean => {
      if (!projectId) return false;
      return savedIds.includes(projectId);
    },
    [savedIds]
  );

  const addToMyList = useCallback(
    (projectId: string) => {
      if (!projectId) return;
      if (savedIds.includes(projectId)) return;

      const next = [...savedIds, projectId];
      startTransition(() => {
        saveStoredIds(next);
      });
    },
    [savedIds]
  );

  const removeFromMyList = useCallback(
    (projectId: string) => {
      if (!projectId) return;
      const next = savedIds.filter((id) => id !== projectId);
      startTransition(() => {
        saveStoredIds(next);
      });
    },
    [savedIds]
  );

  const toggleMyList = useCallback(
    (projectId: string) => {
      if (!projectId) return;
      if (savedIds.includes(projectId)) {
        removeFromMyList(projectId);
      } else {
        addToMyList(projectId);
      }
    },
    [savedIds, addToMyList, removeFromMyList]
  );

  const clearMyList = useCallback(() => {
    startTransition(() => {
      saveStoredIds([]);
    });
  }, []);

  // Derive saved projects deterministically from canonical projects dataset
  const savedProjects = useMemo((): ProjectDetailData[] => {
    if (!isHydrated) return [];
    const all = getAllProjects();
    // Return projects in canonical ordering from the master dataset that are present in savedIds
    return all.filter((project) => savedIds.includes(project.id));
  }, [savedIds, isHydrated]);

  return {
    savedIds,
    savedProjects,
    isHydrated,
    isSaved,
    addToMyList,
    removeFromMyList,
    toggleMyList,
    clearMyList,
  };
}
