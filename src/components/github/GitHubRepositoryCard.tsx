"use client";

import React from "react";
import Link from "next/link";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import type { GitHubRepository } from "@/lib/github/github-types";
import { getLanguageColor, formatRelativeTime } from "@/lib/github/github-utils";
import {
  Star,
  GitFork,
  ExternalLink,
  FolderGit2,
  Bookmark,
  Sparkles,
  Layers,
} from "lucide-react";

interface GitHubRepositoryCardProps {
  repository: GitHubRepository;
  className?: string;
}

export const GitHubRepositoryCard: React.FC<GitHubRepositoryCardProps> = ({
  repository,
  className = "",
}) => {
  const languageColor = getLanguageColor(repository.language);
  const relativeUpdated = formatRelativeTime(repository.updatedAt);

  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className={`group relative flex flex-col justify-between border border-white/10 hover:border-[var(--accent)]/40 transition-all duration-300 rounded-xl bg-neutral-950/60 backdrop-blur-md overflow-hidden ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--accent)]/10 transition-all duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        {/* Top bar: Language & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {repository.language ? (
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-300">
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ backgroundColor: languageColor }}
                aria-hidden="true"
              />
              <span>{repository.language}</span>
            </div>
          ) : (
            <div className="text-xs font-mono text-neutral-500">Repository</div>
          )}

          <div className="flex items-center gap-1.5">
            {repository.linkedProjectId && (
              <Badge variant="accent" size="sm" className="text-[10px]">
                Portfolio System
              </Badge>
            )}
            {repository.isFork && (
              <Badge variant="subtle" size="sm" className="text-[10px]">
                Fork
              </Badge>
            )}
          </div>
        </div>

        {/* Repo Title & Description */}
        <div className="space-y-1.5">
          <Heading3 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors break-words">
            {repository.name}
          </Heading3>
          <Paragraph className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
            {repository.description || "No description provided for this repository."}
          </Paragraph>
        </div>

        {/* Topics Chips */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {repository.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-400 border border-white/5"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Metrics & Actions */}
      <div className="pt-4 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1" title="Stars">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span>{repository.stars}</span>
          </div>

          <div className="flex items-center gap-1" title="Forks">
            <GitFork className="h-3.5 w-3.5 text-neutral-400" />
            <span>{repository.forks}</span>
          </div>

          <span className="text-[11px] text-neutral-500 hidden sm:inline">
            Updated {relativeUpdated}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {repository.linkedProjectId && (
            <Link
              href={`/projects/${repository.linkedProjectId}`}
              className="text-xs font-medium text-neutral-300 hover:text-white underline underline-offset-4 mr-1 hidden sm:inline-flex items-center gap-1"
            >
              <span>Case Study</span>
            </Link>
          )}

          <a
            href={repository.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-white border border-white/5 hover:border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`View ${repository.name} on GitHub`}
          >
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3 text-neutral-400" />
          </a>
        </div>
      </div>
    </Surface>
  );
};
