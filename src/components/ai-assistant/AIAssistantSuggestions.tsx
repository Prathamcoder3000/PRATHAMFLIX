"use client";

import React from "react";

interface AIAssistantSuggestionsProps {
  onSelectSuggestion: (query: string) => void;
  disabled?: boolean;
}

const SUGGESTIONS = [
  "What does Pratham build?",
  "Show me the strongest projects",
  "What mobile apps has Pratham built?",
  "Tell me about the AI/ML work",
  "What technologies are in his stack?",
  "What certifications does he hold?",
  "How can I contact Pratham?",
];

export const AIAssistantSuggestions: React.FC<AIAssistantSuggestionsProps> = ({
  onSelectSuggestion,
  disabled = false,
}) => {
  return (
    <div className="p-3 border-b border-zinc-800/80 bg-zinc-950/40">
      <p className="text-[11px] font-medium text-zinc-400 mb-2 uppercase tracking-wider">
        Quick Questions:
      </p>
      <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar">
        {SUGGESTIONS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled}
            onClick={() => onSelectSuggestion(item)}
            className="text-xs text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-red-500/50 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
