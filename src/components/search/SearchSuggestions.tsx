"use client";

import React, { useMemo } from "react";
import { getPopularSearchTags } from "@/lib/search";
import { Sparkles, Tag, TrendingUp } from "lucide-react";

export interface SearchSuggestionsProps {
  onSelectTag: (tag: string) => void;
  className?: string;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  onSelectTag,
  className = "",
}) => {
  const popularTags = useMemo(() => getPopularSearchTags(), []);

  return (
    <div className={`p-6 sm:p-8 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
        <TrendingUp className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
        <span>Popular Technologies & Domains</span>
      </div>

      {/* Suggested Tags Grid */}
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectTag(tag)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <Tag className="h-3 w-3 text-neutral-500" aria-hidden="true" />
            <span>{tag}</span>
          </button>
        ))}
      </div>

      {/* Quick Search Hints */}
      <div className="pt-4 border-t border-white/5 text-xs text-neutral-500 space-y-2">
        <div className="flex items-center gap-2 text-neutral-400 font-medium">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" aria-hidden="true" />
          <span>Search Tips:</span>
        </div>
        <p className="leading-relaxed text-[11px] text-neutral-500">
          Try typing a technology like <code className="text-neutral-400 bg-white/5 px-1 py-0.5 rounded">PyTorch</code>,
          a platform like <code className="text-neutral-400 bg-white/5 px-1 py-0.5 rounded">Mobile</code>,
          or a concept like <code className="text-neutral-400 bg-white/5 px-1 py-0.5 rounded">Inference</code>.
        </p>
      </div>
    </div>
  );
};
