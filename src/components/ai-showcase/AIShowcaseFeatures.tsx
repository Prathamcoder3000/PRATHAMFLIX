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

const FEATURE_ICON_MAP: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  binary: Binary,
  boxes: Boxes,
  database: Database,
  cpu: Cpu,
  zap: Zap,
  sparkles: Sparkles,
  gitfork: GitFork,
  "git-fork": GitFork,
  checksquare: CheckSquare,
  "check-square": CheckSquare,
  brain: Brain,
  layers: Layers,
  activity: Activity,
  box: Box,
};

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
        const Icon = (feat.icon ? FEATURE_ICON_MAP[feat.icon.toLowerCase()] : null) || CheckCircle2;

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
