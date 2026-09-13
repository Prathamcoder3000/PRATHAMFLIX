import type { ProjectDetailData } from "./project";

export interface MyListState {
  savedIds: string[];
  savedProjects: ProjectDetailData[];
  isHydrated: boolean;
  isSaved: (projectId: string) => boolean;
  addToMyList: (projectId: string) => void;
  removeFromMyList: (projectId: string) => void;
  toggleMyList: (projectId: string) => void;
  clearMyList: () => void;
}

export type MyListButtonVariant = "default" | "compact" | "icon" | "outline";
