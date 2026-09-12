import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ComponentSize } from "@/types/ui";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: ButtonVariant;
  size?: ComponentSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-neutral-950 hover:bg-neutral-200 active:bg-neutral-300 shadow-sm border border-transparent",
  accent:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-active)] shadow-sm border border-transparent",
  secondary:
    "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 active:bg-neutral-600 border border-white/10",
  outline:
    "bg-transparent text-neutral-200 hover:bg-white/5 active:bg-white/10 border border-white/20 hover:border-white/40",
  ghost:
    "bg-transparent text-neutral-300 hover:bg-white/5 active:bg-white/10 hover:text-white border border-transparent",
  danger:
    "bg-red-600/90 text-white hover:bg-red-600 active:bg-red-700 border border-transparent",
};

const sizeStyles: Record<ComponentSize, string> = {
  sm: "h-8 w-8 rounded-md text-sm",
  md: "h-10 w-10 rounded-lg text-base",
  lg: "h-12 w-12 rounded-lg text-lg",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      className,
      variant = "ghost",
      size = "md",
      isLoading = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading}
        className={cn(
          "inline-flex items-center justify-center transition-colors select-none shrink-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
