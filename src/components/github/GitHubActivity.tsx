"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import type { GitHubActivityItem } from "@/lib/github/github-types";
import { formatRelativeTime } from "@/lib/github/github-utils";
import {
  GitCommit,
  GitPullRequest,
  Star,
  GitFork,
  Tag,
  Activity,
  ExternalLink,
} from "lucide-react";

interface GitHubActivityProps {
  activity: GitHubActivityItem[];
  className?: string;
}

const EVENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  PushEvent: GitCommit,
  CreateEvent: Tag,
  WatchEvent: Star,
  ForkEvent: GitFork,
  ReleaseEvent: Tag,
};

export const GitHubActivity: React.FC<GitHubActivityProps> = ({
  activity,
  className = "",
}) => {
  if (activity.length === 0) {
    return (
      <Surface
        elevation="subtle"
        padding="lg"
        className={`rounded-xl border border-white/5 bg-neutral-950/40 p-6 text-center space-y-2 ${className}`}
      >
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <Activity className="h-4 w-4 text-[var(--accent)]" />
          <span>Public telemetry activity is synchronized periodically with GitHub.</span>
        </div>
      </Surface>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <Badge variant="accent">Live Activity</Badge>
        </div>
        <Heading2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Recent Public Activity
        </Heading2>
        <Paragraph className="text-xs sm:text-sm text-neutral-400">
          Verified open-source commits, repository creations, and releases.
        </Paragraph>
      </div>

      <div className="space-y-3">
        {activity.slice(0, 8).map((item) => {
          const IconComponent = EVENT_ICONS[item.type] || Activity;
          const relativeTime = formatRelativeTime(item.createdAt);

          return (
            <Surface
              key={item.id}
              elevation="subtle"
              padding="sm"
              className="flex items-center justify-between gap-4 p-3.5 rounded-xl border border-white/5 bg-neutral-950/60 backdrop-blur-md hover:border-white/15 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <IconComponent className="h-4 w-4" />
                </div>

                <div className="min-w-0 space-y-0.5">
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">
                    {item.actionSummary}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 truncate">
                    {item.repoName}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-mono text-neutral-500">
                  {relativeTime}
                </span>

                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 w-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label={`View repository ${item.repoName}`}
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Surface>
          );
        })}
      </div>
    </div>
  );
};
