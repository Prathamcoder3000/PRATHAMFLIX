"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import type { TimelineEntry, TimelineCategory } from "@/types/portfolio";
import {
  GraduationCap,
  FolderGit2,
  Trophy,
  Users,
  Calendar,
  Sparkles,
} from "lucide-react";

interface CareerTimelineItemProps {
  entry: TimelineEntry;
  isLast?: boolean;
}

const CATEGORY_ICONS: Record<TimelineCategory, React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
  engineering: FolderGit2,
  milestone: Trophy,
  leadership: Users,
};

const CATEGORY_LABELS: Record<TimelineCategory, string> = {
  education: "Academic Foundation",
  engineering: "System Architecture",
  milestone: "Key Milestone",
  leadership: "Engineering Initiative",
};

export const CareerTimelineItem: React.FC<CareerTimelineItemProps> = ({
  entry,
  isLast = false,
}) => {
  const IconComponent = CATEGORY_ICONS[entry.category] || FolderGit2;

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* Timeline track & Node dot */}
      <div className="flex flex-col items-center">
        {/* Node icon circle */}
        <div
          className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center border transition-all duration-300 z-10 ${
            entry.isCurrent
              ? "bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)] shadow-lg shadow-[var(--accent)]/20"
              : "bg-neutral-900 border-white/10 text-neutral-400 group-hover:border-[var(--accent)]/50 group-hover:text-white"
          }`}
        >
          <IconComponent className="h-5 w-5" />
        </div>

        {/* Vertical line connecting to next item */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8">
        <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 group-hover:bg-neutral-900/40">
          {/* Header row: Period & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)]">
              <Calendar className="h-3.5 w-3.5" />
              <span>{entry.period}</span>
            </div>

            <div className="flex items-center gap-2">
              {entry.isCurrent && (
                <Badge variant="accent" size="sm" className="text-[10px]">
                  Current Focus
                </Badge>
              )}
              <Badge variant="subtle" size="sm" className="text-[10px]">
                {CATEGORY_LABELS[entry.category]}
              </Badge>
            </div>
          </div>

          {/* Title & Organization */}
          <div className="space-y-1 pt-1">
            <Heading3 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
              {entry.title}
            </Heading3>
            <div className="text-xs sm:text-sm font-medium text-neutral-400">
              {entry.organization}
            </div>
          </div>

          {/* Description */}
          <Paragraph className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-3">
            {entry.description}
          </Paragraph>

          {/* Tech tags */}
          {entry.technologies && entry.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
