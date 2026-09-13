"use client";

import React from "react";
import { Sparkles, Trash2, X, RefreshCw } from "lucide-react";

interface AIAssistantHeaderProps {
  onClose: () => void;
  onClear: () => void;
  profileMode?: "pratham" | "recruiter";
  isConfigured?: boolean;
}

export const AIAssistantHeader: React.FC<AIAssistantHeaderProps> = ({
  onClose,
  onClear,
  profileMode = "pratham",
  isConfigured = true,
}) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold tracking-wider text-white">PRATHAMFLIX AI</h2>
            <span
              className={`text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border ${
                profileMode === "recruiter"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  : "bg-red-500/10 text-red-400 border-red-500/30"
              }`}
            >
              {profileMode}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono">
            {isConfigured ? "Grounded Portfolio Guide" : "Deterministic Mode (AI Key Unset)"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={onClear}
          type="button"
          aria-label="Clear conversation"
          title="Clear conversation"
          className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close assistant"
          title="Close assistant (Esc)"
          className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
