import React from "react";
import { cn } from "@/lib/utils";
import type { BaseProps, ContainerMaxWidth } from "@/types/ui";

export interface ContainerProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerMaxWidth;
  clean?: boolean; // If true, removes horizontal padding
}

const maxWidthMap: Record<ContainerMaxWidth, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  maxWidth = "2xl",
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        !clean && "px-4 sm:px-6 lg:px-8",
        maxWidthMap[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
