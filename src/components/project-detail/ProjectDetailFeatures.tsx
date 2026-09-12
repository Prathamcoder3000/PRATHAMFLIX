import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import {
  Zap,
  Gauge,
  ShieldCheck,
  Eye,
  Layers,
  Compass,
  Sparkles,
  Cpu,
  RefreshCw,
  Bell,
  Shield,
  WifiOff,
  Binary,
  Boxes,
  Database,
  Smartphone,
  GitMerge,
  Sliders,
  Cloud,
  Network,
  TrendingUp,
  ShieldAlert,
  GitCommit,
  Users,
  History,
  Activity,
  Filter,
  Flame,
  Clock,
  CheckCircle,
  Fingerprint,
  Key,
  Box,
  Download,
  GitFork,
  CheckSquare,
  Brain,
  Volume2,
  Radio,
  PlayCircle,
  Share2,
  Terminal,
  Code2,
  Globe,
  LucideIcon,
} from "lucide-react";
import type { ProjectDetailData } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Gauge,
  ShieldCheck,
  Eye,
  Layers,
  Compass,
  Sparkles,
  Cpu,
  RefreshCw,
  Bell,
  Shield,
  WifiOff,
  Binary,
  Boxes,
  Database,
  Smartphone,
  GitMerge,
  Sliders,
  Cloud,
  Network,
  TrendingUp,
  ShieldAlert,
  GitCommit,
  Users,
  History,
  Activity,
  Filter,
  Flame,
  Clock,
  CheckCircle,
  Fingerprint,
  Key,
  Box,
  Download,
  GitFork,
  CheckSquare,
  Brain,
  Volume2,
  Radio,
  PlayCircle,
  Share2,
  Terminal,
  Code2,
  Globe,
};

export interface ProjectDetailFeaturesProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailFeatures: React.FC<ProjectDetailFeaturesProps> = ({
  project,
  className = "",
}) => {
  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <ProjectDetailSection
      id="features"
      eyebrow="Capabilities"
      title="Key Features & Highlights"
      subtitle="Distinct technical capabilities and functional highlights of this implementation."
      className={className}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {project.features.map((feature) => {
          const IconComponent = (feature.icon && iconMap[feature.icon]) || Sparkles;

          return (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-neutral-950/60 border border-white/8 flex flex-col justify-between space-y-3 group hover:border-white/15 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {feature.title}
                </h4>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </ProjectDetailSection>
  );
};
