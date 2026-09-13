export type ProfileId = "pratham" | "recruiter";

export interface Profile {
  id: ProfileId;
  name: string;
  role: string;
  badge: string;
  description: string;
  tagline: string;
  accent: string;
  avatarVariant: "pratham" | "recruiter";
}

export interface ProfileState {
  profile: Profile;
  profileId: ProfileId;
  isProfileSelected: boolean;
  isRecruiterMode: boolean;
  isPrathamMode: boolean;
  setProfile: (id: ProfileId) => void;
  switchProfile: (id: ProfileId) => void;
}
