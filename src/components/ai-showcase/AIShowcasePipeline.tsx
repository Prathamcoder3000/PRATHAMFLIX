import React from "react";
import type { AIPipelineNode } from "@/types";
import { AIShowcasePipelineNode } from "./AIShowcasePipelineNode";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface AIShowcasePipelineProps {
  pipeline?: AIPipelineNode[];
  className?: string;
}

export const AIShowcasePipeline: React.FC<AIShowcasePipelineProps> = ({
  pipeline,
  className = "",
}) => {
  if (!pipeline || pipeline.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          End-to-End Inference Pipeline
        </h3>
        <span className="font-mono text-[11px] text-neutral-500">
          {pipeline.length} Sequential Stages
        </span>
      </div>

      {/* Adaptive Pipeline Layout: Vertical on mobile/tablet, Grid/Flow on desktop, NO horizontal scrollbars */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3 p-4 sm:p-6 rounded-2xl bg-neutral-950/60 border border-white/8 relative">
        {pipeline.map((node, index) => {
          const isLast = index === pipeline.length - 1;

          return (
            <React.Fragment key={node.step || index}>
              {/* Individual Stage Node */}
              <AIShowcasePipelineNode
                node={node}
                index={index}
                totalSteps={pipeline.length}
              />

              {/* Dynamic Connector Arrow */}
              {!isLast && (
                <div
                  className="flex items-center justify-center shrink-0 py-1 lg:py-0 lg:px-1 text-neutral-600"
                  aria-hidden="true"
                >
                  <ArrowRight className="hidden lg:block h-5 w-5 text-neutral-500" />
                  <ArrowDown className="block lg:hidden h-5 w-5 text-neutral-500" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Accessible Text Description for Screen Readers */}
      <div className="sr-only">
        <p>
          AI inference pipeline stages:{" "}
          {pipeline
            .map(
              (n, i) =>
                `Stage ${i + 1}: ${n.title} (${n.type} using ${n.tech || "custom logic"}) - ${n.description}`
            )
            .join(" flows into ")}
        </p>
      </div>
    </div>
  );
};
