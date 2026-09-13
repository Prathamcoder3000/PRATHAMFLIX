"use client";

import React from "react";
import { CareerTimelineItem } from "./CareerTimelineItem";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { SectionReveal } from "@/components/transitions/SectionReveal";
import type { TimelineEntry } from "@/types/portfolio";
import { Milestone } from "lucide-react";

interface CareerTimelineProps {
  entries: TimelineEntry[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({
  entries,
  title = "Engineering Journey & Milestones",
  subtitle = "Key structural phases spanning academic foundations, systems architecture, and intelligent software engineering.",
  className = "",
}) => {
  return (
    <SectionReveal>
      <section id="timeline" aria-labelledby="timeline-heading" className={`space-y-8 ${className}`}>
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <Milestone className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
            <Badge variant="accent">Chronological Path</Badge>
          </div>
          <Heading2 id="timeline-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {title}
          </Heading2>
          {subtitle && (
            <Paragraph className="text-sm sm:text-base text-neutral-400">
              {subtitle}
            </Paragraph>
          )}
        </div>

        <div className="relative pt-2" role="list" aria-label="Career and Engineering Timeline">
          {entries.map((entry, index) => (
            <CareerTimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === entries.length - 1}
            />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
};
