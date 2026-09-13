import React from "react";
import { Terminal, X, Minus, Square } from "lucide-react";

export interface TerminalHeaderProps {
  title?: string;
  onClose?: () => void;
  className?: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  title = "prathamflix-cli — zsh — 80x24",
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2.5 bg-[#0e1017] border-b border-white/10 rounded-t-2xl select-none ${className}`}
    >
      {/* Left: Window Control Dots */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close terminal window"
          className="h-3 w-3 rounded-full bg-rose-500/80 hover:bg-rose-500 flex items-center justify-center text-black/60 transition-colors group"
        >
          <X className="h-2 w-2 opacity-0 group-hover:opacity-100" />
        </button>
        <span className="h-3 w-3 rounded-full bg-amber-500/80 flex items-center justify-center text-black/60">
          <Minus className="h-2 w-2 opacity-0 hover:opacity-100" />
        </span>
        <span className="h-3 w-3 rounded-full bg-emerald-500/80 flex items-center justify-center text-black/60">
          <Square className="h-2 w-2 opacity-0 hover:opacity-100" />
        </span>
      </div>

      {/* Center: Title & Icon */}
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
        <Terminal className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
        <span className="truncate max-w-[200px] sm:max-w-none">{title}</span>
      </div>

      {/* Right: Active Status Indicator */}
      <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-500">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="hidden sm:inline">Active</span>
      </div>
    </div>
  );
};
