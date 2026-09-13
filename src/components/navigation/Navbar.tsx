"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { MobileMenu } from "./MobileMenu";
import { useScrollState } from "@/hooks/useScrollState";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";

const SearchOverlay = dynamic(
  () => import("@/components/search/SearchOverlay").then((mod) => mod.SearchOverlay),
  { ssr: true }
);

const ProfileSwitcher = dynamic(
  () => import("@/components/profile/ProfileSwitcher").then((mod) => mod.ProfileSwitcher),
  { ssr: true }
);

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileSwitcherOpen, setIsProfileSwitcherOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const { isScrolled } = useScrollState(20);
  const { profileId, switchProfile, isRecruiterMode } = useProfile();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const openSearch = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    }
    setIsMobileMenuOpen(false);
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === "function") {
      setTimeout(() => {
        lastActiveElementRef.current?.focus();
      }, 50);
    }
  }, []);

  const handleRecruiterToggle = useCallback(() => {
    const nextMode = isRecruiterMode ? "pratham" : "recruiter";
    switchProfile(nextMode);
    setFeedbackMessage(
      nextMode === "recruiter"
        ? "Switched to Recruiter Mode (Professional View)"
        : "Switched to PRATHAM Mode (Full Portfolio)"
    );
    const timer = setTimeout(() => {
      setFeedbackMessage(null);
    }, 2400);
    return () => clearTimeout(timer);
  }, [isRecruiterMode, switchProfile]);

  const openProfileSwitcher = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProfileSwitcherOpen(true);
  }, []);

  // Global Keyboard Shortcuts for Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Ctrl+K / Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }

      // 2. '/' shortcut
      if (e.key === "/" && !isSearchOpen) {
        const target = e.target as HTMLElement | null;
        const isEditing =
          target?.tagName === "INPUT" ||
          target?.tagName === "TEXTAREA" ||
          target?.isContentEditable;

        if (!isEditing) {
          e.preventDefault();
          openSearch();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen, openSearch]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#08090d]/90 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent border-b border-transparent",
          className
        )}
        role="banner"
      >
        <Container maxWidth="2xl">
          <DesktopNavbar
            onSearchClick={openSearch}
            onRecruiterClick={handleRecruiterToggle}
            onProfileClick={openProfileSwitcher}
          />

          <MobileNavbar
            isMenuOpen={isMobileMenuOpen}
            onToggleMenu={toggleMobileMenu}
            onSearchClick={openSearch}
            onRecruiterClick={handleRecruiterToggle}
          />
        </Container>

        {/* Mobile Drawer Navigation */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          onRecruiterClick={handleRecruiterToggle}
          onProfileClick={openProfileSwitcher}
        />

        {/* Status Notification Toast */}
        {feedbackMessage && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-neutral-900/95 border border-[var(--accent)]/40 text-neutral-200 text-xs font-medium shadow-2xl backdrop-blur-md animate-fade-in"
          >
            <span className="text-[var(--accent)] mr-1.5 font-bold">●</span>
            {feedbackMessage}
          </div>
        )}
      </header>

      {/* Global Search Overlay Modal */}
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />

      {/* Global Profile Switcher Dialog */}
      <ProfileSwitcher
        isOpen={isProfileSwitcherOpen}
        onClose={() => setIsProfileSwitcherOpen(false)}
        activeProfileId={profileId}
        onSelectProfile={switchProfile}
      />
    </>
  );
}


