"use client";

import React from "react";
import type { Profile, ProfileId } from "@/types/profile";
import { ProfileAvatar } from "./ProfileAvatar";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

export interface ProfileCardProps {
  profile: Profile;
  isSelected?: boolean;
  onSelect: (id: ProfileId) => void;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  isSelected = false,
  onSelect,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(profile.id)}
      aria-label={`Select profile ${profile.name}: ${profile.badge} — ${profile.role}`}
      className={`group flex flex-col items-center text-center p-4 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-black select-none ${className}`}
    >
      {/* Avatar Container with Glow */}
      <div className="relative mb-4 sm:mb-6">
        {/* Hover Ambient Glow */}
        <div
          className="absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: profile.accent }}
          aria-hidden="true"
        />

        {/* Selected Ring Highlight */}
        <div
          className={`rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${
            isSelected
              ? "ring-4 ring-[var(--accent)] ring-offset-4 ring-offset-black shadow-2xl"
              : "group-hover:ring-2 group-hover:ring-white/40"
          }`}
        >
          <ProfileAvatar variant={profile.id} size="xl" />
        </div>

        {/* Selected Checkmark Badge */}
        {isSelected && (
          <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-[var(--accent)] text-white shadow-md border-2 border-black">
            <Check className="h-4 w-4" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Profile Name & Metadata */}
      <div className="space-y-1.5 max-w-[200px] sm:max-w-[240px]">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-neutral-300 group-hover:text-white transition-colors tracking-tight">
            {profile.name}
          </h3>
        </div>

        <Badge
          variant={profile.id === "pratham" ? "accent" : "subtle"}
          size="sm"
          className="font-mono text-[10px] uppercase tracking-wider"
        >
          {profile.badge}
        </Badge>

        <p className="text-xs text-neutral-400 font-normal leading-relaxed pt-1">
          {profile.role}
        </p>
      </div>
    </button>
  );
};
