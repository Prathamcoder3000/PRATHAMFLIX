"use client";

import React, { useRef, useEffect } from "react";
import { TerminalPrompt } from "./TerminalPrompt";

export interface TerminalInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  onNavigateHistory: (direction: "up" | "down") => void;
  onAutocomplete: () => void;
  user?: string;
  className?: string;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  value,
  onChange,
  onSubmit,
  onNavigateHistory,
  onAutocomplete,
  user = "pratham",
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onNavigateHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onNavigateHistory("down");
    } else if (e.key === "Tab") {
      e.preventDefault();
      onAutocomplete();
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`flex items-center gap-1 font-mono text-xs cursor-text pt-2 ${className}`}
    >
      <TerminalPrompt user={user} />
      <div className="relative flex-1 flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Terminal Command Input"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          className="w-full bg-transparent text-white font-mono text-xs focus:outline-none caret-[var(--accent)]"
        />
      </div>
    </div>
  );
};
