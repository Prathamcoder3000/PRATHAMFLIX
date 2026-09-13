"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const AIAssistantTyping: React.FC = () => {
  return (
    <div className="flex items-start gap-3 py-2 px-4">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30 shrink-0 mt-0.5">
        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
        <div className="flex items-center gap-1.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-red-300 animate-bounce" style={{ animationDelay: "300ms" }} />
          <span className="text-xs text-zinc-400 ml-1.5 font-mono">Synthesizing...</span>
        </div>
      </div>
    </div>
  );
};
