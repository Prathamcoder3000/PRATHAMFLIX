"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { searchProjects } from "@/lib/search";
import type { SearchResult, SearchState } from "@/types";

export function useSearch(): SearchState {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Compute search results deterministically
  const results = useMemo((): SearchResult[] => {
    return searchProjects(query);
  }, [query]);

  const handleSetQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
    setSelectedIndex(0);
  }, []);

  const openSearch = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);

    // Restore focus to triggering element
    if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === "function") {
      setTimeout(() => {
        lastActiveElementRef.current?.focus();
      }, 50);
    }
  }, []);

  const toggleSearch = useCallback(() => {
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  }, [isOpen, openSearch, closeSearch]);

  const selectNext = useCallback(() => {
    if (results.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % results.length);
  }, [results.length]);

  const selectPrev = useCallback(() => {
    if (results.length === 0) return;
    setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
  }, [results.length]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // 1. Ctrl+K or Cmd+K: Open Search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          closeSearch();
        } else {
          openSearch();
        }
        return;
      }

      // 2. '/' shortcut: Open Search if not inside an editable field
      if (e.key === "/" && !isOpen) {
        const target = e.target as HTMLElement | null;
        const isEditing =
          target?.tagName === "INPUT" ||
          target?.tagName === "TEXTAREA" ||
          target?.isContentEditable;

        if (!isEditing) {
          e.preventDefault();
          openSearch();
        }
        return;
      }

      // 3. Shortcuts active while search overlay is open
      if (isOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeSearch();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          selectNext();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          selectPrev();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isOpen, openSearch, closeSearch, selectNext, selectPrev]);

  return {
    query,
    setQuery: handleSetQuery,
    results,
    isOpen,
    openSearch,
    closeSearch,
    toggleSearch,
    selectedIndex,
    setSelectedIndex,
    selectNext,
    selectPrev,
    selectedResult: results[selectedIndex],
  };
}
