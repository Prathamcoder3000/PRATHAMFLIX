import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import { ArrowRight, ArrowDown, Layers } from "lucide-react";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailArchitectureProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailArchitecture: React.FC<ProjectDetailArchitectureProps> = ({
  project,
  className = "",
}) => {
  if (!project.architecture || project.architecture.length === 0) {
    return null;
  }

  return (
    <ProjectDetailSection
      id="architecture"
      eyebrow="System Design"
      title="Architecture & Data Pipeline"
      subtitle="High-level topological overview of data flow, service boundaries, and state distribution."
      className={className}
    >
      <div className="space-y-6">
        {/* Architecture Pipeline Flow Container */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-4 sm:p-6 rounded-2xl bg-neutral-950/70 border border-white/8 relative overflow-hidden">
          {project.architecture.map((node, index) => {
            const isLast = index === (project.architecture?.length ?? 0) - 1;

            return (
              <React.Fragment key={node.name}>
                {/* Individual Architecture Node Card */}
                <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#12141d] border border-white/8 shadow-md relative group hover:border-white/20 transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                        Stage {String(index + 1).padStart(2, "0")}
                      </span>
                      {node.role && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[var(--accent)] border border-[var(--accent)]/20">
                          {node.role}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight">
                      {node.name}
                    </h4>

                    {node.description && (
                      <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                        {node.description}
                      </p>
                    )}
                  </div>

                  {node.tech && (
                    <div className="pt-3 mt-3 border-t border-white/5 font-mono text-[11px] text-neutral-300 flex items-center gap-1.5">
                      <Layers className="h-3 w-3 text-neutral-500" aria-hidden="true" />
                      <span>{node.tech}</span>
                    </div>
                  )}
                </div>

                {/* Flow Connector Arrow (Horizontal on Desktop, Vertical on Mobile) */}
                {!isLast && (
                  <div className="flex items-center justify-center shrink-0 py-1 lg:py-0 lg:px-1 text-neutral-600">
                    <ArrowRight className="hidden lg:block h-5 w-5 text-neutral-500" aria-hidden="true" />
                    <ArrowDown className="block lg:hidden h-5 w-5 text-neutral-500" aria-hidden="true" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Accessible text representation for screen readers */}
        <div className="sr-only">
          <p>
            System architecture pipeline sequence:{" "}
            {project.architecture.map((n) => `${n.name} (${n.role || "Layer"} using ${n.tech || "Standard Tech"})`).join(" flows into ")}
          </p>
        </div>
      </div>
    </ProjectDetailSection>
  );
};
