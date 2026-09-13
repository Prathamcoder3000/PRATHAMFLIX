"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILES_LIST } from "@/data/profiles";
import { ProfileAvatar } from "./ProfileAvatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { X, Check } from "lucide-react";
import type { ProfileId } from "@/types/profile";

export interface ProfileSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
  activeProfileId: ProfileId;
  onSelectProfile: (id: ProfileId) => void;
  className?: string;
}

export const ProfileSwitcher: React.FC<ProfileSwitcherProps> = ({
  isOpen,
  onClose,
  activeProfileId,
  onSelectProfile,
  className = "",
}) => {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Switch Viewing Profile"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          key="profile-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Surface */}
        <motion.div
          key="profile-modal"
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`relative z-10 w-full max-w-lg rounded-3xl bg-[#0d0f18] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 select-none ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/8">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Switch Profile
              </h2>
              <p className="text-xs text-neutral-400">
                Choose a viewing mode to adjust presentation priorities.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile switcher"
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Profile Options List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROFILES_LIST.map((prof) => {
              const isActive = activeProfileId === prof.id;

              return (
                <button
                  key={prof.id}
                  type="button"
                  onClick={() => {
                    onSelectProfile(prof.id);
                    onClose();
                  }}
                  className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? "bg-white/10 border-[var(--accent)] ring-1 ring-[var(--accent)]/40 shadow-lg"
                      : "bg-white/[0.02] border-white/8 hover:bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="relative mb-3">
                    <ProfileAvatar variant={prof.id} size="lg" />
                    {isActive && (
                      <div className="absolute -top-1 -right-1 p-1 rounded-full bg-[var(--accent)] text-white">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">
                    {prof.name}
                  </h3>

                  <Badge
                    variant={prof.id === "pratham" ? "accent" : "subtle"}
                    size="sm"
                    className="font-mono text-[9px] uppercase tracking-wider mb-2"
                  >
                    {prof.badge}
                  </Badge>

                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-tight">
                    {prof.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Footer Close */}
          <div className="pt-2 flex justify-end">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              Done
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
