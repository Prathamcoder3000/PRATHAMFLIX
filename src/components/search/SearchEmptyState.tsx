"use client";

import React from "react";
import { SearchX, Tag } from "lucide-react";
import { getPopularSearchTags } from "@/lib/search";

export interface SearchEmptyStateProps {
  query: string;
  onSelectTag?: (tag: string) => void;
  className?: string;
}

export const SearchEmptyState: React.FC<SearchEmptyStateProps> = ({
  query,
  onSelectTag,
  className = "",
}) => {
  const popularTags = getPopularSearchTags().slice(0, 6);

  return (
    <div
      className={`py-12 sm:py-16 px-6 text-center space-y-6 flex flex-col items-center justify-center ${className}`}
    >
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400">
        <SearchX className="h-8 w-8" aria-hidden="true" />
      </div>

      <div className="space-y-2 max-w-sm">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
          No projects found for &ldquo;{query}&rdquo;
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Try searching for a different technology, framework, architecture pattern, or keyword.
        </p>
      </div>

      {onSelectTag && popularTags.length > 0 && (
        <div className="space-y-2.5 pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
            Suggested searches:
          </span>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
            {popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag(tag)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
              >
                <Tag className="h-3 w-3 text-neutral-500" aria-hidden="true" />
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
