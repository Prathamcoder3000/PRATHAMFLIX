"use client";

import React from "react";
import { Sparkles, Bot } from "lucide-react";

interface AIAssistantButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const AIAssistantButton: React.FC<AIAssistantButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Ask PRATHAMFLIX AI"
      title="Ask PRATHAMFLIX AI"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-red-500/40 hover:border-red-500/80 rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.25)] hover:shadow-[0_4px_25px_rgba(229,9,20,0.45)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
    >
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
        <Sparkles className="w-3.5 h-3.5" />
      </div>
      <span className="text-xs font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors">
        Ask AI
      </span>
      <div className="flex items-center gap-1">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    </button>
  );
};
