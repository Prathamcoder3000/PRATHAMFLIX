import React from "react";

export interface ProjectCardSkeletonProps {
  className?: string;
}

export const ProjectCardSkeleton: React.FC<ProjectCardSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] flex flex-col rounded-xl overflow-hidden border border-white/5 bg-[#0e1017] animate-pulse ${className}`}
    >
      {/* Media Skeleton */}
      <div className="w-full aspect-[16/9] bg-neutral-800/60 relative">
        <div className="absolute top-2.5 left-2.5 w-16 h-5 rounded-full bg-neutral-700/60" />
        <div className="absolute top-2.5 right-2.5 w-10 h-4 rounded bg-neutral-700/60" />
      </div>

      {/* Content Skeleton */}
      <div className="p-3.5 sm:p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Title bar */}
          <div className="h-4 w-3/4 bg-neutral-700/60 rounded" />
          {/* Description lines */}
          <div className="h-3 w-full bg-neutral-800/80 rounded" />
          <div className="h-3 w-2/3 bg-neutral-800/80 rounded" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex items-center gap-1.5 pt-2 border-t border-white/5">
          <div className="h-4 w-12 bg-neutral-800/80 rounded" />
          <div className="h-4 w-14 bg-neutral-800/80 rounded" />
          <div className="h-4 w-10 bg-neutral-800/80 rounded" />
        </div>
      </div>
    </div>
  );
};
