import type { ReactNode } from "react";

export interface TerminalHistoryItem {
  id: string;
  command: string;
  output: ReactNode | string;
  timestamp: number;
}

export interface TerminalCommandDef {
  command: string;
  description: string;
  aliases?: string[];
  handler: (args: string[], context: TerminalContext) => ReactNode | string;
}

export interface TerminalContext {
  activeProfile: string;
  savedCount: number;
  openProjects?: () => void;
  openResume?: () => void;
  openMyList?: () => void;
  switchProfile?: (id: "pratham" | "recruiter") => void;
  clearTerminal: () => void;
}
