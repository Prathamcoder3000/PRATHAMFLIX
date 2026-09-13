import {
  Home,
  FolderGit2,
  Cpu,
  Trophy,
  FileText,
  Bookmark,
  User,
  Mail,
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
    label: "About",
    href: "/about",
    icon: User,
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
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
  {
    label: "My List",
    href: "/my-list",
    icon: Bookmark,
  },
];

export function getNavigationForProfile(profileId: string = "pratham"): NavItem[] {
  if (profileId === "recruiter") {
    // Recruiter mode: focused professional navigation
    return PRIMARY_NAV_ITEMS.filter((item) => item.label !== "My List");
  }
  return PRIMARY_NAV_ITEMS;
}
