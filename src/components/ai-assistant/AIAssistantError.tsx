"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface AIAssistantErrorProps {
  error: string | null;
}

export const AIAssistantError: React.FC<AIAssistantErrorProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mx-4 my-2 px-3 py-2 rounded-lg bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
      <span>{error}</span>
    </div>
  );
};
