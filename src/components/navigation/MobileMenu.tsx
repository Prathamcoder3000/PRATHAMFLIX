"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, ChevronRight } from "lucide-react";
import { PrathamflixLogo } from "@/components/brand/PrathamflixLogo";
import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { getNavigationForProfile } from "@/lib/navigation";
import { useProfile } from "@/hooks/useProfile";
import { cn } from "@/lib/utils";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRecruiterClick?: () => void;
  onProfileClick?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onRecruiterClick,
  onProfileClick,
}: MobileMenuProps) {
  const pathname = usePathname();
  const { profileId, isRecruiterMode, profile } = useProfile();
  const navItems = getNavigationForProfile(profileId);

  // Handle Escape key to close menu
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <motion.div
            key="mobile-menu-drawer"
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-[#0a0b10] border-l border-white/10 shadow-2xl flex flex-col md:hidden"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between h-16 px-5 border-b border-white/8">
              <PrathamflixLogo size="sm" />
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex items-center justify-center h-10 w-10 rounded-full text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                )}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              <div className="flex items-center justify-between px-3 pb-2 select-none">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Navigation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                  {profile.name}
                </span>
              </div>

              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between w-full min-h-[48px] px-3.5 py-3 rounded-lg text-sm font-medium transition-all select-none",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                      isActive
                        ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold border border-[var(--accent)]/30"
                        : "text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <Icon
                          className={cn("h-4 w-4", isActive ? "text-[var(--accent)]" : "text-neutral-400")}
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>

            {/* Menu Footer / Secondary Entry Points */}
            <div className="p-4 border-t border-white/8 space-y-2.5 bg-black/20">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRecruiterClick?.();
                }}
                className={cn(
                  "flex items-center justify-between w-full min-h-[44px] px-3.5 py-2.5 rounded-lg text-xs font-semibold",
                  isRecruiterMode
                    ? "bg-blue-600/20 border border-blue-500/40 text-blue-300"
                    : "bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                )}
                aria-label="Recruiter Mode"
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className={cn("h-4 w-4", isRecruiterMode ? "text-blue-400" : "text-[var(--accent)]")} aria-hidden="true" />
                  <span>{isRecruiterMode ? "Recruiter Mode Active" : "Switch to Recruiter View"}</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)]">
                  {isRecruiterMode ? "Active" : "Toggle"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onProfileClick?.();
                }}
                className={cn(
                  "flex items-center justify-between w-full min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                )}
                aria-label={`Switch profile (current: ${profile.name})`}
              >
                <div className="flex items-center gap-3">
                  <ProfileAvatar variant={profileId} size="sm" />
                  <span>Viewing Profile: {profile.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 opacity-40" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

