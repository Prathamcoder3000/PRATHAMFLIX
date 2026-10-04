"use client";

import { useSyncExternalStore, useCallback, useMemo, useTransition } from "react";
import { getProfile } from "@/data/profiles";
import type { Profile, ProfileId, ProfileState } from "@/types";

const STORAGE_KEY = "prathamflix_profile";
const SYNC_EVENT = "prathamflix_profile_change";

type Snapshot = { id: ProfileId; hasSelected: boolean };

const SERVER_SNAPSHOT: Snapshot = { id: "pratham", hasSelected: true };
const INITIAL_VISIT_SNAPSHOT: Snapshot = { id: "pratham", hasSelected: false };
const PRATHAM_SELECTED_SNAPSHOT: Snapshot = { id: "pratham", hasSelected: true };
const RECRUITER_SELECTED_SNAPSHOT: Snapshot = { id: "recruiter", hasSelected: true };

let cachedRaw: string | null | undefined = undefined;
let cachedSnapshot: Snapshot = SERVER_SNAPSHOT;

function getSnapshot(): Snapshot {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      if (raw === "recruiter") {
        cachedSnapshot = RECRUITER_SELECTED_SNAPSHOT;
      } else if (raw === "pratham") {
        cachedSnapshot = PRATHAM_SELECTED_SNAPSHOT;
      } else if (raw && raw !== "null") {
        // Invalid stored value fallback
        cachedSnapshot = PRATHAM_SELECTED_SNAPSHOT;
      } else {
        // Not yet selected (First visit)
        cachedSnapshot = INITIAL_VISIT_SNAPSHOT;
      }
    }
  } catch {
    return SERVER_SNAPSHOT;
  }

  return cachedSnapshot;
}

function getServerSnapshot(): Snapshot {
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

function saveProfile(id: ProfileId): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, id);
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: id }));
  } catch (err) {
    console.warn("Failed to persist profile state:", err);
  }
}

export function useProfile(): ProfileState {
  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [, startTransition] = useTransition();

  const profileId: ProfileId = store.id;
  const isProfileSelected: boolean = store.hasSelected;

  const setProfile = useCallback((id: ProfileId) => {
    startTransition(() => {
      saveProfile(id);
    });
  }, []);

  const switchProfile = useCallback(
    (id: ProfileId) => {
      setProfile(id);
    },
    [setProfile]
  );

  const profile: Profile = useMemo(() => getProfile(profileId), [profileId]);

  return {
    profile,
    profileId,
    isProfileSelected,
    isRecruiterMode: profileId === "recruiter",
    isPrathamMode: profileId === "pratham",
    setProfile,
    switchProfile,
  };
}
