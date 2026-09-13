import React from "react";
import type { AIModelInfo } from "@/types";
import { Cpu, Zap, Activity } from "lucide-react";

export interface AIShowcaseModelProps {
  modelInfo?: AIModelInfo;
  accent?: string;
  className?: string;
}

export const AIShowcaseModel: React.FC<AIShowcaseModelProps> = ({
  modelInfo,
  accent = "#8b5cf6",
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121422] to-[#0a0b12] p-6 sm:p-8 flex flex-col justify-between shadow-2xl ${className}`}
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      {/* Decorative Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/8">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Cpu className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 font-bold block">
              Core Intelligence
            </span>
            <span className="text-xs text-neutral-300 font-medium">
              {modelInfo?.type || "Neural Inference Engine"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-neutral-400">
          <Activity className="h-3 w-3 text-purple-400 animate-pulse" aria-hidden="true" />
          <span>Active</span>
        </div>
      </div>

      {/* Central Visual: Procedural Neural Graph Core */}
      <div className="relative z-10 my-8 py-4 flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div
            className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_30s_linear_infinite]"
            style={{
              boxShadow: `0 0 40px -10px ${accent}40`,
            }}
          />

          {/* Middle Dashed Ring */}
          <div className="absolute inset-4 rounded-full border border-dashed border-white/15 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Inner Accent Ring */}
          <div className="absolute inset-10 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm" />

          {/* Center Neural Core Node */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
            <div className="p-3 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30 mb-1.5">
              <Zap className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              Execution Node
            </span>
            <span className="text-xs font-bold text-white max-w-[120px] truncate">
              {modelInfo?.framework || "Hardware Acceleration"}
            </span>
          </div>

          {/* Procedural Orbiting Graph Nodes */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-neutral-900 border border-purple-500/40 text-purple-300">
            <div className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
          </div>
          <div className="absolute bottom-4 left-6 p-1.5 rounded-full bg-neutral-900 border border-white/20 text-neutral-400">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
          </div>
          <div className="absolute bottom-4 right-6 p-1.5 rounded-full bg-neutral-900 border border-white/20 text-neutral-400">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>

      {/* Model Spec Properties Footer */}
      {modelInfo && (
        <div className="relative z-10 pt-4 border-t border-white/8 grid grid-cols-2 gap-3 font-mono text-xs">
          {modelInfo.task && (
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                Primary Task
              </span>
              <span className="text-neutral-300 font-medium truncate block">
                {modelInfo.task}
              </span>
            </div>
          )}

          {modelInfo.architectureType && (
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                Graph Topology
              </span>
              <span className="text-neutral-300 font-medium truncate block">
                {modelInfo.architectureType}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
