"use client";

import React from "react";
import { Terminal, Activity, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useProfile } from "@/hooks/useProfile";
import { useMyList } from "@/hooks/useMyList";

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

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-[#0b0d14] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Background Accent Glow */}
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none bg-blue-500"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Developer Status Panel</span>
          </div>

          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Engine
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            System Telemetry & Controls
          </h3>
          <p className="text-xs text-neutral-400">
            Interactive application state and CLI tooling interface.
          </p>
        </div>

        {/* Status Properties Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Active Profile</span>
            <span className="text-white font-bold flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent)]" />
              {profile.name}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Saved Projects</span>
            <span className="text-white font-bold flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              {savedIds.length} {savedIds.length === 1 ? "Item" : "Items"}
            </span>
          </div>
        </div>

        {/* Action Button: Open Terminal */}
        {onOpenTerminal && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="md"
              leftIcon={<Terminal className="h-4 w-4 text-[var(--accent)]" />}
              onClick={onOpenTerminal}
              className="w-full justify-center font-medium text-xs sm:text-sm border-white/15 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5"
            >
              Launch Developer Terminal
            </Button>
          </div>
        )}
      </div>

      {/* Footer Mode Tag */}
      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-500 relative z-10">
        <span>Mode: {profileId.toUpperCase()}</span>
        <span>CLI: v1.0.0 Ready</span>
      </div>
    </div>
  );
};
