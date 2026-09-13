"use client";

import React from "react";
import type { SearchResult, ProjectDetailData } from "@/types";
import { SearchResultCard } from "./SearchResultCard";

export interface SearchResultsProps {
  results: SearchResult[];
  selectedIndex: number;
  onSelect: (project: ProjectDetailData) => void;
  className?: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  selectedIndex,
  onSelect,
  className = "",
}) => {
  return (
    <div
      role="listbox"
      aria-label="Search results"
      className={`space-y-2 max-h-[60vh] overflow-y-auto px-4 sm:px-6 py-4 scrollbar-thin scrollbar-thumb-white/10 ${className}`}
    >
      {results.map((result, index) => (
        <SearchResultCard
          key={result.project.id}
          result={result}
          isSelected={index === selectedIndex}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
