"use client";

import React from "react";
import { Surface } from "@/components/ui/Surface";
import { Badge } from "@/components/ui/Badge";

export interface ContentRowPlaceholderCardProps {
  id: string | number;
  title?: string;
  category?: string;
  className?: string;
}

export const ContentRowPlaceholderCard: React.FC<ContentRowPlaceholderCardProps> = ({
  id,
  title = "Placeholder Item",
  category = "Structural Demo",
  className = "",
}) => {
  return (
    <div
      className={`shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] aspect-[16/9] transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <Surface
        elevation="subtle"
        className="w-full h-full p-4 flex flex-col justify-between border border-neutral-800/80 hover:border-neutral-700 bg-neutral-900/60 rounded-xl relative overflow-hidden group select-none"
      >
        <div className="flex items-center justify-between z-10">
          <Badge variant="subtle" className="text-[10px] uppercase tracking-wider font-mono">
            {category}
          </Badge>
          <span className="text-xs font-mono text-neutral-500 font-bold">
            #{String(id).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-1.5 z-10">
          <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors truncate">
            {title} #{id}
          </h4>
          <p className="text-xs text-neutral-500 truncate">
            Temporary row item container
          </p>
        </div>

        {/* Subtle grid pattern background accent */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"
          aria-hidden="true"
        />
      </Surface>
    </div>
  );
};
