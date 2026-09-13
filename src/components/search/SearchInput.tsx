"use client";

import React, { useRef, useEffect } from "react";
import { Search, X, CornerDownLeft } from "lucide-react";

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  resultCount?: number;
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  onKeyDown,
  resultCount,
  placeholder = "Search projects, technologies, architectures, skills...",
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative flex items-center w-full bg-[#12141e] border-b border-white/10 px-4 sm:px-6 py-4 gap-3 select-none ${className}`}
    >
      {/* Search Icon */}
      <Search className="h-5 w-5 text-neutral-400 shrink-0" aria-hidden="true" />

      {/* Text Input */}
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        aria-label="Search projects, technologies, architectures, and skills"
        autoComplete="off"
        spellCheck="false"
        className="w-full bg-transparent text-white placeholder:text-neutral-500 text-base font-normal focus:outline-none"
      />

      {/* Clear Button (when query is present) */}
      {value && (
        <button
          type="button"
          onClick={() => {
            onClear();
            inputRef.current?.focus();
          }}
          className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          aria-label="Clear search input"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Keyboard Helper / Result Count Badge */}
      <div className="hidden sm:flex items-center gap-2 shrink-0 font-mono text-[11px] text-neutral-500">
        {value && typeof resultCount === "number" && (
          <span className="text-neutral-400 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </span>
        )}
        <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-400">
          <span>ENTER</span>
          <CornerDownLeft className="h-3 w-3" />
        </span>
        <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">
          ESC
        </span>
      </div>
    </div>
  );
};
