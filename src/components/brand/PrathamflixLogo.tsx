import React from "react";
import { cn } from "@/lib/utils";

export interface PrathamflixLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  showWordmark?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    iconSize: 22,
    textSize: "text-sm tracking-wider",
    gap: "gap-2",
  },
  md: {
    iconSize: 28,
    textSize: "text-lg tracking-wider",
    gap: "gap-2.5",
  },
  lg: {
    iconSize: 38,
    textSize: "text-2xl tracking-widest",
    gap: "gap-3",
  },
  xl: {
    iconSize: 52,
    textSize: "text-3xl sm:text-4xl tracking-widest",
    gap: "gap-4",
  },
  hero: {
    iconSize: 72,
    textSize: "text-4xl sm:text-6xl md:text-7xl tracking-[0.2em]",
    gap: "gap-4 sm:gap-6",
  },
};

export function PrathamflixLogo({
  size = "md",
  showWordmark = true,
  className,
}: PrathamflixLogoProps) {
  const current = sizeConfig[size];

  return (
    <div
      className={cn(
        "inline-flex items-center select-none font-sans font-black",
        current.gap,
        className
      )}
      aria-label="PRATHAMFLIX"
    >
      {/* Original Geometric Prism "P" Monogram Icon */}
      <svg
        width={current.iconSize}
        height={current.iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_0_16px_rgba(229,9,38,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pfx-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff334b" />
            <stop offset="60%" stopColor="#e50926" />
            <stop offset="100%" stopColor="#990619" />
          </linearGradient>
          <linearGradient id="pfx-dark-facet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#800414" />
            <stop offset="100%" stopColor="#3d0109" />
          </linearGradient>
          <linearGradient id="pfx-light-facet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b7e" />
            <stop offset="100%" stopColor="#e50926" />
          </linearGradient>
        </defs>

        {/* Vertical Backbone Prism */}
        <polygon
          points="18,12 36,6 36,94 18,88"
          fill="url(#pfx-accent-grad)"
        />

        {/* Top Forward Bevel */}
        <polygon
          points="36,6 74,16 66,34 36,24"
          fill="url(#pfx-light-facet)"
        />

        {/* Outer Loop Face */}
        <polygon
          points="74,16 84,36 84,48 70,62 36,52 36,36 66,42 70,36 62,28 36,24"
          fill="url(#pfx-accent-grad)"
        />

        {/* Inner Shadow Facet */}
        <polygon
          points="36,36 66,42 60,48 36,44"
          fill="url(#pfx-dark-facet)"
        />

        {/* Cinematic Flare Dot */}
        <circle cx="84" cy="36" r="3" fill="#ffffff" opacity="0.9" />
      </svg>

      {/* Wordmark Typography */}
      {showWordmark && (
        <span className={cn("inline-flex items-center uppercase font-black leading-none", current.textSize)}>
          <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            PRATHAM
          </span>
          <span className="text-[var(--accent)] bg-gradient-to-r from-[#ff334b] via-[#e50926] to-[#b3071d] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(229,9,38,0.5)]">
            FLIX
          </span>
        </span>
      )}
    </div>
  );
}
