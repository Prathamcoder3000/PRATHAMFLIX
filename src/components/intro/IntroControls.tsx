"use client";

import React from "react";
import { Volume2, VolumeX, FastForward } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IntroControlsProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onSkip: () => void;
  className?: string;
}

export function IntroControls({
  isMuted,
  onToggleSound,
  onSkip,
  className,
}: IntroControlsProps) {
  return (
    <div
      className={cn(
        "absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3",
        className
      )}
    >
      {/* Sound Toggle Button */}
      <button
        type="button"
        onClick={onToggleSound}
        aria-label={isMuted ? "Unmute intro sound" : "Mute intro sound"}
        className={cn(
          "inline-flex items-center justify-center h-10 px-3 rounded-full bg-black/60 hover:bg-black/80",
          "border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white",
          "text-xs font-medium backdrop-blur-md transition-all duration-200 shadow-lg",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        )}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 mr-1.5 text-neutral-400" aria-hidden="true" />
        ) : (
          <Volume2 className="h-4 w-4 mr-1.5 text-[var(--accent)]" aria-hidden="true" />
        )}
        <span>{isMuted ? "Sound Off" : "Sound On"}</span>
      </button>

      {/* Skip Intro Button */}
      <button
        type="button"
        onClick={onSkip}
        aria-label="Skip cinematic intro"
        className={cn(
          "inline-flex items-center justify-center h-10 px-4 rounded-full bg-white/10 hover:bg-white/20",
          "border border-white/20 hover:border-white/40 text-white",
          "text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-200 shadow-lg",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        )}
      >
        <span>Skip Intro</span>
        <FastForward className="h-3.5 w-3.5 ml-1.5 opacity-80" aria-hidden="true" />
      </button>
    </div>
  );
}
