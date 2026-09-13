import React from "react";
import { GitBranch, Layers, Sparkles, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface CurrentlyBuildingProps {
  className?: string;
}

export const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-[#0b0d14] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Ambient Accent Glow */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none bg-[var(--accent)]"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Currently Building</span>
          </div>

          <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
            Active Engineering
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            PRATHAMFLIX Portfolio Engine
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Architecting an interactive developer portfolio platform combining streaming UI principles
            with low-latency client state synchronization and modular full-stack systems.
          </p>
        </div>

        {/* Tech Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-purple-400 font-semibold">
              <Cpu className="h-3.5 w-3.5" />
              <span>Inference Graph</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Low-latency tensor compilation and pipeline visualization.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-400 font-semibold">
              <Layers className="h-3.5 w-3.5" />
              <span>Client State Sync</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              External store hydration and deterministic profile switching.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-semibold">
              <GitBranch className="h-3.5 w-3.5" />
              <span>Architecture Hub</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Data-driven system design flows and deep case studies.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-500 relative z-10">
        <span>Build Target: Production Ready</span>
        <span>Runtime: Next.js App Router</span>
      </div>
    </div>
  );
};
