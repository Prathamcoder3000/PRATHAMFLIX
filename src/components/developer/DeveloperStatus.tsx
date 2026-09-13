"use client";

import React from "react";
import { Terminal, Activity, ShieldCheck, Zap, Film, Command } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useProfile } from "@/hooks/useProfile";
import { useMyList } from "@/hooks/useMyList";
import { useCinemaMode } from "@/hooks/useCinemaMode";
import { triggerOpenShortcuts } from "@/hooks/useKeyboardShortcuts";

export interface DeveloperStatusProps {
  onOpenTerminal?: () => void;
  className?: string;
}

export const DeveloperStatus: React.FC<DeveloperStatusProps> = ({
  onOpenTerminal,
  className = "",
}) => {
  const { profileId, profile } = useProfile();
  const { savedIds } = useMyList();
  const { isCinemaMode, toggleCinemaMode } = useCinemaMode();

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-[#0b0d14] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Background Accent Glow */}
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none bg-red-600"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-semibold uppercase tracking-wider">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Developer Status Panel</span>
          </div>

          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM ONLINE
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            System Telemetry & Controls
          </h3>
          <p className="text-xs text-neutral-400">
            Real interactive portfolio engine state and developer utilities.
          </p>
        </div>

        {/* Status Properties Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Active Profile</span>
            <span className="text-white font-bold flex items-center gap-1.5 truncate">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
              {profile.name}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Saved in My List</span>
            <span className="text-white font-bold flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              {savedIds.length} {savedIds.length === 1 ? "Item" : "Items"}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          {onOpenTerminal && (
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Terminal className="h-3.5 w-3.5 text-[var(--accent)]" />}
              onClick={onOpenTerminal}
              className="w-full sm:flex-1 justify-center font-medium text-xs border-white/15 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"
            >
              Terminal
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            leftIcon={<Film className="h-3.5 w-3.5 text-red-400" />}
            onClick={toggleCinemaMode}
            className="w-full sm:flex-1 justify-center font-medium text-xs border-white/15 hover:border-red-500/40 hover:bg-red-500/10"
          >
            {isCinemaMode ? "Exit Cinema" : "Cinema Mode"}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            leftIcon={<Command className="h-3.5 w-3.5 text-neutral-400" />}
            onClick={() => triggerOpenShortcuts()}
            className="w-full sm:w-auto justify-center font-medium text-xs text-neutral-400 hover:text-white"
          >
            Keys (?)
          </Button>
        </div>
      </div>

      {/* Footer Mode Tag */}
      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-500 relative z-10">
        <span>Mode: {profileId.toUpperCase()}</span>
        <span>Engine: Ready</span>
      </div>
    </div>
  );
};
