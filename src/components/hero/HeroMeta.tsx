import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface HeroMetaProps {
  className?: string;
}

export function HeroMeta({ className }: HeroMetaProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2 sm:gap-2.5", className)}
      aria-label="Developer Domain Specializations"
    >
      <Badge variant="accent" size="sm" className="font-semibold tracking-wide">
        Computer Engineering
      </Badge>
      <Badge variant="subtle" size="sm">
        Full-Stack
      </Badge>
      <Badge variant="subtle" size="sm">
        Mobile
      </Badge>
      <Badge variant="subtle" size="sm">
        AI / ML
      </Badge>
      <Badge variant="subtle" size="sm">
        IoT & Systems
      </Badge>
    </div>
  );
}
