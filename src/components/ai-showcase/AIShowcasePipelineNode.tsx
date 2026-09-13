import React from "react";
import type { AIPipelineNode } from "@/types";
import {
  Database,
  Cpu,
  Binary,
  Boxes,
  Zap,
  Layers,
  Sparkles,
  Box,
  FileText,
  GitFork,
  Terminal,
  CheckSquare,
  CheckCircle,
  Brain,
  Activity,
  Workflow,
} from "lucide-react";

export interface AIShowcasePipelineNodeProps {
  node: AIPipelineNode;
  index: number;
  totalSteps?: number;
  className?: string;
}

/**
 * Resolves icon name to Lucide React component with fallback
 */
function getStageIcon(iconName?: string) {
  switch (iconName?.toLowerCase()) {
    case "database":
      return Database;
    case "cpu":
      return Cpu;
    case "binary":
      return Binary;
    case "boxes":
      return Boxes;
    case "zap":
      return Zap;
    case "layers":
      return Layers;
    case "sparkles":
      return Sparkles;
    case "box":
      return Box;
    case "filetext":
    case "file-text":
      return FileText;
    case "gitfork":
    case "git-fork":
      return GitFork;
    case "terminal":
      return Terminal;
    case "checksquare":
    case "check-square":
      return CheckSquare;
    case "checkcircle":
    case "check-circle":
      return CheckCircle;
    case "brain":
      return Brain;
    case "activity":
      return Activity;
    default:
      return Workflow;
  }
}

/**
 * Get distinct type styling colors
 */
function getTypeBadgeStyle(type: AIPipelineNode["type"]) {
  switch (type) {
    case "data":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "process":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "model":
      return "bg-purple-500/15 text-purple-300 border-purple-500/30";
    case "decision":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "output":
      return "bg-rose-500/10 text-rose-400 border-rose-500/20";
    default:
      return "bg-white/5 text-neutral-400 border-white/10";
  }
}

export const AIShowcasePipelineNode: React.FC<AIShowcasePipelineNodeProps> = ({
  node,
  index,
  className = "",
}) => {
  const IconComponent = getStageIcon(node.icon);
  const typeBadgeStyle = getTypeBadgeStyle(node.type);

  return (
    <div
      className={`flex-1 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#10121a]/90 border border-white/8 shadow-lg hover:border-white/20 transition-all duration-300 group relative ${className}`}
    >
      {/* Top Header: Step & Type Badge */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-bold text-neutral-500 tracking-wider uppercase">
            Step {String(node.step || index + 1).padStart(2, "0")}
          </span>

          <span
            className={`font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${typeBadgeStyle}`}
          >
            {node.type}
          </span>
        </div>

        {/* Title and Icon */}
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 group-hover:text-white group-hover:border-purple-500/30 transition-colors shrink-0">
            <IconComponent className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
              {node.title}
            </h4>
          </div>
        </div>

        {/* Description */}
        {node.description && (
          <p className="text-xs text-neutral-400 leading-relaxed font-normal">
            {node.description}
          </p>
        )}
      </div>

      {/* Footer: Tech Badge */}
      {node.tech && (
        <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400/80 shrink-0" />
          <span className="truncate">{node.tech}</span>
        </div>
      )}
    </div>
  );
};
