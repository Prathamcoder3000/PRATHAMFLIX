import type {
  GitHubRawUser,
  GitHubRawRepo,
  GitHubRawEvent,
  GitHubProfile,
  GitHubRepository,
  GitHubActivityItem,
} from "./github-types";

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Dart: "#00B4AB",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Rust: "#dea584",
  Go: "#00ADD8",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
};

export function getLanguageColor(language?: string | null): string {
  if (!language) return "#888888";
  return LANGUAGE_COLORS[language] || "#3b82f6";
}

export function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
    return `${Math.floor(diffInSeconds / 31536000)}y ago`;
  } catch {
    return dateString;
  }
}

export function normalizeProfile(raw: GitHubRawUser): GitHubProfile {
  return {
    username: raw.login,
    name: raw.name || raw.login,
    avatarUrl: raw.avatar_url,
    htmlUrl: raw.html_url,
    bio: raw.bio || "Computer Engineering student & software developer.",
    publicRepos: raw.public_repos || 0,
    followers: raw.followers || 0,
    following: raw.following || 0,
    location: raw.location || undefined,
    company: raw.company || undefined,
    blog: raw.blog || undefined,
  };
}

export function normalizeRepository(
  raw: GitHubRawRepo,
  linkedProjectId?: string
): GitHubRepository {
  return {
    id: raw.id,
    name: raw.name,
    fullName: raw.full_name,
    description: raw.description,
    htmlUrl: raw.html_url,
    homepage: raw.homepage,
    language: raw.language,
    topics: raw.topics || [],
    stars: raw.stargazers_count || 0,
    forks: raw.forks_count || 0,
    watchers: raw.watchers_count || 0,
    updatedAt: raw.updated_at,
    createdAt: raw.created_at,
    isFork: Boolean(raw.fork),
    isArchived: Boolean(raw.archived),
    linkedProjectId,
  };
}

export function normalizeActivityEvent(raw: GitHubRawEvent): GitHubActivityItem | null {
  try {
    let actionSummary = "Active in repository";
    let commitCount: number | undefined = undefined;

    switch (raw.type) {
      case "PushEvent": {
        const count = raw.payload.commits?.length || raw.payload.size || 1;
        commitCount = count;
        actionSummary = `Pushed ${count} commit${count > 1 ? "s" : ""} to ${raw.payload.ref?.replace("refs/heads/", "") || "main"}`;
        break;
      }
      case "CreateEvent": {
        actionSummary = `Created ${raw.payload.ref_type || "repository"} ${raw.payload.ref || ""}`.trim();
        break;
      }
      case "WatchEvent": {
        actionSummary = "Starred repository";
        break;
      }
      case "ForkEvent": {
        actionSummary = "Forked repository";
        break;
      }
      case "ReleaseEvent": {
        actionSummary = "Published a release";
        break;
      }
      default:
        actionSummary = raw.type.replace("Event", "");
    }

    return {
      id: raw.id,
      type: raw.type,
      repoName: raw.repo.name,
      repoUrl: `https://github.com/${raw.repo.name}`,
      createdAt: raw.created_at,
      actionSummary,
      commitCount,
    };
  } catch {
    return null;
  }
}
