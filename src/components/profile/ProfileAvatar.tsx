import React from "react";
import type { ProfileId } from "@/types/profile";
import { User, Briefcase, Sparkles, Terminal } from "lucide-react";

export interface ProfileAvatarProps {
  variant: ProfileId | "pratham" | "recruiter";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  variant,
  size = "md",
  className = "",
}) => {
  const isRecruiter = variant === "recruiter";

  // Sizing definitions
  const sizeClasses = {
    sm: "h-7 w-7 rounded-md text-xs",
    md: "h-11 w-11 rounded-lg text-sm",
    lg: "h-20 w-20 rounded-xl text-xl",
    xl: "h-28 w-28 sm:h-36 sm:w-36 rounded-2xl text-3xl",
  }[size];

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-9 w-9",
    xl: "h-14 w-14 sm:h-16 sm:w-16",
  }[size];

  if (isRecruiter) {
    return (
      <div
        className={`relative flex items-center justify-center font-bold font-mono select-none overflow-hidden bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#0f172a] text-white shadow-lg shadow-blue-900/30 border border-blue-400/30 ${sizeClasses} ${className}`}
        aria-hidden="true"
      >
        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
        
        {/* Monogram / Icon */}
        <div className="relative z-10 flex items-center justify-center">
          {size === "sm" || size === "md" ? (
            <Briefcase className={iconSizes} />
          ) : (
            <div className="flex flex-col items-center">
              <Briefcase className={iconSizes} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // PRATHAM Profile Avatar (Default / Full Portfolio)
  return (
    <div
      className={`relative flex items-center justify-center font-extrabold font-mono select-none overflow-hidden bg-gradient-to-br from-[#ff2e43] via-[#e50926] to-[#60020d] text-white shadow-lg shadow-red-950/40 border border-red-400/30 ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      {/* Subtle Geometric Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:8px_8px] opacity-15" />

      {/* Monogram / Icon */}
      <div className="relative z-10 flex items-center justify-center">
        {size === "sm" ? (
          <User className={iconSizes} />
        ) : size === "md" ? (
          <Terminal className={iconSizes} />
        ) : (
          <div className="flex flex-col items-center">
            <span className="tracking-tighter leading-none font-black text-white/95">
              P
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
