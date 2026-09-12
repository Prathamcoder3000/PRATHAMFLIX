import {
  Home,
  FolderGit2,
  Cpu,
  Trophy,
  FileText,
  Bookmark,
} from "lucide-react";
import type { NavItem } from "@/types/navigation";

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderGit2,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: Cpu,
  },
  {
    label: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    label: "My List",
    href: "/my-list",
    icon: Bookmark,
  },
];
