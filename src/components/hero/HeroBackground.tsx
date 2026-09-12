"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HeroBackgroundProps {
  className?: string;
  hasReducedMotion?: boolean;
}

export function HeroBackground({
  className,
  hasReducedMotion = false,
}: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none select-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Deep Dark Base Layer */}
      <div className="absolute inset-0 bg-[#07080b]" />

      {/* Layer 1: Ambient Radial Crimson Glow (Top Right / Center) */}
      <motion.div
        initial={hasReducedMotion ? { opacity: 0.25 } : { opacity: 0, scale: 0.9 }}
        animate={
          hasReducedMotion
            ? { opacity: 0.25 }
            : {
                opacity: [0.15, 0.28, 0.22],
                scale: [0.95, 1.05, 1.0],
              }
        }
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-[15%] right-[5%] sm:right-[15%] w-[450px] sm:w-[650px] lg:w-[800px] h-[450px] sm:h-[650px] lg:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(229,9,38,0.22)_0%,rgba(128,4,20,0.1)_45%,transparent_70%)] blur-3xl"
      />

      {/* Layer 2: Secondary Slate Ambient Highlight (Left Side) */}
      <div className="absolute top-[20%] -left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(30,41,59,0.35)_0%,transparent_70%)] blur-3xl" />

      {/* Layer 3: Abstract Geometric Prism Beam / Mesh Lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Layer 4: Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,8,11,0.8)_100%)]" />

      {/* Layer 5: Bottom Gradient Fade into Page Content */}
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
    </div>
  );
}
