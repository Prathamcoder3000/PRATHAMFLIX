import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  className?: string;
}
