/**
 * Site Configuration & Canonical URL Resolution
 * Configurable via NEXT_PUBLIC_SITE_URL or SITE_URL environment variables.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://prathamflix.vercel.app";

export const SITE_CONFIG = {
  name: "PRATHAMFLIX",
  title: "PRATHAMFLIX — Developer Portfolio Platform",
  description:
    "Cinematic developer portfolio universe showcasing engineering systems, mobile apps, full-stack architectures, and AI/ML experiments.",
  author: "Pratham",
  githubUsername: "Prathamcoder3000",
  githubUrl: "https://github.com/Prathamcoder3000",
  siteUrl: SITE_URL,
};
