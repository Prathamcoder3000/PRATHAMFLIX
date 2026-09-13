"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Briefcase, ChevronDown } from "lucide-react";
import { PrathamflixLogo } from "@/components/brand/PrathamflixLogo";
import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { getNavigationForProfile } from "@/lib/navigation";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";

export interface DesktopNavbarProps {
  className?: string;
  onSearchClick?: () => void;
  onRecruiterClick?: () => void;
  onProfileClick?: () => void;
}

export function DesktopNavbar({
  className,
  onSearchClick,
  onRecruiterClick,
  onProfileClick,
}: DesktopNavbarProps) {
  const pathname = usePathname();
  const { profileId, isRecruiterMode } = useProfile();
  const navItems = getNavigationForProfile(profileId);

  return (
    <nav
      className={cn("hidden md:flex items-center justify-between w-full h-16 sm:h-20", className)}
      aria-label="Desktop Main Navigation"
    >
      {/* Left Area: Brand & Primary Links */}
      <div className="flex items-center gap-6 lg:gap-10">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md"
          aria-label="PRATHAMFLIX Home"
        >
          <PrathamflixLogo size="sm" />
        </Link>

        {/* Primary Route Links (Profile-aware) */}
        <ul className="flex items-center gap-1 lg:gap-2 list-none m-0 p-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 select-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-neutral-100 hover:bg-white/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--accent)] rounded-full shadow-[0_0_8px_var(--accent)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Area: Search, Recruiter Mode, Profile Entry Points */}
      <div className="flex items-center gap-2 lg:gap-3">
        {/* Search Entry Point */}
        <button
          type="button"
          onClick={onSearchClick}
          className={cn(
            "inline-flex items-center justify-center h-9 w-9 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label="Search projects and skills"
          title="Search (Ctrl+K)"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Recruiter Mode Quick Toggle Button */}
        <button
          type="button"
          onClick={onRecruiterClick}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shadow-sm",
            isRecruiterMode
              ? "bg-blue-600/20 text-blue-300 border border-blue-500/40 hover:bg-blue-600/30"
              : "bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white"
          )}
          aria-label="Recruiter Mode Toggle"
          aria-pressed={isRecruiterMode}
          title={isRecruiterMode ? "Recruiter Mode Active" : "Switch to Recruiter Mode"}
        >
          <Briefcase className={cn("h-3.5 w-3.5", isRecruiterMode ? "text-blue-400" : "text-[var(--accent)]")} aria-hidden="true" />
          <span className="hidden lg:inline">{isRecruiterMode ? "Recruiter Mode" : "Recruiter View"}</span>
        </button>

        {/* Profile / Viewing Mode Entry Point */}
        <button
          type="button"
          onClick={onProfileClick}
          className={cn(
            "flex items-center gap-1.5 p-1 rounded-lg hover:bg-white/10 transition-colors select-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label={`Current Profile: ${profileId.toUpperCase()}. Click to switch profile.`}
          title={`Profile: ${profileId.toUpperCase()}`}
        >
          <ProfileAvatar variant={profileId} size="sm" />
          <ChevronDown className="h-3 w-3 text-neutral-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

