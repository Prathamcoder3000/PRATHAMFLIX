"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILES_LIST } from "@/data/profiles";
import { ProfileCard } from "./ProfileCard";
import type { ProfileId } from "@/types/profile";

export interface ProfileSelectionProps {
  onSelect: (id: ProfileId) => void;
  selectedId?: ProfileId;
  hasReducedMotion?: boolean;
  className?: string;
}

export const ProfileSelection: React.FC<ProfileSelectionProps> = ({
  onSelect,
  selectedId,
  hasReducedMotion = false,
  className = "",
}) => {
  return (
    <div
      role="region"
      aria-label="Profile Selection: Who's watching?"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-[#06070a] text-white px-4 sm:px-8 py-12 select-none overflow-y-auto ${className}`}
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none bg-[var(--accent)]"
        aria-hidden="true"
      />

      {/* Decorative Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-8 sm:space-y-12 my-auto">
        {/* Header Typography */}
        <motion.div
          initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Who&apos;s watching?
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-md mx-auto">
            Choose a viewing profile to customize your portfolio experience.
          </p>
        </motion.div>

        {/* Profile Cards Grid */}
        <motion.div
          initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center justify-center w-full max-w-xl"
        >
          {PROFILES_LIST.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isSelected={selectedId === profile.id}
              onSelect={onSelect}
            />
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 text-xs font-mono text-neutral-500"
        >
          <span>You can switch profiles at any time from the top navigation bar.</span>
        </motion.div>
      </div>
    </div>
  );
};
