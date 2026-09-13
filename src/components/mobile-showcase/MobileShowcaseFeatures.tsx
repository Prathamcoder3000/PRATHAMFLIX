import React from "react";
import {
  Database,
  GitMerge,
  Sliders,
  Fingerprint,
  Smartphone,
  Zap,
  ShieldCheck,
  CheckCircle,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import type { ProjectDetailData } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Database,
  GitMerge,
  Sliders,
  Fingerprint,
  Smartphone,
  Zap,
  ShieldCheck,
  CheckCircle,
  Sparkles,
};

export interface MobileShowcaseFeaturesProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileShowcaseFeatures: React.FC<MobileShowcaseFeaturesProps> = ({
  project,
  className = "",
}) => {
  const features = project.appFeatures || project.features?.slice(0, 4) || [];

  if (features.length === 0) {
    return null;
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 ${className}`}>
      {features.map((feat) => {
        const IconComponent = (feat.icon && iconMap[feat.icon]) || Sparkles;

        return (
          <div
            key={feat.title}
            className="p-4 rounded-xl bg-neutral-950/70 border border-white/8 space-y-1.5 hover:border-white/15 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <IconComponent className="h-3.5 w-3.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-neutral-100 tracking-tight">
                {feat.title}
              </h4>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              {feat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
