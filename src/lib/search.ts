import { getAllProjects } from "@/data/projects";
import type { ProjectDetailData, SearchResult, SearchMatchReason } from "@/types";

/**
 * Normalizes text for clean keyword matching
 */
function normalize(str?: string): string {
  return (str || "").toLowerCase().trim();
}

/**
 * Searches and scores projects deterministically based on query terms
 */
export function searchProjects(
  query: string,
  projects: ProjectDetailData[] = getAllProjects()
): SearchResult[] {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return [];

  const tokens = cleanQuery.split(/\s+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];

  for (const project of projects) {
    let score = 0;
    const matchReasons: SearchMatchReason[] = [];

    const normTitle = normalize(project.title);
    const normShortDesc = normalize(project.shortDescription);
    const normOverview = normalize(project.overview);
    const normCategory = normalize(project.category);
    const normAiCategory = normalize(project.aiCategory);
    const normPlatform = normalize(project.platform);
    const normFramework = normalize(project.framework);

    // 1. Title Scoring
    if (normTitle === cleanQuery) {
      score += 100;
      matchReasons.push({ field: "title", label: "Exact Title Match", matchedText: project.title });
    } else if (normTitle.startsWith(cleanQuery)) {
      score += 80;
      matchReasons.push({ field: "title", label: "Title Prefix", matchedText: project.title });
    } else if (normTitle.includes(cleanQuery)) {
      score += 60;
      matchReasons.push({ field: "title", label: "Title Match", matchedText: project.title });
    } else if (tokens.some((token) => normTitle.includes(token))) {
      score += 40;
      matchReasons.push({ field: "title", label: "Title Term Match", matchedText: project.title });
    }

    // 2. Technology & Stack Match
    const allTechs = new Set<string>();
    (project.technologies || []).forEach((t) => allTechs.add(t));
    (project.techStackCategorized || []).forEach((cat) =>
      cat.technologies.forEach((t) => allTechs.add(t))
    );

    const matchedTechs: string[] = [];
    allTechs.forEach((tech) => {
      const normTech = normalize(tech);
      if (normTech === cleanQuery || normTech.includes(cleanQuery) || tokens.some((t) => normTech.includes(t))) {
        matchedTechs.push(tech);
      }
    });

    if (matchedTechs.length > 0) {
      score += 50 + Math.min(matchedTechs.length * 5, 20);
      matchReasons.push({
        field: "technology",
        label: "Technology",
        matchedText: matchedTechs.slice(0, 3).join(", "),
      });
    }

    // 3. Category / AI Domain / Platform Match
    if (
      normCategory.includes(cleanQuery) ||
      tokens.some((t) => normCategory.includes(t)) ||
      normAiCategory.includes(cleanQuery) ||
      tokens.some((t) => normAiCategory.includes(t)) ||
      normPlatform.includes(cleanQuery) ||
      normFramework.includes(cleanQuery)
    ) {
      score += 40;
      const matchedCat = project.aiCategory || project.category || project.framework || "Domain";
      matchReasons.push({ field: "category", label: "Category", matchedText: matchedCat });
    }

    // 4. Description & Overview Match
    if (normShortDesc.includes(cleanQuery) || normOverview.includes(cleanQuery)) {
      score += 30;
      matchReasons.push({ field: "description", label: "Overview Description" });
    } else if (tokens.every((token) => normShortDesc.includes(token) || normOverview.includes(token))) {
      score += 25;
      matchReasons.push({ field: "description", label: "Overview Terms" });
    }

    // 5. Features & Highlights Match
    const matchedFeatures: string[] = [];
    (project.features || []).forEach((feat) => {
      const normFeat = `${normalize(feat.title)} ${normalize(feat.description)}`;
      if (normFeat.includes(cleanQuery) || tokens.some((t) => normFeat.includes(t))) {
        matchedFeatures.push(feat.title);
      }
    });

    if (matchedFeatures.length > 0) {
      score += 20;
      matchReasons.push({
        field: "feature",
        label: "Feature Highlight",
        matchedText: matchedFeatures[0],
      });
    }

    // 6. Model / AI Specific Info Match
    if (project.modelInfo) {
      const normModel = `${normalize(project.modelInfo.task)} ${normalize(project.modelInfo.type)} ${normalize(project.modelInfo.architectureType)} ${normalize(project.modelInfo.framework)}`;
      if (normModel.includes(cleanQuery) || tokens.some((t) => normModel.includes(t))) {
        score += 20;
        matchReasons.push({
          field: "highlight",
          label: "AI Architecture Spec",
          matchedText: project.modelInfo.task || project.modelInfo.type,
        });
      }
    }

    if (score > 0) {
      results.push({
        project,
        score,
        matchReasons,
      });
    }
  }

  // Deterministic sort: higher score first, tie-break by project ID
  results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.project.id.localeCompare(b.project.id);
  });

  return results;
}

/**
 * Derives popular discovery tags dynamically from the canonical projects dataset
 */
export function getPopularSearchTags(projects: ProjectDetailData[] = getAllProjects()): string[] {
  const techFrequency: Record<string, number> = {};
  const categories = new Set<string>();

  projects.forEach((project) => {
    if (project.category) categories.add(project.category);
    if (project.aiCategory) categories.add(project.aiCategory.split(" ")[0]); // e.g. "Machine Learning", "Agentic AI"

    (project.technologies || []).forEach((tech) => {
      techFrequency[tech] = (techFrequency[tech] || 0) + 1;
    });
  });

  // Sort technologies by frequency
  const sortedTech = Object.entries(techFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([tech]) => tech);

  // Return a balanced set of top technologies and domain tags
  const combined = Array.from(new Set([...Array.from(categories), ...sortedTech]));
  return combined.slice(0, 10);
}
