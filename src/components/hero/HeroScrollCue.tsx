"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HeroScrollCueProps {
  className?: string;
  hasReducedMotion?: boolean;
}

export function HeroScrollCue({
  className,
  hasReducedMotion = false,
}: HeroScrollCueProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 text-neutral-400 select-none",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[11px] font-medium tracking-widest uppercase opacity-70">
        Scroll to explore
      </span>
      <motion.div
        animate={
          hasReducedMotion
            ? {}
            : {
                y: [0, 4, 0],
                opacity: [0.6, 1, 0.6],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-4 w-4 text-neutral-400" />
      </motion.div>
    </div>
  );
}
