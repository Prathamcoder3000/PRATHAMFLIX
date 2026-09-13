"use client";

import React, { useState, useMemo } from "react";
import { GitHubRepositoryCard } from "./GitHubRepositoryCard";
import type { GitHubRepository } from "@/lib/github/github-types";
import { Search, Filter, FolderGit2 } from "lucide-react";

interface GitHubRepositoryGridProps {
  repositories: GitHubRepository[];
  className?: string;
}

export const GitHubRepositoryGrid: React.FC<GitHubRepositoryGridProps> = ({
  repositories,
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [hideForks, setHideForks] = useState(false);

  // Extract unique languages present in repository set
  const languages = useMemo(() => {
    const langs = new Set<string>(["All"]);
    repositories.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return Array.from(langs);
  }, [repositories]);

  // Filtered repositories based on search, language, and forks
  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) => {
      // Fork filter
      if (hideForks && repo.isFork) return false;

      // Language filter
      if (selectedLanguage !== "All" && repo.language !== selectedLanguage) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = repo.name.toLowerCase().includes(query);
        const matchesDesc = repo.description?.toLowerCase().includes(query) || false;
        const matchesTopics = repo.topics.some((t) => t.toLowerCase().includes(query));
        const matchesLang = repo.language?.toLowerCase().includes(query) || false;

        return matchesName || matchesDesc || matchesTopics || matchesLang;
      }

      return true;
    });
  }, [repositories, selectedLanguage, searchQuery, hideForks]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Controls: Search input & Language Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter repositories by name, topic, or keyword..."
            aria-label="Filter repositories"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all font-mono"
          />
        </div>

        {/* Language Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-neutral-400 mr-1 flex items-center gap-1">
              <Filter className="h-3 w-3 text-[var(--accent)]" />
              <span>Language:</span>
            </span>

            {languages.map((lang) => {
              const isSelected = selectedLanguage === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLanguage(lang)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          {/* Hide Forks Checkbox */}
          <label className="flex items-center gap-2 text-xs font-mono text-neutral-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hideForks}
              onChange={(e) => setHideForks(e.target.checked)}
              className="rounded border-white/20 bg-neutral-900 text-[var(--accent)] focus:ring-[var(--accent)] h-3.5 w-3.5"
            />
            <span>Exclude Forks</span>
          </label>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredRepositories.map((repo) => (
          <GitHubRepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>

      {/* Empty Search Result */}
      {filteredRepositories.length === 0 && (
        <div className="py-16 text-center space-y-3 rounded-2xl border border-white/5 bg-neutral-950/40 p-8">
          <FolderGit2 className="h-8 w-8 text-neutral-500 mx-auto" />
          <div className="text-sm font-bold text-white">No repositories matched your filters</div>
          <div className="text-xs text-neutral-400 font-mono">
            Try adjusting your search query or switching language filters.
          </div>
        </div>
      )}
    </div>
  );
};
