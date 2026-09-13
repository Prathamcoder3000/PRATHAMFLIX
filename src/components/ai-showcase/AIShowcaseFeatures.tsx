import React from "react";
import type { ProjectFeature } from "@/types";
import {
  Binary,
  Boxes,
  Database,
  Cpu,
  Zap,
  Sparkles,
  GitFork,
  CheckSquare,
  Brain,
  Layers,
  Activity,
  Box,
  CheckCircle2,
} from "lucide-react";

export interface AIShowcaseFeaturesProps {
  features?: ProjectFeature[];
  className?: string;
}

function getFeatureIcon(iconName?: string) {
  switch (iconName?.toLowerCase()) {
    case "binary":
      return Binary;
    case "boxes":
      return Boxes;
    case "database":
      return Database;
    case "cpu":
      return Cpu;
    case "zap":
      return Zap;
    case "sparkles":
      return Sparkles;
    case "gitfork":
    case "git-fork":
      return GitFork;
    case "checksquare":
    case "check-square":
      return CheckSquare;
    case "brain":
      return Brain;
    case "layers":
      return Layers;
    case "activity":
      return Activity;
    case "box":
      return Box;
    default:
      return CheckCircle2;
  }
}

export const AIShowcaseFeatures: React.FC<AIShowcaseFeaturesProps> = ({
  features,
  className = "",
}) => {
  if (!features || features.length === 0) {
    return null;
  }

  // Display top 3 key AI features
  const displayFeatures = features.slice(0, 3);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 ${className}`}>
      {displayFeatures.map((feat, idx) => {
        const Icon = getFeatureIcon(feat.icon);

        return (
          <div
            key={feat.title || idx}
            className="p-3.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-purple-500/20 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400 w-fit">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <h4 className="text-xs font-semibold text-white tracking-tight">
                {feat.title}
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-3">
                {feat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
