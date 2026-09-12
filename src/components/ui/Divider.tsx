import React from "react";
import { cn } from "@/lib/utils";
import type { BaseProps } from "@/types/ui";

export interface DividerProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "subtle" | "solid" | "gradient";
  label?: string;
}

export function Divider({
  className,
  orientation = "horizontal",
  variant = "subtle",
  label,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block w-px self-stretch bg-white/10",
          variant === "subtle" && "bg-white/5",
          variant === "gradient" && "bg-gradient-to-b from-transparent via-white/15 to-transparent",
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex items-center w-full my-4", className)}
        {...props}
      >
        <div className="flex-grow border-t border-white/10" />
        <span className="px-3 text-xs uppercase tracking-wider text-neutral-500 font-medium select-none">
          {label}
        </span>
        <div className="flex-grow border-t border-white/10" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "w-full h-px my-4",
        variant === "subtle" && "bg-white/5",
        variant === "solid" && "bg-white/10",
        variant === "gradient" && "bg-gradient-to-r from-transparent via-white/15 to-transparent",
        className
      )}
      {...props}
    />
  );
}
