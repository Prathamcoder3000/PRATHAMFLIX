"use client";

import React from "react";
import Link from "next/link";
import { Search, Menu, Briefcase } from "lucide-react";
import { PrathamflixLogo } from "@/components/brand/PrathamflixLogo";
import { cn } from "@/lib/utils";

export interface MobileNavbarProps {
  className?: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onSearchClick?: () => void;
  onRecruiterClick?: () => void;
}

export function MobileNavbar({
  className,
  isMenuOpen,
  onToggleMenu,
  onSearchClick,
  onRecruiterClick,
}: MobileNavbarProps) {
  return (
    <nav
      className={cn("flex md:hidden items-center justify-between w-full h-14 sm:h-16", className)}
      aria-label="Mobile Navigation Bar"
    >
      {/* Brand Logo */}
      <Link
        href="/"
        className="shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md"
        aria-label="PRATHAMFLIX Home"
      >
        <PrathamflixLogo size="sm" />
      </Link>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Search Entry */}
        <button
          type="button"
          onClick={onSearchClick}
          className={cn(
            "inline-flex items-center justify-center h-10 w-10 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label="Search"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Recruiter Mode Button */}
        <button
          type="button"
          onClick={onRecruiterClick}
          className={cn(
            "inline-flex items-center justify-center h-10 w-10 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label="Recruiter Mode"
          title="Recruiter Mode"
        >
          <Briefcase className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
        </button>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={onToggleMenu}
          className={cn(
            "inline-flex items-center justify-center h-10 w-10 rounded-lg text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          )}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
