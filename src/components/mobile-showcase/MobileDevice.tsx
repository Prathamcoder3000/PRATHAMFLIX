import React from "react";
import { MobileDeviceScreen } from "./MobileDeviceScreen";
import type { ProjectDetailData } from "@/types";

export interface MobileDeviceProps {
  project: ProjectDetailData;
  className?: string;
}

export const MobileDevice: React.FC<MobileDeviceProps> = ({
  project,
  className = "",
}) => {
  const accentColor = project.accent || "var(--accent)";

  return (
    <div className={`relative flex items-center justify-center select-none group/device ${className}`}>
      {/* 1. Ambient Lighting Glow Behind Device */}
      <div
        className="absolute w-72 h-96 rounded-full blur-3xl opacity-25 group-hover/device:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {/* 2. Side Buttons (Hardware Cues) */}
      {/* Volume Buttons (Left) */}
      <div className="absolute -left-[3px] top-28 w-[3px] h-9 rounded-l bg-neutral-700" aria-hidden="true" />
      <div className="absolute -left-[3px] top-40 w-[3px] h-9 rounded-l bg-neutral-700" aria-hidden="true" />
      {/* Power Button (Right) */}
      <div className="absolute -right-[3px] top-32 w-[3px] h-12 rounded-r bg-neutral-700" aria-hidden="true" />

      {/* 3. Physical Smartphone Outer Chassis */}
      <div
        className="relative z-10 w-[250px] xs:w-[270px] sm:w-[290px] md:w-[310px] aspect-[9/19.5] rounded-[42px] p-[8px] bg-gradient-to-b from-[#2a2e3d] via-[#1a1c26] to-[#12141c] border border-white/15 shadow-2xl shadow-black transition-transform duration-500 ease-out group-hover/device:-translate-y-1.5"
        style={{
          boxShadow: `0 25px 60px -15px rgba(0,0,0,0.9), 0 0 35px -10px ${accentColor}30`,
        }}
      >
        {/* Inner Screen Bezel & Dynamic Island / Camera Notch */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black border border-white/10 flex flex-col">
          {/* Top Pill / Speaker Punch-Hole */}
          <div
            className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black z-30 flex items-center justify-end px-2 border border-white/10 shadow-sm"
            aria-hidden="true"
          >
            {/* Camera Lens Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#11131c] border border-white/20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900/80" />
            </div>
          </div>

          {/* Device Screen UI Viewport */}
          <div className="relative w-full h-full">
            <MobileDeviceScreen project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};
