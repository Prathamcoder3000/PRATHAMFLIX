"use client";

import React from "react";

export const GitHubLoading: React.FC = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Profile Skeleton */}
      <div className="h-44 rounded-2xl bg-neutral-900/60 border border-white/5" />

      {/* Filter Skeleton */}
      <div className="flex gap-2">
        <div className="h-8 w-16 rounded-lg bg-neutral-900/60" />
        <div className="h-8 w-24 rounded-lg bg-neutral-900/60" />
        <div className="h-8 w-20 rounded-lg bg-neutral-900/60" />
      </div>

      {/* Grid Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-48 rounded-xl bg-neutral-900/40 border border-white/5 p-5 space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-neutral-800 rounded" />
              <div className="h-4 w-12 bg-neutral-800 rounded" />
            </div>
            <div className="h-5 w-3/4 bg-neutral-800 rounded" />
            <div className="h-3 w-full bg-neutral-800/60 rounded" />
            <div className="h-3 w-2/3 bg-neutral-800/60 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};
