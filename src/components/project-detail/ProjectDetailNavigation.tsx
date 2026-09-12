import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailNavigationProps {
  prevProject?: ProjectDetailData;
  nextProject?: ProjectDetailData;
  className?: string;
}

export const ProjectDetailNavigation: React.FC<ProjectDetailNavigationProps> = ({
  prevProject,
  nextProject,
  className = "",
}) => {
  return (
    <div
      className={`py-12 sm:py-16 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6 ${className}`}
    >
      {/* Previous Project Link */}
      {prevProject ? (
        <Link
          href={prevProject.href || `/projects/${prevProject.id}`}
          className="group w-full sm:w-1/2 p-5 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-white/20 transition-all flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
              Previous Project
            </span>
            <h4 className="text-sm sm:text-base font-bold text-neutral-200 group-hover:text-white transition-colors truncate">
              {prevProject.title}
            </h4>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block sm:w-1/2" />
      )}

      {/* Next Project Link */}
      {nextProject ? (
        <Link
          href={nextProject.href || `/projects/${nextProject.id}`}
          className="group w-full sm:w-1/2 p-5 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-white/20 transition-all flex items-center justify-end text-right gap-4"
        >
          <div className="space-y-0.5 min-w-0">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
              Next Project
            </span>
            <h4 className="text-sm sm:text-base font-bold text-neutral-200 group-hover:text-white transition-colors truncate">
              {nextProject.title}
            </h4>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0">
            <ArrowRight className="h-5 w-5" />
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block sm:w-1/2" />
      )}
    </div>
  );
};
