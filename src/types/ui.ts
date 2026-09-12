import type { ReactNode } from "react";

export type ComponentSize = "sm" | "md" | "lg";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "accent";

export type BadgeVariant = "default" | "accent" | "outline" | "success" | "warning" | "danger" | "neutral" | "subtle";

export type SurfaceElevation = "base" | "elevated" | "subtle" | "overlay" | "glass";

export type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}
