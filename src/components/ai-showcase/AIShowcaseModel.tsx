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

      {/* Central Visual: Procedural Agentic Bio-Feedback & Utility Core */}
      <div className="relative z-10 my-6 py-2 flex flex-col items-center justify-center space-y-4">
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div
            className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_30s_linear_infinite]"
            style={{
              boxShadow: `0 0 40px -10px ${accent}40`,
            }}
          />

          {/* Middle Dashed Ring */}
          <div className="absolute inset-3 rounded-full border border-dashed border-white/15 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Inner Accent Ring */}
          <div className="absolute inset-8 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm" />

          {/* Center Neural Core Node */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-3">
            <div className="p-2.5 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30 mb-1">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
              Agentic Core
            </span>
            <span className="text-[11px] font-bold text-white max-w-[120px] truncate">
              {modelInfo?.framework || "FastAPI & Python"}
            </span>
          </div>

          {/* Procedural State Nodes */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 flex items-center gap-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>FOCUSED</span>
          </div>
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-neutral-900 border border-amber-500/40 text-[10px] font-mono text-amber-400">
            STRESSED
          </div>
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-neutral-900 border border-red-500/40 text-[10px] font-mono text-red-400">
            FATIGUED
          </div>
        </div>

        {/* Live Telemetry Sensor Stream Simulation */}
        <div className="w-full grid grid-cols-2 gap-2 text-center font-mono text-xs pt-1">
          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
            <span className="text-[10px] text-neutral-400 block">Heart Rate</span>
            <span className="font-bold text-emerald-400 text-xs">72 BPM (Stable)</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
            <span className="text-[10px] text-neutral-400 block">GSR Conductance</span>
            <span className="font-bold text-purple-300 text-xs">4.8 &mu;S (Nominal)</span>
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
