"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/hooks/useSearch";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { SearchSuggestions } from "./SearchSuggestions";
import { SearchEmptyState } from "./SearchEmptyState";
import type { ProjectDetailData } from "@/types";

export interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  className = "",
}) => {
  const router = useRouter();
  const {
    query,
    setQuery,
    results,
    selectedIndex,
    setSelectedIndex,
    selectNext,
    selectPrev,
    selectedResult,
  } = useSearch();

  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelectProject = useCallback(
    (project: ProjectDetailData) => {
      onClose();
      const href = project.href || `/projects/${project.id}`;
      router.push(href);
    },
    [router, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectPrev();
      } else if (e.key === "Enter" && selectedResult) {
        e.preventDefault();
        handleSelectProject(selectedResult.project);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [selectNext, selectPrev, selectedResult, handleSelectProject, onClose]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Global Portfolio Search"
        className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-12 lg:pt-20 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          key="search-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Search Modal Surface */}
        <motion.div
          key="search-modal"
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`relative z-10 w-full max-w-2xl sm:max-w-3xl rounded-2xl sm:rounded-3xl bg-[#0a0b12] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden flex flex-col ${className}`}
        >
          {/* Top Search Input Bar */}
          <SearchInput
            value={query}
            onChange={setQuery}
            onClear={() => setQuery("")}
            onKeyDown={handleKeyDown}
            resultCount={results.length}
          />

          {/* Results / Suggestions / Empty State Content Area */}
          <div className="flex-1 min-h-[220px]">
            {query.trim().length === 0 ? (
              // Empty Query: Show Discovery Suggestions
              <SearchSuggestions onSelectTag={(tag) => setQuery(tag)} />
            ) : results.length > 0 ? (
              // Has Results
              <SearchResults
                results={results}
                selectedIndex={selectedIndex}
                onSelect={handleSelectProject}
              />
            ) : (
              // No Match Empty State
              <SearchEmptyState
                query={query}
                onSelectTag={(tag) => setQuery(tag)}
              />
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-white/8 bg-black/40 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>
                {query.trim()
                  ? `${results.length} ${results.length === 1 ? "match" : "matches"} found`
                  : "Type to search projects and technologies"}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>•</span>
              <span>ESC to dismiss</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
