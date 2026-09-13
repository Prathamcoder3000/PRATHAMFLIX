import React from "react";
import Image from "next/image";
import { Wifi, Battery, Signal, Database, GitMerge, ShieldCheck, HardDrive, Sparkles, Folder, Check } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface MobileDeviceScreenProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileDeviceScreen: React.FC<MobileDeviceScreenProps> = ({
  project,
  className = "",
}) => {
  const accentColor = project.accent || "var(--accent)";

  if (project.image) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-neutral-950 ${className}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 280px, 320px"
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      aria-label="Mobile application interface preview"
      className={`relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0a0c13] text-white select-none ${className}`}
    >
      {/* 1. Static Decorative Status Bar */}
      <div
        className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-medium text-neutral-300 z-20"
        aria-hidden="true"
      >
        <span className="font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5 text-neutral-400">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3.5 w-3.5 text-neutral-200" />
        </div>
      </div>

      {/* 2. App Top Header Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/5 z-10">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white shadow-sm"
            style={{ backgroundColor: accentColor }}
          >
            {project.title.slice(0, 1)}
          </div>
          <div>
            <div className="text-xs font-bold leading-none text-white tracking-tight">
              {project.title}
            </div>
            <div className="text-[9px] font-mono text-neutral-400 leading-tight">
              {project.framework || "Mobile Client"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Synced</span>
        </div>
      </div>

      {/* 3. Screen Scrollable Body Content */}
      <div className="flex-1 px-4 py-3 space-y-3 overflow-hidden z-10">
        {/* Metric Summary Hero Widget */}
        <div
          className="p-3.5 rounded-xl border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#151926] to-[#0d0f18] shadow-md"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
              Local Storage State
            </span>
            <HardDrive className="h-3.5 w-3.5 text-[var(--accent)]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold font-mono tracking-tight text-white">
              100%
            </span>
            <span className="text-[10px] text-neutral-400">Offline Ready</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full rounded-full"
              style={{ width: "85%", backgroundColor: accentColor }}
            />
          </div>
        </div>

        {/* Feature / State Cards */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500">
            Active Mutation Channels
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-[var(--accent)]">
                <GitMerge className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-neutral-200">CRDT Vector Tree</div>
                <div className="text-[9px] text-neutral-500">Zero-conflict state</div>
              </div>
            </div>
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          </div>

          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-blue-400">
                <Database className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-neutral-200">SQLite Memory Ring</div>
                <div className="text-[9px] text-neutral-500">Sub-16ms latency</div>
              </div>
            </div>
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* 4. Bottom Tab Navigation Bar */}
      <div
        className="px-4 py-2 border-t border-white/8 bg-[#090b11] flex items-center justify-around text-neutral-500 z-20"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-0.5 text-[var(--accent)]">
          <Sparkles className="h-4 w-4" />
          <span className="text-[8px] font-mono font-bold">App</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 hover:text-neutral-300 transition-colors">
          <Folder className="h-4 w-4" />
          <span className="text-[8px] font-mono">Files</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 hover:text-neutral-300 transition-colors">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-[8px] font-mono">Vault</span>
        </div>
      </div>

      {/* Bottom Home Indicator Bar */}
      <div className="pb-1.5 pt-0.5 flex justify-center bg-[#090b11] z-20" aria-hidden="true">
        <div className="w-24 h-1 rounded-full bg-neutral-700" />
      </div>

      {/* Subtle Background Glow Accent */}
      <div
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
    </div>
  );
};
