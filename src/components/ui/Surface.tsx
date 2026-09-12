import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { BaseProps, SurfaceElevation } from "@/types/ui";

export interface SurfaceProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  elevation?: SurfaceElevation;
  isInteractive?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const elevationStyles: Record<SurfaceElevation, string> = {
  base: "bg-neutral-950 border border-white/5",
  subtle: "bg-neutral-900/60 border border-white/8",
  elevated: "bg-neutral-900/90 border border-white/10 shadow-lg shadow-black/40",
  overlay: "bg-neutral-900/95 backdrop-blur-md border border-white/15 shadow-xl shadow-black/60",
  glass: "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20",
};

const paddingStyles = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
  xl: "p-9",
};

const radiusStyles = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  "2xl": "rounded-3xl",
  full: "rounded-full",
};

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      children,
      className,
      elevation = "base",
      isInteractive = false,
      padding = "md",
      radius = "lg",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-200",
          elevationStyles[elevation],
          paddingStyles[padding],
          radiusStyles[radius],
          isInteractive &&
            "cursor-pointer hover:border-white/20 hover:bg-neutral-800/80 hover:shadow-xl hover:shadow-black/50 active:scale-[0.99]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Surface.displayName = "Surface";
