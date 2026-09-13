import type {
  PortfolioIdentityData,
  CapabilityGroup,
  TimelineEntry,
  EducationEntry,
  PhilosophyPrinciple,
  InterestArea,
} from "@/types/portfolio";

export const PORTFOLIO_IDENTITY: PortfolioIdentityData = {
  name: "Pratham",
  roleTitles: [
    "Computer Engineering Student",
    "Full-Stack Developer",
    "Mobile Application Developer",
    "AI/ML Enthusiast",
  ],
  headline: "Engineering Scalable Systems, Cross-Platform Clients & Neural Workflows",
  shortBio:
    "Passionate computer engineering student specialized in architecting end-to-end full-stack systems, robust cross-platform mobile applications, and intelligent machine learning workflows.",
  summary:
    "Pratham is an engineer focused on the intersection of scalable distributed backends, fluid interactive frontends, native mobile ecosystems, and applied machine learning. With a deep commitment to engineering craft, clean abstractions, and high-performance interfaces, he approaches software as an integrated discipline from low-level systems up to user-facing experiences.",
  location: "India",
  status: "Portfolio Engine Online · Interactive Mode",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Prathamcoder3000",
      iconName: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      iconName: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:contact@prathamflix.dev",
      iconName: "mail",
    },
    {
      label: "Terminal",
      href: "/#terminal",
      iconName: "terminal",
    },
  ],
};

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    iconName: "Globe",
    description:
      "Modern web applications with server-side rendering, distributed state, reactive client experiences, and robust REST/GraphQL APIs.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS v4",
    ],
    featuredProjectIds: ["ai-agent-dag", "prathamflix-web"],
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    iconName: "Smartphone",
    description:
      "High-performance cross-platform mobile clients with offline-first synchronization, native gesture physics, and reactive state management.",
    technologies: [
      "Flutter",
      "React Native",
      "Dart",
      "SQLite / Hive",
      "REST & WebSockets",
      "Figma",
    ],
    featuredProjectIds: ["health-tracker-app", "crypto-wallet-app"],
  },
  {
    id: "ai-ml",
    title: "AI / ML & Intelligent Systems",
    iconName: "BrainCircuit",
    description:
      "Autonomous agent DAG orchestration, real-time spatial vision inference, neural pipeline optimization, and edge acceleration.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "Agentic Frameworks",
      "TensorRT / ONNX",
      "FastAPI",
    ],
    featuredProjectIds: ["ai-agent-dag", "vision-defect-detector", "stock-predictor-lstm"],
  },
  {
    id: "systems-iot",
    title: "Systems Engineering & IoT",
    iconName: "Cpu",
    description:
      "Low-level microcontrollers, telemetry ingestion streams, sensor networks, and edge protocol bridges.",
    technologies: [
      "ESP32 / Arduino",
      "C / C++",
      "MQTT / WebSockets",
      "Sensor Protocols",
      "Time-Series DB",
    ],
    featuredProjectIds: ["smart-energy-monitor", "cloud-ide-compiler"],
  },
  {
    id: "tooling-ui",
    title: "UI Systems & Developer Tooling",
    iconName: "Layers",
    description:
      "Design system foundations, token hierarchies, keyboard-first terminal workflows, and accessible component architectures.",
    technologies: [
      "Framer Motion",
      "Design Systems",
      "WAI-ARIA Accessibility",
      "Micro-Interactions",
      "CLI / Terminal UX",
    ],
    featuredProjectIds: ["prathamflix-web", "cloud-ide-compiler"],
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "timeline-1",
    period: "2023 — Present",
    title: "Bachelor of Engineering — Computer Engineering",
    organization: "Engineering Degree",
    description:
      "Focusing on systems architecture, data structures & algorithms, operating systems, database engineering, and machine learning models.",
    category: "education",
    technologies: ["Data Structures", "Algorithms", "OS & Networks", "DBMS", "Software Architecture"],
    isCurrent: true,
  },
  {
    id: "timeline-2",
    period: "2024",
    title: "Architected PRATHAMFLIX Streaming Portfolio Engine",
    organization: "Systems & UI Engineering",
    description:
      "Built a cinematic developer portfolio platform featuring Next.js 16 App Router, custom design system, interactive terminal emulator, and dual persona profiles.",
    category: "engineering",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    isCurrent: true,
  },
  {
    id: "timeline-3",
    period: "2024",
    title: "Intelligent Multi-Agent Orchestrator & Inference DAGs",
    organization: "AI & Distributed Systems Research",
    description:
      "Engineered a dynamic execution engine for concurrent AI agents with topological dependency resolution, cycle prevention, and telemetry visualization.",
    category: "milestone",
    technologies: ["Python", "FastAPI", "Next.js", "PyTorch", "Graph Topology"],
  },
  {
    id: "timeline-4",
    period: "2023 — 2024",
    title: "Cross-Platform Mobile Ecosystems & Offline Sync",
    organization: "Mobile Architecture",
    description:
      "Designed and deployed responsive mobile applications with biometric authentication, bi-directional local-first data sync, and fluid gesture mechanics.",
    category: "engineering",
    technologies: ["Flutter", "Dart", "Local State Engines", "REST", "Biometrics"],
  },
];

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: "edu-1",
    institution: "University Engineering Program",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    period: "Active Academic Degree",
    description:
      "Comprehensive curriculum combining theoretical foundations of computation with applied full-stack software development, systems programming, and modern machine learning.",
    highlights: [
      "Data Structures & Advanced Algorithms",
      "Operating Systems & Distributed Networks",
      "Database Management Systems & Indexing",
      "Artificial Intelligence & Machine Learning",
      "Object-Oriented & Modular Software Design",
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: "phil-1",
    number: "01",
    title: "Build Real Systems",
    statement: "Prioritize end-to-end working software over isolated theoretical snippets.",
    description:
      "A complete system requires thoughtful state orchestration, resilient error boundaries, and refined user interactions from data layer to render tree.",
    iconName: "PackageCheck",
  },
  {
    id: "phil-2",
    number: "02",
    title: "Learn by Shipping",
    statement: "Validate ideas and deepen mastery through iterative, real-world deployment.",
    description:
      "Building practical prototypes and refining them against edge cases accelerates architectural intuition and creates tangible value.",
    iconName: "Rocket",
  },
  {
    id: "phil-3",
    number: "03",
    title: "Design for Users & Flow",
    statement: "Technical capability must be matched with clear ergonomics and cinematic aesthetic.",
    description:
      "Great software feels effortless. Smooth micro-interactions, responsive ergonomics, and keyboard-first accessibility elevate the developer experience.",
    iconName: "Sparkles",
  },
  {
    id: "phil-4",
    number: "04",
    title: "Architect for Maintainability",
    statement: "Structure code with clean separation of concerns and clear data ownership.",
    description:
      "Extensible types, single sources of truth, and predictable data flow ensure systems remain maintainable as requirements evolve.",
    iconName: "ShieldCheck",
  },
  {
    id: "phil-5",
    number: "05",
    title: "Explore Emerging Tech Responsibly",
    statement: "Adopt new paradigms when they provide genuine leverage, not merely hype.",
    description:
      "Deep exploration of agentic workflows, neural inference, and modern compiler tooling with a pragmatic focus on performance and reliability.",
    iconName: "Compass",
  },
];

