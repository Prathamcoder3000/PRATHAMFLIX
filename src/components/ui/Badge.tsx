import React from "react";
import { cn } from "@/lib/utils";
import type { BadgeVariant, BaseProps } from "@/types/ui";

export interface BadgeProps extends BaseProps, React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-neutral-800 text-neutral-200 border-white/10",
  accent:
    "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/20",
  outline:
    "bg-transparent text-neutral-300 border-white/20",
  neutral:
    "bg-neutral-900 text-neutral-400 border-white/5",
  success:
    "bg-emerald-950/60 text-emerald-400 border-emerald-500/20",
  warning:
    "bg-amber-950/60 text-amber-400 border-amber-500/20",
  danger:
    "bg-red-950/60 text-red-400 border-red-500/20",
  subtle:
    "bg-white/5 text-neutral-300 border-transparent",
};

const sizeStyles: Record<"sm" | "md", string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs sm:text-sm",
};

export function Badge({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full border transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
