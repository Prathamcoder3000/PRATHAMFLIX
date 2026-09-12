"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Briefcase, User, ChevronDown } from "lucide-react";
import { PrathamflixLogo } from "@/components/brand/PrathamflixLogo";
import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";
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

        {/* Primary Route Links */}
        <ul className="flex items-center gap-1 lg:gap-2 list-none m-0 p-0">
          {PRIMARY_NAV_ITEMS.map((item) => {
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
          title="Search"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Recruiter Mode Entry Point */}
        <button
          type="button"
          onClick={onRecruiterClick}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-900/80 hover:bg-neutral-800",
            "border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shadow-sm"
          )}
          aria-label="Recruiter Mode Entry Point"
          title="Recruiter Mode"
        >
          <Briefcase className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
          <span className="hidden lg:inline">Recruiter Mode</span>
        </button>

        {/* Profile / Viewing Mode Entry Point */}
        <button
          type="button"
          onClick={onProfileClick}
          className={cn(
            "flex items-center gap-1.5 p-1 rounded-md hover:bg-white/5 transition-colors select-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label="Profile and viewing modes"
          title="Profile"
        >
          <div className="h-7 w-7 rounded bg-gradient-to-br from-[#ff334b] via-[#e50926] to-[#800414] flex items-center justify-center text-white shadow-sm border border-white/15">
            <User className="h-4 w-4" aria-hidden="true" />
          </div>
          <ChevronDown className="h-3 w-3 text-neutral-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
