"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Database,
  ArrowUpRight,
  ShieldCheck,
  Radio,
} from "lucide-react";
import Link from "next/link";
import { EASING } from "@/lib/motion";

export interface HeroVisualProps {
  hasReducedMotion?: boolean;
}

export function HeroVisual({ hasReducedMotion = false }: HeroVisualProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-2 sm:p-4 select-none">
      {/* 1. Deep Atmospheric Ambient Backlights */}
      <div
        className="absolute -top-12 -right-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(229,9,38,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-12 -left-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Main Perspective Container */}
      <div className="relative w-full space-y-4">
        {/* Top Floating Glass Panel: System Telemetry & Verified Intelligence */}
        <motion.div
          initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASING.cinematic, delay: 0.2 }}
          className="relative rounded-2xl bg-neutral-950/85 border border-white/12 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[var(--accent)]/40 transition-all duration-300"
        >
          {/* Ambient Corner Flare */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--accent)]/10 rounded-full blur-xl pointer-events-none" />

          {/* Panel Header */}
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Live Engineering Architecture
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              PRATHAMFLIX Core v1.0
            </span>
          </div>

          {/* Real System Pipeline Signal Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-mono">
                <Cpu className="h-3.5 w-3.5 text-purple-400" />
                <span>Agentic AI</span>
              </div>
              <div className="text-xs font-bold text-white truncate">Level-2 Agent</div>
              <div className="text-[10px] font-mono text-emerald-400">Model-Based</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-mono">
                <Layers className="h-3.5 w-3.5 text-red-400" />
                <span>Full-Stack</span>
              </div>
              <div className="text-xs font-bold text-white truncate">Next.js 16 + Express</div>
              <div className="text-[10px] font-mono text-neutral-400">React 19 Core</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-mono">
                <Radio className="h-3.5 w-3.5 text-blue-400" />
                <span>Telemetry</span>
              </div>
              <div className="text-xs font-bold text-white truncate">Bio-Feedback</div>
              <div className="text-[10px] font-mono text-blue-400">ESP32 / 5s Poll</div>
            </div>
          </div>
        </motion.div>

        {/* Middle Dual Glass Cards: Verified Real Project Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Card 1: PromptGenius Quick Card */}
          <motion.div
            initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.cinematic, delay: 0.3 }}
            className="rounded-xl bg-[#0f111a]/90 border border-white/10 p-3.5 shadow-xl backdrop-blur-md hover:border-red-500/40 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-2 group"
          >
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-[10px] uppercase font-bold text-red-400 tracking-wider flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Prompt Engineering
                </span>
                <span className="text-[10px] font-mono text-neutral-500">2025</span>
              </div>
              <h4 className="text-sm font-bold text-white pt-1 group-hover:text-red-400 transition-colors">
                PromptGenius
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2 pt-0.5">
                Full-stack AI prompt evaluation and management platform with OpenAI integration.
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
              <span className="font-mono text-neutral-500 text-[10px]">Next.js • Express • MongoDB</span>
              <Link
                href="/projects/prompt-genius"
                className="text-red-400 hover:text-white font-medium flex items-center gap-0.5 text-[11px]"
              >
                <span>Study</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Sensor-Based Smart Study Schedule Quick Card */}
          <motion.div
            initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.cinematic, delay: 0.35 }}
            className="rounded-xl bg-[#0f111a]/90 border border-white/10 p-3.5 shadow-xl backdrop-blur-md hover:border-purple-500/40 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-2 group"
          >
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-[10px] uppercase font-bold text-purple-400 tracking-wider flex items-center gap-1">
                  <Activity className="h-3 w-3" />
                  Agentic AI System
                </span>
                <span className="text-[10px] font-mono text-neutral-500">2025</span>
              </div>
              <h4 className="text-sm font-bold text-white pt-1 group-hover:text-purple-400 transition-colors">
                Smart Study Scheduler
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2 pt-0.5">
                Bio-feedback adaptive study optimization powered by BPM & GSR telemetry.
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
              <span className="font-mono text-neutral-500 text-[10px]">FastAPI • Python • ESP32</span>
              <Link
                href="/projects/sensor-study-schedule"
                className="text-purple-400 hover:text-white font-medium flex items-center gap-0.5 text-[11px]"
              >
                <span>Study</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Assurance Bar */}
        <motion.div
          initial={hasReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASING.cinematic, delay: 0.45 }}
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-neutral-950/70 border border-white/8 text-[11px] font-mono text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Verified Computer Engineering Work</span>
          </div>
          <span className="text-neutral-500 hidden sm:inline">Zero Fabricated Data</span>
        </motion.div>
      </div>
    </div>
  );
}
