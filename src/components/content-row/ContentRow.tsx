"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ContentRowHeader } from "./ContentRowHeader";
import { ContentRowViewport } from "./ContentRowViewport";
import { ContentRowControls } from "./ContentRowControls";

export interface ContentRowProps {
  title: string;
  subtitle?: string;
  seeAllHref?: string;
  seeAllLabel?: string;
  onSeeAllClick?: () => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
  controlsPosition?: "header" | "overlay";
}

export const ContentRow: React.FC<ContentRowProps> = ({
  title,
  subtitle,
  seeAllHref,
  seeAllLabel,
  onSeeAllClick,
  children,
  className = "",
  id,
  controlsPosition = "header",
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollState = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Buffer of 2px to handle sub-pixel rounding across browsers
    const hasLeftScroll = scrollLeft > 2;
    const hasRightScroll = scrollLeft < scrollWidth - clientWidth - 2;

    setCanScrollLeft(hasLeftScroll);
    setCanScrollRight(hasRightScroll);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    checkScrollState();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        checkScrollState();
      });
      resizeObserver.observe(el);
      Array.from(el.children).forEach((child) => resizeObserver?.observe(child));
    }

    const handleWindowResize = () => {
      checkScrollState();
    };
    window.addEventListener("resize", handleWindowResize, { passive: true });

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [checkScrollState, children]);

  const handleScrollLeft = () => {
    const el = viewportRef.current;
    if (!el) return;

    // Scroll by ~75% of viewport width
    const scrollAmount = el.clientWidth * 0.75;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.scrollBy({
      left: -scrollAmount,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleScrollRight = () => {
    const el = viewportRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.scrollBy({
      left: scrollAmount,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const headerActions = controlsPosition === "header" && (
    <ContentRowControls
      canScrollLeft={canScrollLeft}
      canScrollRight={canScrollRight}
      onScrollLeft={handleScrollLeft}
      onScrollRight={handleScrollRight}
      rowTitle={title}
      variant="header"
    />
  );

  return (
    <section
      id={id}
      aria-label={title}
      className={`relative my-6 sm:my-8 md:my-10 group/row ${className}`}
    >
      <ContentRowHeader
        title={title}
        subtitle={subtitle}
        seeAllHref={seeAllHref}
        seeAllLabel={seeAllLabel}
        onSeeAllClick={onSeeAllClick}
        actions={headerActions}
      />

      <ContentRowViewport
        ref={viewportRef}
        onScroll={checkScrollState}
        showLeftGradient={canScrollLeft}
        showRightGradient={canScrollRight}
        ariaLabel={`${title} content items`}
      >
        {children}
      </ContentRowViewport>

      {controlsPosition === "overlay" && (
        <ContentRowControls
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onScrollLeft={handleScrollLeft}
          onScrollRight={handleScrollRight}
          rowTitle={title}
          variant="overlay"
        />
      )}
    </section>
  );
};
