"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Play, Sparkles, Wand2, ShieldCheck, CheckSquare, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MyListButton } from "@/components/my-list/MyListButton";
import type { ProjectDetailData, ProjectCardData } from "@/types";

export interface FeaturedSpotlightCardProps {
  project: ProjectDetailData;
  onSelect?: (project: ProjectCardData) => void;
  className?: string;
}

export function FeaturedSpotlightCard({
  project,
  onSelect,
  className = "",
}: FeaturedSpotlightCardProps) {
  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121420] via-[#0b0d14] to-[#06070a] border border-white/12 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {/* Ambient Crimson & Purple Glow Radiance */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(229,9,38,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Pattern Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left 7 Columns: Story, Badges, Typography & Direct Actions */}
        <div className="lg:col-span-7 space-y-5">
          {/* Eyebrow Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" size="md" className="font-bold tracking-wider uppercase text-[11px]">
              ★ Primary Featured Showcase
            </Badge>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="h-3 w-3" />
              Verified Production System
            </span>
            <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              2025 Release
            </span>
          </div>

          {/* Project Title */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none drop-shadow-md">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[var(--accent)] tracking-wide">
              {project.shortDescription}
            </p>
          </div>

          {/* Full Narrative Overview */}
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl">
            {project.overview}
          </p>

          {/* Categorized Tech Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.technologies?.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct CTA Action Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.href && (
              <Link href={project.href}>
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
                  className="font-bold shadow-lg shadow-[var(--accent)]/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Explore Case Study
                </Button>
              </Link>
            )}

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
                  className="border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
                >
                  Live Platform ↗
                </Button>
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  variant="ghost"
                  size="md"
                  leftIcon={<FolderGit2 className="h-4 w-4" />}
                  className="text-neutral-300 hover:text-white hover:bg-white/5"
                >
                  GitHub
                </Button>
              </a>
            )}

            {onSelect && (
              <Button
                variant="secondary"
                size="md"
                onClick={() => onSelect(project)}
                leftIcon={<Play className="h-3.5 w-3.5 fill-current" />}
                className="text-xs font-medium"
              >
                Quick Preview
              </Button>
            )}

            <MyListButton projectId={project.id} variant="outline" />
          </div>
        </div>

        {/* Right 5 Columns: Visual Interactive AI Studio Preview Mockup */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-[#0b0d14]/90 border border-white/12 p-5 sm:p-6 shadow-2xl space-y-4 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                <Wand2 className="h-4 w-4 text-[var(--accent)]" />
                <span>AI Prompt Studio</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Active Session
              </span>
            </div>

            {/* Simulated Prompt Workspace Block */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-neutral-900/90 border border-white/8 space-y-1">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Input Prompt Template</span>
                <p className="text-neutral-300 text-[11px] leading-relaxed line-clamp-2">
                  &quot;You are an expert system architect designing a fault-tolerant microservice telemetry engine...&quot;
                </p>
              </div>

              {/* Evaluation Metrics Bar */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                  <span className="text-[10px] text-neutral-400 block">Clarity</span>
                  <span className="text-xs font-bold text-emerald-400">98%</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                  <span className="text-[10px] text-neutral-400 block">Precision</span>
                  <span className="text-xs font-bold text-blue-400">95%</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                  <span className="text-[10px] text-neutral-400 block">Efficiency</span>
                  <span className="text-xs font-bold text-purple-400">92%</span>
                </div>
              </div>

              {/* Architecture Node Summary */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-red-950/30 to-purple-950/30 border border-red-500/20 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Layers className="h-3.5 w-3.5 text-red-400" />
                  <span>Full-Stack Pipeline:</span>
                </div>
                <span className="text-white font-bold">Next.js &bull; Express &bull; OpenAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
