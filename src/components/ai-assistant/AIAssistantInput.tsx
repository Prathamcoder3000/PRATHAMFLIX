"use client";

import React, { useRef, useEffect } from "react";
import { Send, CornerDownLeft } from "lucide-react";

interface AIAssistantInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export const AIAssistantInput: React.FC<AIAssistantInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    if (!disabled && !isLoading) {
      inputRef.current?.focus();
    }
  }, [disabled, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading && !disabled) {
        onSubmit();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isLoading && !disabled) {
      onSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-zinc-950/90 border-t border-zinc-800 shrink-0"
    >
      <div className="relative flex items-center bg-zinc-900 border border-zinc-700/70 focus-within:border-red-500 rounded-xl px-3 py-1.5 transition-colors shadow-inner">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isLoading ? "Generating grounded response..." : "Ask about projects, AI, skills, resume..."}
          disabled={disabled || isLoading}
          maxLength={1000}
          className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none py-1.5 pr-10 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!value.trim() || isLoading || disabled}
          aria-label="Send query"
          className="absolute right-2 p-1.5 rounded-lg bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 text-white disabled:text-zinc-500 transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center justify-between mt-1.5 px-1">
        <p className="text-[10px] text-zinc-500 font-mono">
          Enter to send • Grounded in PRATHAMFLIX data
        </p>
        {value.length > 800 && (
          <p className="text-[10px] text-amber-400 font-mono">
            {value.length}/1000
          </p>
        )}
      </div>
    </form>
  );
};