export const INTEREST_AREAS: InterestArea[] = [
  {
    id: "interest-1",
    title: "Distributed Systems & Cloud Architecture",
    description:
      "Designing fault-tolerant microservices, event streaming architectures, and high-concurrency ingestion pipelines.",
    iconName: "Network",
    tags: ["Distributed State", "Event Streams", "High Availability", "Microservices"],
  },
  {
    id: "interest-2",
    title: "Agentic AI & Neural Graph Workflows",
    description:
      "Autonomous tool-calling agents, iterative refinement loops, dynamic DAG scheduling, and edge neural inference.",
    iconName: "BrainCircuit",
    tags: ["Agentic DAGs", "Edge Inference", "Autonomous Workflows", "Vector Search"],
  },
  {
    id: "interest-3",
    title: "Cross-Platform Mobile Engineering",
    description:
      "Crafting 60fps responsive experiences with local-first databases, real-time sync, and hardware sensor integration.",
    iconName: "Smartphone",
    tags: ["Flutter", "Offline-First", "Gesture Physics", "Local Storage"],
  },
  {
    id: "interest-4",
    title: "Developer Tooling & Interactive UI Engines",
    description:
      "Building expressive design systems, terminal emulators, developer palettes, and cinematic web platforms.",
    iconName: "Terminal",
    tags: ["Design Systems", "Keyboard-First", "Terminal UX", "Motion Physics"],
  },
  {
    id: "interest-5",
    title: "IoT & Embedded Telemetry",
    description:
      "Bridging low-level microcontroller sensors with cloud telemetry streams and real-time dashboard analytics.",
    iconName: "Cpu",
    tags: ["ESP32", "MQTT", "Time-Series", "Sensor Telemetry"],
  },
];

export function getPortfolioIdentity(): PortfolioIdentityData {
  return PORTFOLIO_IDENTITY;
}

export function getCapabilities(): CapabilityGroup[] {
  return CAPABILITY_GROUPS;
}

export function getTimeline(): TimelineEntry[] {
  return TIMELINE_ENTRIES;
}

export function getEducation(): EducationEntry[] {
  return EDUCATION_ENTRIES;
}

export function getPhilosophy(): PhilosophyPrinciple[] {
  return PHILOSOPHY_PRINCIPLES;
}

export function getInterests(): InterestArea[] {
  return INTEREST_AREAS;
}
