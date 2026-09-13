/**
 * Verification Manifest for PRATHAMFLIX Portfolio Data (Phase 22)
 *
 * Categorizes every portfolio claim, project, credential, and asset into:
 * - VERIFIED: Supported by direct evidence in repository or verified config.
 * - NEEDS_USER_VERIFICATION: Candidate real project / fact requiring user confirmation of specific details.
 * - UNVERIFIED: Provisional placeholder content to be replaced or removed once confirmed.
 */

export type VerificationStatus = "VERIFIED" | "NEEDS_USER_VERIFICATION" | "UNVERIFIED";

export interface ProjectVerificationRecord {
  id: string;
  currentTitle: string;
  currentCategory: string;
  candidateRealProject?: string;
  candidateDescription?: string;
  candidateTechnologies?: string[];
  githubRepo?: string;
  status: VerificationStatus;
  evidenceSource: string;
  notes: string;
}

export interface CredentialVerificationRecord {
  id: string;
  title: string;
  issuer: string;
  category: string;
  status: VerificationStatus;
  evidenceSource: string;
  notes: string;
}

export interface IdentityVerificationRecord {
  field: string;
  value: string | string[];
  status: VerificationStatus;
  evidenceSource: string;
  notes: string;
}

export interface AssetVerificationRecord {
  assetId: string;
  targetPath: string;
  category: "project" | "mobile" | "ai" | "brand" | "certificate" | "resume";
  status: VerificationStatus;
  evidenceSource: string;
  notes: string;
}

