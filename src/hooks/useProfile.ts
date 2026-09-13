"use client";

import { useSyncExternalStore, useCallback, useMemo, useTransition } from "react";
import { getProfile } from "@/data/profiles";
import type { Profile, ProfileId, ProfileState } from "@/types";

const STORAGE_KEY = "prathamflix_profile";
const SYNC_EVENT = "prathamflix_profile_change";

let cachedRaw: string | null = null;
let cachedProfileId: ProfileId = "pratham";
let cachedHasSelected = false;

function getSnapshot(): { id: ProfileId; hasSelected: boolean } {
  if (typeof window === "undefined") {
    return { id: "pratham", hasSelected: true };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      if (raw === "recruiter") {
        cachedProfileId = "recruiter";
        cachedHasSelected = true;
      } else if (raw === "pratham") {
        cachedProfileId = "pratham";
        cachedHasSelected = true;
      } else if (raw && raw !== "null") {
        // Invalid stored value fallback
        cachedProfileId = "pratham";
        cachedHasSelected = true;
      } else {
        // Not yet selected (First visit)
        cachedProfileId = "pratham";
        cachedHasSelected = false;
      }
    }
  } catch {
    cachedProfileId = "pratham";
    cachedHasSelected = false;
  }

  return { id: cachedProfileId, hasSelected: cachedHasSelected };
}

const SERVER_SNAPSHOT = { id: "pratham" as ProfileId, hasSelected: true };

function getServerSnapshot(): { id: ProfileId; hasSelected: boolean } {
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
