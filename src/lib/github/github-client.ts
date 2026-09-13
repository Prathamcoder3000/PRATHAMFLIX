import type {
  GitHubProfile,
  GitHubRepository,
  GitHubActivityItem,
  GitHubDataResult,
  GitHubRawUser,
  GitHubRawRepo,
  GitHubRawEvent,
} from "./github-types";
import {
  normalizeProfile,
  normalizeRepository,
  normalizeActivityEvent,
} from "./github-utils";
import { getAllProjects } from "@/data/projects";

export const DEFAULT_GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
  process.env.GITHUB_USERNAME ||
  "Prathamcoder3000";

const GITHUB_API_BASE = "https://api.github.com";

// Known fallback data in case GitHub API is rate-limited or offline during local dev / builds
const FALLBACK_PROFILE: GitHubProfile = {
  username: DEFAULT_GITHUB_USERNAME,
  name: "Pratham",
  avatarUrl: "https://avatars.githubusercontent.com/u/104279589?v=4",
  htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}`,
  bio: "Computer Engineering Student · Full-Stack Developer · Mobile Developer · AI/ML Enthusiast",
  publicRepos: 12,
  followers: 5,
  following: 10,
  location: "India",
};

const FALLBACK_REPOSITORIES: GitHubRepository[] = [
  {
    id: "repo-prathamflix",
    name: "PRATHAMFLIX",
    fullName: `${DEFAULT_GITHUB_USERNAME}/PRATHAMFLIX`,
    description: "Cinematic developer portfolio engine built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.",
    htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}/PRATHAMFLIX`,
    homepage: "https://prathamflix.dev",
    language: "TypeScript",
    topics: ["nextjs", "react", "typescript", "portfolio", "framer-motion", "tailwind"],
    stars: 12,
    forks: 2,
    watchers: 12,
    updatedAt: new Date().toISOString(),
    createdAt: "2024-01-10T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "prathamflix-web",
  },
  {
    id: "repo-ai-agent-dag",
    name: "ai-agent-dag-orchestrator",
    fullName: `${DEFAULT_GITHUB_USERNAME}/ai-agent-dag-orchestrator`,
    description: "Multi-agent dynamic DAG execution engine with topological dependency resolution and cycle prevention.",
    htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}/ai-agent-dag-orchestrator`,
    homepage: null,
    language: "Python",
    topics: ["ai", "agents", "dag", "pytorch", "fastapi"],
    stars: 8,
    forks: 1,
    watchers: 8,
    updatedAt: new Date().toISOString(),
    createdAt: "2024-02-15T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "ai-agent-dag",
  },
  {
    id: "repo-health-tracker",
    name: "health-tracker-mobile-app",
    fullName: `${DEFAULT_GITHUB_USERNAME}/health-tracker-mobile-app`,
    description: "Cross-platform mobile application with offline-first synchronization and biometric security.",
    htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}/health-tracker-mobile-app`,
    homepage: null,
    language: "Dart",
    topics: ["flutter", "dart", "offline-first", "sqlite", "health"],
    stars: 6,
    forks: 1,
    watchers: 6,
    updatedAt: new Date().toISOString(),
    createdAt: "2023-11-20T00:00:00Z",
    isFork: false,
    isArchived: false,
    linkedProjectId: "health-tracker-app",
  },
];

function matchLinkedProject(repoName: string, allProjects = getAllProjects()): string | undefined {
  const lowerName = repoName.toLowerCase().replace(/[-_]/g, "");
  for (const proj of allProjects) {
    const lowerProjId = proj.id.toLowerCase().replace(/[-_]/g, "");
    const lowerProjTitle = proj.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (lowerName.includes(lowerProjId) || lowerProjId.includes(lowerName) || lowerName.includes(lowerProjTitle)) {
      return proj.id;
    }
  }
  return undefined;
}

export function sortRepositories(repos: GitHubRepository[]): GitHubRepository[] {
  return [...repos].sort((a, b) => {
    // 1. Repositories linked to known portfolio projects first
    if (a.linkedProjectId && !b.linkedProjectId) return -1;
    if (!a.linkedProjectId && b.linkedProjectId) return 1;

    // 2. Non-forks before forks
    if (!a.isFork && b.isFork) return -1;
    if (a.isFork && !b.isFork) return 1;

    // 3. Star count descending
    if (b.stars !== a.stars) return b.stars - a.stars;

    // 4. Recently updated date descending
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export async function fetchGitHubData(
  username: string = DEFAULT_GITHUB_USERNAME
): Promise<GitHubDataResult> {
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "PRATHAMFLIX-Portfolio",
  };

  try {
    // Fetch Profile, Repositories, and Public Events in parallel with Next.js ISR revalidation
    const [userRes, reposRes, eventsRes] = await Promise.allSettled([
      fetch(`${GITHUB_API_BASE}/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`${GITHUB_API_BASE}/users/${username}/events/public?per_page=15`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    // Check for rate limit or errors
    let isRateLimited = false;
    let rawUser: GitHubRawUser | null = null;
    let rawRepos: GitHubRawRepo[] = [];
    let rawEvents: GitHubRawEvent[] = [];

    if (userRes.status === "fulfilled") {
      if (userRes.value.status === 403 || userRes.value.status === 429) {
        isRateLimited = true;
      } else if (userRes.value.ok) {
        rawUser = await userRes.value.json();
      }
    }

    if (reposRes.status === "fulfilled") {
      if (reposRes.value.status === 403 || reposRes.value.status === 429) {
        isRateLimited = true;
      } else if (reposRes.value.ok) {
        rawRepos = await reposRes.value.json();
      }
    }

    if (eventsRes.status === "fulfilled" && eventsRes.value.ok) {
      rawEvents = await eventsRes.value.json();
    }

    // If rate limited or failed with no live user, supply safe normalized fallback
    if (isRateLimited || (!rawUser && rawRepos.length === 0)) {
      const sortedFallback = sortRepositories(FALLBACK_REPOSITORIES);
      return {
        profile: FALLBACK_PROFILE,
        repositories: sortedFallback,
        featuredRepositories: sortedFallback.slice(0, 3),
        recentActivity: [],
        status: isRateLimited ? "rate_limited" : "error",
        errorMessage: isRateLimited
          ? "GitHub API rate limit reached. Displaying cached telemetry."
          : "Could not establish connection to GitHub API. Displaying cached repository data.",
      };
    }

    const allProjects = getAllProjects();
    const normalizedProfile = rawUser ? normalizeProfile(rawUser) : FALLBACK_PROFILE;
    
    const normalizedRepos = rawRepos
      .filter((r) => !r.disabled)
      .map((r) => normalizeRepository(r, matchLinkedProject(r.name, allProjects)));

    const sortedRepos = sortRepositories(
      normalizedRepos.length > 0 ? normalizedRepos : FALLBACK_REPOSITORIES
    );

    const activityItems = Array.isArray(rawEvents)
      ? rawEvents
          .map(normalizeActivityEvent)
          .filter((item): item is GitHubActivityItem => Boolean(item))
      : [];

    return {
      profile: normalizedProfile,
      repositories: sortedRepos,
      featuredRepositories: sortedRepos.slice(0, 3),
      recentActivity: activityItems,
      status: sortedRepos.length === 0 ? "empty" : "success",
    };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Failed to fetch GitHub data";
    const sortedFallback = sortRepositories(FALLBACK_REPOSITORIES);
    return {
      profile: FALLBACK_PROFILE,
      repositories: sortedFallback,
      featuredRepositories: sortedFallback.slice(0, 3),
      recentActivity: [],
      status: "error",
      errorMessage: errorMsg,
    };
  }
}