export const PROJECT_VERIFICATION_MANIFEST: ProjectVerificationRecord[] = [
  {
    id: "prathamflix-platform",
    currentTitle: "PRATHAMFLIX Portfolio Platform",
    currentCategory: "Full-Stack Web & Systems",
    candidateRealProject: "PRATHAMFLIX Streaming-Inspired Developer Portfolio",
    candidateDescription:
      "A cinematic, streaming-inspired developer portfolio platform built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.",
    candidateTechnologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    githubRepo: "https://github.com/Prathamcoder3000/PRATHAMFLIX",
    status: "VERIFIED",
    evidenceSource: "Active codebase, GitHub repository Prathamcoder3000/PRATHAMFLIX",
    notes: "Authoritative project codebase verified.",
  },
  {
    id: "smartpark-ai",
    currentTitle: "SmartPark AI 2.0",
    currentCategory: "AI / ML & Computer Vision",
    candidateRealProject: "SmartPark AI 2.0 — Intelligent Parking Management & Spatial Vision",
    candidateDescription:
      "Automated parking occupancy detection and guidance system utilizing computer vision and edge spatial inference.",
    candidateTechnologies: ["Python", "OpenCV", "PyTorch", "FastAPI", "Computer Vision"],
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Developer-provided project lead",
    notes: "Requires user confirmation of exact tech stack, model architecture, and repository link.",
  },
  {
    id: "gpthane-ai",
    currentTitle: "GPThane",
    currentCategory: "AI Agent & LLM Systems",
    candidateRealProject: "GPThane — Intelligent Conversational & Information Agent",
    candidateDescription:
      "Localized AI assistant for conversational query processing, information synthesis, and domain-specific knowledge retrieval.",
    candidateTechnologies: ["Python", "FastAPI", "LangChain / LLM", "React / Next.js"],
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Developer-provided project lead",
    notes: "Requires user confirmation of exact framework, deployment, and repository link.",
  },
  {
    id: "saksham-eldercare",
    currentTitle: "Saksham ElderCare Manager",
    currentCategory: "Mobile Application",
    candidateRealProject: "Saksham — ElderCare Assistance & Health Monitoring Mobile App",
    candidateDescription:
      "Cross-platform mobile application providing health tracking, emergency SOS alerts, medication reminders, and caregiver synchronization.",
    candidateTechnologies: ["Flutter / React Native", "Firebase / SQLite", "Dart / TypeScript"],
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Developer-provided project lead",
    notes: "Requires user confirmation of mobile framework (Flutter vs React Native) and repository link.",
  },
  {
    id: "smart-study-iot",
    currentTitle: "Sensor-Based Smart Study Schedule Planning System",
    currentCategory: "IoT & Embedded Systems",
    candidateRealProject: "Sensor-Based Smart Study Schedule Planning System",
    candidateDescription:
      "IoT-integrated intelligent study environment and scheduler combining environmental microcontroller sensors with automated session tracking.",
    candidateTechnologies: ["ESP32 / Arduino", "C / C++", "Sensors", "MQTT / WebSockets", "Node.js"],
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Developer-provided project lead",
    notes: "Requires user confirmation of microcontroller board, sensor types, and software stack.",
  },
  {
    id: "featured-alpha",
    currentTitle: "Project Alpha",
    currentCategory: "Featured",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item to be transitioned to verified canonical projects.",
  },
  {
    id: "featured-beta",
    currentTitle: "Project Beta",
    currentCategory: "Design System",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item to be transitioned to verified canonical projects.",
  },
  {
    id: "featured-gamma",
    currentTitle: "Project Gamma",
    currentCategory: "Backend System",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "featured-delta",
    currentTitle: "Project Delta",
    currentCategory: "Edge & IoT",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "featured-epsilon",
    currentTitle: "Project Epsilon",
    currentCategory: "AI / ML",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "featured-zeta",
    currentTitle: "Project Zeta",
    currentCategory: "Mobile",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-iota",
    currentTitle: "Project Iota",
    currentCategory: "Cloud Platform",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-kappa",
    currentTitle: "Project Kappa",
    currentCategory: "API Gateway",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-lambda",
    currentTitle: "Project Lambda",
    currentCategory: "Collaboration",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-mu",
    currentTitle: "Project Mu",
    currentCategory: "Observability",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-nu",
    currentTitle: "Project Nu",
    currentCategory: "Distributed Core",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "systems-xi",
    currentTitle: "Project Xi",
    currentCategory: "Security",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "exp-omicron",
    currentTitle: "Project Omicron",
    currentCategory: "Computer Graphics",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "exp-pi",
    currentTitle: "Project Pi",
    currentCategory: "AI Agent",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "exp-rho",
    currentTitle: "Project Rho",
    currentCategory: "Creative Code",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "exp-sigma",
    currentTitle: "Project Sigma",
    currentCategory: "Algorithms",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
  {
    id: "exp-tau",
    currentTitle: "Project Tau",
    currentCategory: "Compilers",
    status: "UNVERIFIED",
    evidenceSource: "Provisional placeholder dataset",
    notes: "Provisional item.",
  },
];

export const IDENTITY_VERIFICATION_MANIFEST: IdentityVerificationRecord[] = [
  {
    field: "name",
    value: "Pratham",
    status: "VERIFIED",
    evidenceSource: "Authoritative GitHub profile (@Prathamcoder3000) and repository configuration",
    notes: "Verified.",
  },
  {
    field: "roleTitles",
    value: [
      "Computer Engineering Student",
      "Full-Stack Developer",
      "Mobile Application Developer",
      "AI/ML Enthusiast",
    ],
    status: "VERIFIED",
    evidenceSource: "Portfolio engineering core focus areas",
    notes: "Honest representation without inflated claims.",
  },
  {
    field: "github",
    value: "https://github.com/Prathamcoder3000",
    status: "VERIFIED",
    evidenceSource: "Active GitHub username @Prathamcoder3000",
    notes: "Verified.",
  },
  {
    field: "email",
    value: "contact@prathamflix.dev",
    status: "VERIFIED",
    evidenceSource: "Centralized domain contact address",
    notes: "Verified.",
  },
  {
    field: "location",
    value: "India",
    status: "VERIFIED",
    evidenceSource: "Intentionally public location level",
    notes: "Verified country-level location.",
  },
];

export const CREDENTIALS_VERIFICATION_MANIFEST: CredentialVerificationRecord[] = [
  {
    id: "cert-ai-ml-spec",
    title: "Deep Learning & Neural Network Architectures",
    issuer: "Technical Learning Coursework",
    category: "AI & Machine Learning",
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Coursework curriculum",
    notes: "Marked as structural coursework; no fabricated credential ID.",
  },
  {
    id: "cert-fullstack-cloud",
    title: "Full-Stack Web & Distributed Systems",
    issuer: "Engineering Learning Coursework",
    category: "Web & Mobile Development",
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Coursework curriculum",
    notes: "Marked as structural coursework; no fabricated credential ID.",
  },
  {
    id: "cert-mobile-flutter",
    title: "Cross-Platform Mobile Application Development",
    issuer: "Mobile Engineering Coursework",
    category: "Web & Mobile Development",
    status: "NEEDS_USER_VERIFICATION",
    evidenceSource: "Coursework curriculum",
    notes: "Marked as structural coursework; no fabricated credential ID.",
  },
];

export const ASSET_VERIFICATION_MANIFEST: AssetVerificationRecord[] = [
  {
    assetId: "prathamflix-logo",
    targetPath: "public/brand/logo.svg",
    category: "brand",
    status: "VERIFIED",
    evidenceSource: "Procedural SVG in PrathamflixLogo.tsx",
    notes: "Self-contained geometric prism vector asset.",
  },
  {
    assetId: "smartpark-screenshot",
    targetPath: "public/projects/smartpark-ai/screen-01.webp",
    category: "ai",
    status: "UNVERIFIED",
    evidenceSource: "Asset not provided yet",
    notes: "Retains elegant procedural fallback until real asset is supplied.",
  },
  {
    assetId: "saksham-mobile-screen",
    targetPath: "public/projects/mobile/saksham/screen-01.webp",
    category: "mobile",
    status: "UNVERIFIED",
    evidenceSource: "Asset not provided yet",
    notes: "Retains elegant procedural mobile frame fallback until real asset is supplied.",
  },
];
