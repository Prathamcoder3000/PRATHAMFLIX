import React from "react";
import type { TerminalHistoryItem } from "@/types/developer";
import { TerminalPrompt } from "./TerminalPrompt";

export interface TerminalOutputProps {
  history: TerminalHistoryItem[];
  user?: string;
  className?: string;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  history,
  user = "pratham",
  className = "",
}) => {
  return (
    <div
      role="log"
      aria-live="polite"
      className={`space-y-4 font-mono text-xs ${className}`}
    >
      {history.map((item) => (
        <div key={item.id} className="space-y-1.5">
          {/* Command Line Prompt */}
          <div className="flex items-center gap-1">
            <TerminalPrompt user={user} />
            <span className="text-white font-semibold">{item.command}</span>
          </div>

          {/* Command Output Content */}
          {item.output && (
            <div className="pl-2 sm:pl-4 text-neutral-300 leading-relaxed border-l border-white/10">
              {item.output}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
