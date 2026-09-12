import React from "react";
import { cn } from "@/lib/utils";
import type { BaseProps } from "@/types/ui";

export function Display({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-50 leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function Heading1({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function Heading2({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function Heading3({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-semibold tracking-tight text-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Heading4({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-lg font-medium tracking-tight text-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function Paragraph({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Muted({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-sm text-neutral-400 leading-normal",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Label({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-wider text-neutral-400",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function CodeText({
  children,
  className,
  ...props
}: BaseProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "rounded bg-neutral-900 border border-white/10 px-1.5 py-0.5 font-mono text-xs text-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
