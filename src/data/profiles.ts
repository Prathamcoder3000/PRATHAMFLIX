import type { Profile, ProfileId } from "@/types/profile";

export const PROFILES: Record<ProfileId, Profile> = {
  pratham: {
    id: "pratham",
    name: "PRATHAM",
    role: "Engineering & Architecture",
    badge: "Full Portfolio",
    description:
      "Explore all engineering systems, deep case studies, experiments, AI pipelines, and creative code.",
    tagline: "The complete PRATHAMFLIX portfolio experience.",
    accent: "#e50926",
    avatarVariant: "pratham",
  },
  recruiter: {
    id: "recruiter",
    name: "RECRUITER",
    role: "Professional Evaluation",
    badge: "Professional View",
    description:
      "Condensed presentation prioritizing engineering systems, core technology stack, and verified capabilities.",
    tagline: "Focused professional view optimized for hiring and review.",
    accent: "#3b82f6",
    avatarVariant: "recruiter",
  },
};

export const PROFILES_LIST: Profile[] = [
  PROFILES.pratham,
  PROFILES.recruiter,
];

export function getProfile(id?: string | null): Profile {
  if (id === "recruiter") {
    return PROFILES.recruiter;
  }
  return PROFILES.pratham;
}
