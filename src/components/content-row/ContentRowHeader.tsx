"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Heading2, Paragraph } from "@/components/ui/Typography";

export interface ContentRowHeaderProps {
  title: string;
  subtitle?: string;
  seeAllHref?: string;
  seeAllLabel?: string;
  onSeeAllClick?: () => void;
  actions?: React.ReactNode;
  className?: string;
}

export const ContentRowHeader: React.FC<ContentRowHeaderProps> = ({
  title,
  subtitle,
  seeAllHref,
  seeAllLabel = "See All",
  onSeeAllClick,
  actions,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 ${className}`}
    >
      <div className="space-y-1">
        <Heading2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-neutral-100">
          {title}
        </Heading2>
        {subtitle && (
          <Paragraph className="text-xs sm:text-sm text-neutral-400 font-normal">
            {subtitle}
          </Paragraph>
        )}
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
        {actions}

        {seeAllHref ? (
          <Link
            href={seeAllHref}
            onClick={onSeeAllClick}
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-400 hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          >
            <span>{seeAllLabel}</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : onSeeAllClick ? (
          <button
            type="button"
            onClick={onSeeAllClick}
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-400 hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          >
            <span>{seeAllLabel}</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
};
