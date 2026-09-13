"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MobileShowcaseContent } from "./MobileShowcaseContent";
import { MobileDevice } from "./MobileDevice";
import type { ProjectDetailData } from "@/types";

export interface MobileShowcaseProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileShowcase: React.FC<MobileShowcaseProps> = ({
  project,
  className = "",
}) => {
  return (
    <section
      aria-label="Featured Mobile Application Showcase"
      className={`py-8 sm:py-12 relative overflow-hidden ${className}`}
    >
      <Container maxWidth="2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-10 md:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#0f121a] via-[#0b0d13] to-neutral-950 border border-white/10 shadow-2xl shadow-black/80 overflow-hidden"
        >
          {/* Subtle Background Radial Accent Glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: project.accent || "var(--accent)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Left Column: Product Information & Features */}
            <div className="flex-1 w-full">
              <MobileShowcaseContent project={project} />
            </div>

            {/* Right Column: Physical Smartphone Frame & UI */}
            <div className="shrink-0 flex items-center justify-center w-full lg:w-auto pt-4 lg:pt-0">
              <MobileDevice project={project} />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
