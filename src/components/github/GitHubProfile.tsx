"use client";

import React from "react";
import Image from "next/image";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import type { GitHubProfile as ProfileType } from "@/lib/github/github-types";
import {
  FolderGit2,
  Users,
  UserCheck,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

interface GitHubProfileProps {
  profile: ProfileType;
  className?: string;
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export const GitHubProfile: React.FC<GitHubProfileProps> = ({
  profile,
  className = "",
}) => {
  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Avatar & Identity Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={`${profile.name} GitHub Avatar`}
                width={96}
                height={96}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-white/10 shadow-lg"
              />
            ) : (
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-neutral-900 border-2 border-white/10 flex items-center justify-center font-bold text-3xl text-white">
                {profile.name.charAt(0)}
              </div>
            )}
            <div className="absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center text-white shadow">
              <GithubIcon className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <Heading2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {profile.name}
              </Heading2>
              <Badge variant="subtle" size="sm" className="font-mono text-[11px]">
                @{profile.username}
              </Badge>
            </div>

            <Paragraph className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              {profile.bio}
            </Paragraph>

            {profile.location && (
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono pt-1">
                <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Metrics & CTA */}
        <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-4 w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
          {/* Telemetry Stats */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5">
            <div className="text-center">
              <div className="text-base sm:text-lg font-mono font-bold text-white">
                {profile.publicRepos}
              </div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1 justify-center">
                <FolderGit2 className="h-3 w-3" />
                <span>Repos</span>
              </div>
            </div>

            <div className="w-px h-6 bg-white/10" />

            <div className="text-center">
              <div className="text-base sm:text-lg font-mono font-bold text-white">
                {profile.followers}
              </div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1 justify-center">
                <Users className="h-3 w-3" />
                <span>Followers</span>
              </div>
            </div>

            <div className="w-px h-6 bg-white/10" />

            <div className="text-center">
              <div className="text-base sm:text-lg font-mono font-bold text-white">
                {profile.following}
              </div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1 justify-center">
                <UserCheck className="h-3 w-3" />
                <span>Following</span>
              </div>
            </div>
          </div>

          {/* External Profile Link */}
          <a
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              rightIcon={<ExternalLink className="h-4 w-4" />}
            >
              Open GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </Surface>
  );
};
