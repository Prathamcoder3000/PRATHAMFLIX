export interface GitHubRawUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRawRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  topics?: string[];
  default_branch: string;
}

export interface GitHubRawEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login?: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    description?: string;
    commits?: Array<{
      sha: string;
      message: string;
    }>;
    size?: number;
  };
  public: boolean;
  created_at: string;
}

export interface GitHubProfile {
  username: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  location?: string;
  company?: string;
  blog?: string;
}

export interface GitHubRepository {
  id: number | string;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  watchers: number;
  updatedAt: string;
  createdAt: string;
  isFork: boolean;
  isArchived: boolean;
  linkedProjectId?: string;
}

export interface GitHubActivityItem {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  actionSummary: string;
  commitCount?: number;
}

export interface GitHubDataResult {
  profile: GitHubProfile | null;
  repositories: GitHubRepository[];
  featuredRepositories: GitHubRepository[];
  recentActivity: GitHubActivityItem[];
  status: "success" | "rate_limited" | "error" | "empty";
  errorMessage?: string;
}
