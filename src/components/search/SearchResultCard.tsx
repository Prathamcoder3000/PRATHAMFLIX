"use client";

import React from "react";
import type { SearchResult, ProjectDetailData } from "@/types";
import { ArrowRight, Sparkles, Smartphone, Server, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface SearchResultCardProps {
  result: SearchResult;
  isSelected?: boolean;
  onSelect: (project: ProjectDetailData) => void;
  className?: string;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  result,
  isSelected = false,
  onSelect,
  className = "",
}) => {
  const { project, matchReasons } = result;

  const getDomainIcon = () => {
    if (project.isAI || project.category === "AI / ML" || project.category === "AI Agent") {
      return <Sparkles className="h-3.5 w-3.5 text-purple-400 shrink-0" aria-hidden="true" />;
    }
    if (project.isMobile || project.category === "Mobile") {
      return <Smartphone className="h-3.5 w-3.5 text-pink-400 shrink-0" aria-hidden="true" />;
    }
    if (project.category === "Systems" || project.category === "Distributed Systems") {
      return <Server className="h-3.5 w-3.5 text-blue-400 shrink-0" aria-hidden="true" />;
    }
    return <Layers className="h-3.5 w-3.5 text-neutral-400 shrink-0" aria-hidden="true" />;
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      onClick={() => onSelect(project)}
      className={`p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-150 select-none border ${
        isSelected
          ? "bg-[#181b2a] border-[var(--accent)]/50 shadow-lg shadow-black/60 translate-x-1"
          : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-white/15"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 flex-1 min-w-0">
          {/* Header Line: Domain Icon, Title, Category Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            {getDomainIcon()}
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
              {project.title}
            </h4>

            {project.category && (
              <Badge
                variant={project.featured ? "accent" : "subtle"}
                size="sm"
                className="font-mono text-[10px] uppercase py-0"
              >
                {project.category}
              </Badge>
            )}

            {project.year && (
              <span className="text-[10px] font-mono text-neutral-500">
                {project.year}
              </span>
            )}
          </div>

          {/* Description */}
          {project.shortDescription && (
            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          )}

          {/* Technologies & Match Context */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {/* Top 3 Tech Tags */}
            {project.technologies?.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}

            {/* Matched Field Reason */}
            {matchReasons[0]?.matchedText && (
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded truncate max-w-[200px]">
                {matchReasons[0].label}: {matchReasons[0].matchedText}
              </span>
            )}
          </div>
        </div>

        {/* Action Arrow Affordance */}
        <div
          className={`shrink-0 p-1.5 rounded-lg transition-colors ${
            isSelected
              ? "text-[var(--accent)] bg-[var(--accent)]/10"
              : "text-neutral-600 group-hover:text-neutral-300"
          }`}
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
