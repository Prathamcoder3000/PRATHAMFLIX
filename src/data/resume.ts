import type { ResumeData } from "@/types/resume";
import { PORTFOLIO_IDENTITY, EDUCATION_ENTRIES } from "./portfolio";

export const RESUME_DATA: ResumeData = {
  name: PORTFOLIO_IDENTITY.name,
  title: "Computer Engineering Student · Full-Stack & Systems Engineer",
  headline: PORTFOLIO_IDENTITY.headline,
  location: PORTFOLIO_IDENTITY.location,
  email: "contact@prathamflix.dev",
  github: "https://github.com/Prathamcoder3000",
  linkedin: "https://linkedin.com",
  portfolioUrl: "https://prathamflix.dev",
  summary:
    "Engineering-driven Computer Engineering student with extensive practical experience in full-stack web architecture, cross-platform mobile client engineering, intelligent AI multi-agent workflows, and low-level IoT telemetry systems. Committed to building robust, type-safe, and high-performance digital products.",
  education: EDUCATION_ENTRIES,
  experience: [
    {
      id: "exp-lead-architect",
      role: "Lead Platform Architect & Developer",
      organization: "PRATHAMFLIX Portfolio Platform",
      period: "2024 — Present",
      location: "Independent Engineering",
      summary:
        "Designed and implemented an enterprise-grade cinematic developer portfolio engine using Next.js 16, React 19, TypeScript, and Tailwind CSS v4.",
      points: [
        "Architected custom streaming-inspired design system with reusable surface, typography, badge, and modal primitives.",
        "Implemented pure client-side developer terminal simulator with deterministic command dispatching and history traversal.",
        "Integrated multi-persona profiling engine enabling tailored viewing experiences for recruiters and developers.",
        "Built responsive media showcases including interactive mobile device frames and neural pipeline graph visualizations.",
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    },
    {
      id: "exp-systems-ai",
      role: "AI & Distributed Systems Research",
      organization: "Academic & Open Engineering",
      period: "2023 — 2024",
      location: "University Projects",
      summary:
        "Developed end-to-end full-stack applications and intelligent agent execution frameworks.",
      points: [
        "Engineered DAG-based multi-agent execution engine with topological dependency resolution and cycle prevention algorithms.",
        "Built cross-platform Flutter applications featuring biometric auth and local-first SQLite persistence.",
        "Developed hardware-software IoT telemetry bridges using ESP32 microcontrollers and MQTT event streams.",
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Flutter", "ESP32", "PostgreSQL"],
    },
  ],
  featuredProjectIds: [
    "ai-agent-dag",
    "health-tracker-app",
    "prathamflix-web",
    "smart-energy-monitor",
  ],
  skillCategories: [
    {
      title: "Frontend & UI Systems",
      skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "HTML5/CSS3", "WAI-ARIA"],
    },
    {
      title: "Backend & Distributed Systems",
      skills: ["Node.js", "FastAPI", "Python", "REST APIs", "WebSockets", "PostgreSQL", "SQLite", "Docker Basics"],
    },
    {
      title: "Mobile & Embedded",
      skills: ["Flutter", "Dart", "React Native", "ESP32", "C / C++", "MQTT Telemetry", "Local-First Sync"],
    },
    {
      title: "AI / ML & Modeling",
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "Agentic DAGs", "Neural Optimization", "Data Analysis"],
    },
    {
      title: "Engineering Practices",
      skills: ["Git / GitHub", "Clean Architecture", "Type Safety", "Performance Profiling", "Responsive UX"],
    },
  ],
  certificationIds: [
    "cert-ai-ml-spec",
    "cert-fullstack-cloud",
    "cert-mobile-flutter",
    "cert-cloud-devops",
    "cert-python-data",
  ],
  achievements: [
    "Architected and deployed PRATHAMFLIX platform with complete responsive test matrix from 360px mobile to ultrawide.",
    "Engineered autonomous AI DAG execution pipeline with real-time topological cycle validation.",
    "Designed and developed multiple cross-platform mobile prototypes with local-first sync architecture.",
  ],
};

export function getResumeData(): ResumeData {
  return RESUME_DATA;
}
