"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { HeroMeta } from "./HeroMeta";
import { HeroActions } from "./HeroActions";
import { Sparkles } from "lucide-react";
import { EASING } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface HeroContentProps {
  className?: string;
  hasReducedMotion?: boolean;
  onReplayIntro?: () => void;
}

export function HeroContent({
  className,
  hasReducedMotion = false,
  onReplayIntro,
}: HeroContentProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: hasReducedMotion ? 0 : 0.12,
        delayChildren: hasReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: hasReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASING.cinematic,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("max-w-3xl space-y-5 sm:space-y-6 text-left", className)}
    >
      {/* 1. Eyebrow Category Badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 shadow-[0_0_12px_rgba(229,9,38,0.2)]">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          <span>PRATHAMFLIX Original</span>
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Featured Developer
        </span>
      </motion.div>

      {/* 2. Featured Name / Main Title */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          PRATHAM
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--accent)] tracking-wide">
          Computer Engineering Student &bull; Full-Stack Developer &bull; Mobile Application Developer &bull; AI/ML Enthusiast
        </p>
      </motion.div>

      {/* 3. Supporting Overview Description */}
      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      >
        An interactive developer portfolio universe engineered with modern streaming UX patterns,
        showcasing robust full-stack applications, intelligent AI models, and connected IoT systems.
      </motion.p>

      {/* 4. Streaming-style Metadata Row */}
      <motion.div variants={itemVariants}>
        <HeroMeta />
      </motion.div>

      {/* 5. Primary and Secondary Actions */}
      <motion.div variants={itemVariants}>
        <HeroActions onReplayIntro={onReplayIntro} />
      </motion.div>
    </motion.div>
  );
}
