"use client";

import React from "react";
import { Plus, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { useMyList } from "@/hooks/useMyList";
import type { MyListButtonVariant } from "@/types";

export interface MyListButtonProps {
  projectId: string;
  variant?: MyListButtonVariant;
  className?: string;
  onToggle?: (isSaved: boolean) => void;
}

export const MyListButton: React.FC<MyListButtonProps> = ({
  projectId,
  variant = "default",
  className = "",
  onToggle,
}) => {
  const { isSaved, toggleMyList, isHydrated } = useMyList();
  const saved = isHydrated && isSaved(projectId);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMyList(projectId);
    onToggle?.(!saved);
  };

  const label = saved ? "In My List" : "Add to My List";
  const ariaLabel = saved ? `Remove from My List` : `Add to My List`;

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-pressed={saved}
        title={label}
        className={`inline-flex items-center justify-center p-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
          saved
            ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/30 scale-105"
            : "bg-black/60 backdrop-blur-md text-neutral-300 hover:text-white hover:bg-white/20 border border-white/10"
        } ${className}`}
      >
        {saved ? (
          <BookmarkCheck className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Bookmark className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-pressed={saved}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
          saved
            ? "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/40 hover:bg-[var(--accent)]/25"
            : "bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10"
        } ${className}`}
      >
        {saved ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        <span>{label}</span>
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-pressed={saved}
        className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
          saved
            ? "bg-[var(--accent)]/15 border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent)]/25 shadow-sm"
            : "bg-transparent border-white/20 text-neutral-200 hover:text-white hover:border-white/40 hover:bg-white/5"
        } ${className}`}
      >
        {saved ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Plus className="h-4 w-4" aria-hidden="true" />
        )}
        <span>{label}</span>
      </button>
    );
  }

  // Default Variant
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-pressed={saved}
      className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
        saved
          ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/25 hover:bg-[var(--accent-hover)] active:bg-[var(--accent-active)]"
          : "bg-white/10 text-white hover:bg-white/15 border border-white/10 active:bg-white/5"
      } ${className}`}
    >
      {saved ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Plus className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{label}</span>
    </button>
  );
};
