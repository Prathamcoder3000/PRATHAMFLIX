"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export interface ContentRowControlsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  rowTitle?: string;
  className?: string;
  variant?: "header" | "overlay";
}

export const ContentRowControls: React.FC<ContentRowControlsProps> = ({
  canScrollLeft,
  canScrollRight,
  onScrollLeft,
  onScrollRight,
  rowTitle,
  className = "",
  variant = "header",
}) => {
  if (!canScrollLeft && !canScrollRight) {
    return null;
  }

  const leftLabel = rowTitle ? `Scroll ${rowTitle} left` : "Scroll left";
  const rightLabel = rowTitle ? `Scroll ${rowTitle} right` : "Scroll right";

  if (variant === "overlay") {
    return (
      <>
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-20 hidden md:flex items-center justify-start pl-2 pointer-events-none group-hover/row:opacity-100 opacity-0 transition-opacity duration-300">
            <IconButton
              aria-label={leftLabel}
              onClick={onScrollLeft}
              variant="outline"
              size="md"
              className="pointer-events-auto bg-black/75 hover:bg-black/90 text-white border-neutral-700/80 backdrop-blur-md shadow-xl hover:scale-105 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </IconButton>
          </div>
        )}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 z-20 hidden md:flex items-center justify-end pr-2 pointer-events-none group-hover/row:opacity-100 opacity-0 transition-opacity duration-300">
            <IconButton
              aria-label={rightLabel}
              onClick={onScrollRight}
              variant="outline"
              size="md"
              className="pointer-events-auto bg-black/75 hover:bg-black/90 text-white border-neutral-700/80 backdrop-blur-md shadow-xl hover:scale-105 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </IconButton>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={`hidden md:flex items-center gap-1.5 ${className}`}>
      <IconButton
        aria-label={leftLabel}
        onClick={onScrollLeft}
        disabled={!canScrollLeft}
        variant="ghost"
        size="sm"
        className={`transition-opacity ${
          canScrollLeft
            ? "opacity-80 hover:opacity-100 hover:bg-neutral-800 text-neutral-200"
            : "opacity-30 text-neutral-600 cursor-not-allowed"
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
      </IconButton>
      <IconButton
        aria-label={rightLabel}
        onClick={onScrollRight}
        disabled={!canScrollRight}
        variant="ghost"
        size="sm"
        className={`transition-opacity ${
          canScrollRight
            ? "opacity-80 hover:opacity-100 hover:bg-neutral-800 text-neutral-200"
            : "opacity-30 text-neutral-600 cursor-not-allowed"
        }`}
      >
        <ChevronRight className="h-4 w-4" />
      </IconButton>
    </div>
  );
};
