import type { Certification, CertificationCategory } from "@/types/credentials";

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-ai-ml-spec",
    title: "Deep Learning & Neural Network Architectures",
    issuer: "Technical Learning Platform",
    category: "AI & Machine Learning",
    skills: ["PyTorch", "Convolutional Networks", "Recurrent Networks", "Tensor Optimization"],
    description:
      "Advanced coursework covering deep learning foundations, backpropagation dynamics, hyperparameter tuning, and computer vision architectures.",
    verificationStatus: "structural_placeholder",
    isFeatured: true,
  },
  {
    id: "cert-fullstack-cloud",
    title: "Full-Stack Web & Distributed Cloud Systems",
    issuer: "Engineering Learning Platform",
    category: "Web & Mobile Development",
    skills: ["Next.js", "React", "TypeScript", "REST APIs", "PostgreSQL"],
    description:
      "Comprehensive curriculum focusing on modern full-stack web architecture, server-side rendering, API design, and transactional database modeling.",
    verificationStatus: "structural_placeholder",
    isFeatured: true,
  },
  {
    id: "cert-mobile-flutter",
    title: "Cross-Platform Mobile Application Development",
    issuer: "Mobile Engineering Academy",
    category: "Web & Mobile Development",
    skills: ["Flutter", "Dart", "Local State Management", "Offline Sync"],
    description:
      "Engineering responsive mobile client architectures with reactive state management, asynchronous persistence, and native device interactions.",
    verificationStatus: "structural_placeholder",
    isFeatured: true,
  },
  {
    id: "cert-cloud-devops",
    title: "Cloud Infrastructure & Containerization",
    issuer: "Cloud Computing Academy",
    category: "Cloud & Systems",
    skills: ["Docker", "Linux Administration", "CI/CD", "Cloud Architecture"],
    description:
      "Fundamentals of container orchestration, microservices deployment pipelines, Linux server environments, and resilient infrastructure.",
    verificationStatus: "structural_placeholder",
    isFeatured: false,
  },
  {
    id: "cert-python-data",
    title: "Python for Data Structures & Algorithmic Problem Solving",
    issuer: "Computer Science Institute",
    category: "Programming",
    skills: ["Python", "Algorithms", "Data Structures", "Complexity Analysis"],
    description:
      "Deep dive into algorithmic complexity, graph traversal, dynamic programming, and memory-efficient data structure implementations.",
    verificationStatus: "structural_placeholder",
    isFeatured: false,
  },
  {
    id: "cert-iot-embedded",
    title: "Embedded Systems & Microcontroller Telemetry",
    issuer: "IoT Systems Institute",
    category: "Hardware & IoT",
    skills: ["ESP32", "C / C++", "MQTT", "Sensor Protocols"],
    description:
      "Hands-on telemetry acquisition, microcontroller interfacing, event streaming protocols, and edge device communication bridges.",
    verificationStatus: "structural_placeholder",
    isFeatured: false,
  },
];

export function getCertifications(): Certification[] {
  return CERTIFICATIONS;
}

export function getFeaturedCertifications(): Certification[] {
  return CERTIFICATIONS.filter((c) => c.isFeatured);
}

export function getCertificationById(id: string): Certification | undefined {
  return CERTIFICATIONS.find((c) => c.id === id);
}

export function getCertificationCategories(): CertificationCategory[] {
  const categories = new Set<CertificationCategory>();
  CERTIFICATIONS.forEach((c) => categories.add(c.category));
  return Array.from(categories);
}
