import React from "react";

export interface TerminalPromptProps {
  user?: string;
  host?: string;
  path?: string;
  className?: string;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  user = "pratham",
  host = "prathamflix",
  path = "~",
  className = "",
}) => {
  return (
    <span className={`font-mono text-xs select-none inline-flex items-center gap-0.5 ${className}`}>
      <span className="text-emerald-400 font-bold">{user}@{host}</span>
      <span className="text-neutral-500">:</span>
      <span className="text-blue-400 font-bold">{path}</span>
      <span className="text-neutral-400 mr-1.5 font-bold">$</span>
    </span>
  );
};
