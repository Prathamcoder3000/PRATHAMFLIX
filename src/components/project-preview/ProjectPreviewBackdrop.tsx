"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProjectPreviewBackdropProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export const ProjectPreviewBackdrop: React.FC<ProjectPreviewBackdropProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md ${className}`}
      aria-hidden="true"
    />
  );
};
