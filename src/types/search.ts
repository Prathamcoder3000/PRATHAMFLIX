import type { ProjectDetailData } from "./project";

export interface SearchMatchReason {
  field: "title" | "technology" | "category" | "description" | "feature" | "highlight";
  label: string;
  matchedText?: string;
}

export interface SearchResult {
  project: ProjectDetailData;
  score: number;
  matchReasons: SearchMatchReason[];
}

export interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  selectNext: () => void;
  selectPrev: () => void;
  selectedResult?: SearchResult;
}
