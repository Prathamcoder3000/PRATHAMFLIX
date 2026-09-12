"use client";

import React, { forwardRef } from "react";

export interface ContentRowViewportProps {
  children: React.ReactNode;
  showLeftGradient?: boolean;
  showRightGradient?: boolean;
  onScroll?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const ContentRowViewport = forwardRef<
  HTMLDivElement,
  ContentRowViewportProps
>(({ children, showLeftGradient = false, showRightGradient = false, onScroll, ariaLabel, className = "" }, ref) => {
  return (
    <div className={`relative group/viewport ${className}`}>
      {/* Edge Gradient Left */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-12 sm:w-16 pointer-events-none z-10 bg-gradient-to-r from-[var(--background)] to-transparent transition-opacity duration-300 ${
          showLeftGradient ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Horizontally Scrollable Container */}
      <div
        ref={ref}
        onScroll={onScroll}
        aria-label={ariaLabel}
        tabIndex={0}
        className="flex items-center gap-4 sm:gap-5 md:gap-6 overflow-x-auto overflow-y-hidden scrollbar-none scroll-smooth px-4 sm:px-6 md:px-8 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-lg"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>

      {/* Edge Gradient Right */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-12 sm:w-16 pointer-events-none z-10 bg-gradient-to-l from-[var(--background)] to-transparent transition-opacity duration-300 ${
          showRightGradient ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
});

ContentRowViewport.displayName = "ContentRowViewport";
