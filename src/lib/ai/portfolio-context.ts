import { getAllProjects, getMobileProjects, getAIProjects } from "@/data/projects";
import {
  getPortfolioIdentity,
  getCapabilities,
  getEducation,
  getTimeline,
  getPhilosophy,
} from "@/data/portfolio";
import { getCertifications } from "@/data/credentials";
import { getResumeData } from "@/data/resume";
import { DEFAULT_GITHUB_USERNAME } from "@/lib/github/github-client";

export function buildPortfolioContext(profileMode: "pratham" | "recruiter" = "pratham"): string {
  const identity = getPortfolioIdentity();
  const allProjects = getAllProjects();
  const mobileProjects = getMobileProjects();
  const aiProjects = getAIProjects();
  const capabilities = getCapabilities();
  const education = getEducation();
  const certifications = getCertifications();
  const resume = getResumeData();

  const isRecruiter = profileMode === "recruiter";

  const projectSummaries = allProjects.map((p) => {
    return `- [${p.title}] (ID: ${p.id}, Route: /projects/${p.id}, Category: ${p.category || "General"}): ${p.shortDescription || ""} Tech: ${p.technologies?.join(", ") || ""}`;
  }).join("\n");

  const capabilitySummaries = capabilities.map((c) => {
    return `- ${c.title}: ${c.description} (Tech: ${c.technologies.join(", ")})`;
  }).join("\n");

  const certSummaries = certifications.map((c) => {
    return `- ${c.title} (Issuer: ${c.issuer}, Category: ${c.category}, Skills: ${c.skills.join(", ")})`;
  }).join("\n");

  const eduSummaries = education.map((e) => {
    return `- ${e.degree} in ${e.field} at ${e.institution} (${e.period}). Focus: ${e.highlights.join(", ")}`;
  }).join("\n");

  return `
PRATHAMFLIX PORTFOLIO KNOWLEDGE BASE (Mode: ${isRecruiter ? "Recruiter Focused" : "Full Portfolio"})
=====================================================

1. DEVELOPER IDENTITY:
Name: ${identity.name}
Role Titles: ${identity.roleTitles.join(" · ")}
Headline: ${identity.headline}
Bio: ${identity.shortBio}
Location: ${identity.location}
Status: ${identity.status}

2. CORE CAPABILITIES & DOMAINS:
${capabilitySummaries}

3. CANONICAL PROJECTS (${allProjects.length} Total):
${projectSummaries}

4. SPECIALIZED MOBILE APPLICATIONS (${mobileProjects.length}):
${mobileProjects.map((p) => `- ${p.title} (/projects/${p.id}): ${p.shortDescription || ""}`).join("\n")}

5. SPECIALIZED AI / ML SYSTEMS (${aiProjects.length}):
${aiProjects.map((p) => `- ${p.title} (/projects/${p.id}): ${p.shortDescription || ""}`).join("\n")}

6. ACADEMIC EDUCATION:
${eduSummaries}

7. CERTIFICATIONS & SPECIALIZATIONS:
${certSummaries}

8. GITHUB PRESENCE:
GitHub Username: @${DEFAULT_GITHUB_USERNAME}
Profile URL: https://github.com/${DEFAULT_GITHUB_USERNAME}
Repositories Route: /github

9. CONTACT CHANNELS:
Direct Email: contact@prathamflix.dev
Contact Route: /contact
LinkedIn: https://linkedin.com
Resume Route: /resume
`;
}
