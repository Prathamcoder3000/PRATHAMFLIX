import type { Variants, Transition } from "framer-motion";

/**
 * PRATHAMFLIX Motion Tokens & Presets
 * Reusable animation foundations with reduced motion support
 */

export const DURATION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
  cinematic: 1.0,
} as const;

export const EASING = {
  default: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
  easeOut: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
  easeIn: [0.4, 0.0, 1.0, 1.0] as [number, number, number, number],
  cinematic: [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: {
    type: "spring",
    damping: 24,
    stiffness: 260,
  } as const,
} as const;

export const transitionFast: Transition = {
  duration: DURATION.fast,
  ease: EASING.easeOut,
};

export const transitionNormal: Transition = {
  duration: DURATION.normal,
  ease: EASING.cinematic,
};

export const transitionCinematic: Transition = {
  duration: DURATION.slow,
  ease: EASING.cinematic,
};

/**
 * Reusable Framer Motion Variants
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionNormal,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionNormal,
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionNormal,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionNormal,
  },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Hover and interactive motion presets
 */
export const interactiveHover = {
  scale: 1.02,
  transition: transitionFast,
};

export const interactiveTap = {
  scale: 0.98,
  transition: transitionFast,
};
