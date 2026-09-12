"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrathamflixLogo } from "@/components/brand/PrathamflixLogo";
import { IntroControls } from "./IntroControls";
import { useIntroSound } from "@/hooks/useIntroSound";

export interface CinematicIntroProps {
  isActive: boolean;
  onComplete: () => void;
  hasReducedMotion?: boolean;
}

export function CinematicIntro({
  isActive,
  onComplete,
  hasReducedMotion = false,
}: CinematicIntroProps) {
  const { isMuted, toggleSound, playIntroSound } = useIntroSound();

  const handleSkip = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!isActive) return;

    if (hasReducedMotion) {
      const timer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    playIntroSound();

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [isActive, hasReducedMotion, onComplete, playIntroSound]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="cinematic-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608] overflow-hidden select-none"
          role="region"
          aria-label="PRATHAMFLIX Cinematic Introduction"
        >
          {/* Subtle Ambient Radial Backlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.45, 0.25],
              scale: [0.8, 1.2, 1.1],
            }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute h-[380px] w-[380px] sm:h-[550px] sm:w-[550px] rounded-full bg-[radial-gradient(circle,rgba(229,9,38,0.25)_0%,transparent_70%)] pointer-events-none blur-2xl"
          />

          {/* Centered Logo Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            <motion.div
              initial={
                hasReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.92, y: 8, filter: "blur(4px)" }
              }
              animate={
                hasReducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: [0, 1, 1, 0.9],
                      scale: [0.92, 1.0, 1.02, 1.05],
                      y: [8, 0, 0, -2],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                    }
              }
              transition={{
                duration: 2.5,
                times: [0, 0.35, 0.8, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <PrathamflixLogo size="hero" showWordmark />
            </motion.div>

            {/* Subtle Tagline / Developer Identifier */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 0, 0.7, 0.9], y: [10, 10, 0, 0] }}
              transition={{ duration: 2.2, times: [0, 0.4, 0.7, 1], ease: "easeOut" }}
              className="mt-6 text-xs sm:text-sm font-medium tracking-[0.25em] text-neutral-400 uppercase text-center"
            >
              Developer Experience • Portfolio Platform
            </motion.p>
          </div>

          {/* Interactive Controls (Skip & Sound) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <IntroControls
              isMuted={isMuted}
              onToggleSound={toggleSound}
              onSkip={handleSkip}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
