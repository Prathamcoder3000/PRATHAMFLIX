import React from "react";
import Link from "next/link";
import { Bookmark, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface MyListEmptyStateProps {
  className?: string;
}

export const MyListEmptyState: React.FC<MyListEmptyStateProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center py-16 sm:py-24 px-6 rounded-3xl bg-[#0c0e15]/80 border border-white/8 overflow-hidden shadow-2xl ${className}`}
    >
      {/* Ambient Crimson Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none bg-[var(--accent)]"
        aria-hidden="true"
      />

      {/* Decorative Technical Grid */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Central Icon Illustration */}
      <div className="relative z-10 mb-6 flex items-center justify-center">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg text-[var(--accent)] backdrop-blur-md">
          <Bookmark className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
        </div>
      </div>

      {/* Typography */}
      <div className="relative z-10 max-w-md space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Your list is empty
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          Save projects you&apos;re interested in using the My List button, and they&apos;ll appear here for quick access.
        </p>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 pt-8">
        <Link href="/projects">
          <Button
            variant="accent"
            size="md"
            leftIcon={<Compass className="h-4 w-4" />}
            className="font-medium text-xs sm:text-sm shadow-md shadow-[var(--accent)]/20"
          >
            Explore Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
