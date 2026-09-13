"use client";

import React from "react";
import { ProjectDetailSection } from "./ProjectDetailSection";
import { ArrowRight, ArrowDown, Layers, Activity } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectDetailData } from "@/types";

export interface ProjectDetailArchitectureProps {
  project: ProjectDetailData;
  className?: string;
}

export const ProjectDetailArchitecture: React.FC<ProjectDetailArchitectureProps> = ({
  project,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

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
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-4 sm:p-6 rounded-2xl bg-neutral-950/80 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {project.architecture.map((node, index) => {
            const isLast = index === (project.architecture?.length ?? 0) - 1;

            return (
              <React.Fragment key={node.name}>
                {/* Individual Architecture Node Card */}
                <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#10121a] border border-white/10 shadow-md relative group hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] transition-all duration-300">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                        Stage {String(index + 1).padStart(2, "0")}
                      </span>
                      {node.role && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
                          {node.role}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
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

                {/* Flow Connector Arrow with Directional Pulse */}
                {!isLast && (
                  <div className="flex items-center justify-center shrink-0 py-1 lg:py-0 lg:px-2 text-neutral-600 relative">
                    <div className="relative flex items-center justify-center">
                      <ArrowRight className="hidden lg:block h-5 w-5 text-neutral-500 group-hover:text-red-400 transition-colors" aria-hidden="true" />
                      <ArrowDown className="block lg:hidden h-5 w-5 text-neutral-500 group-hover:text-red-400 transition-colors" aria-hidden="true" />

                      {!shouldReduceMotion && (
                        <motion.span
                          className="absolute w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(229,9,20,0.8)]"
                          animate={{
                            x: [-10, 10],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.8,
                            delay: index * 0.3,
                            ease: "easeInOut",
                          }}
                          style={{ display: "none" }} // Show on desktop lg
                        />
                      )}
                    </div>
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
