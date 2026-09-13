"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, User, ExternalLink, ArrowRight } from "lucide-react";
import type { AssistantMessage as MessageType, AssistantAction } from "@/types/ai-assistant";

interface AIAssistantMessageProps {
  message: MessageType;
  onNavigate?: () => void;
}

/**
 * Safe markdown parser for restricted subset: bold, paragraphs, lists, links.
 * Avoids dangerouslySetInnerHTML to prevent XSS.
 */
function renderSafeMarkdown(content: string) {
  const lines = content.split("\n");

  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={lineIdx} className="h-2" />;
    }

    const isBullet = trimmed.startsWith("•") || trimmed.startsWith("- ") || trimmed.startsWith("* ");
    const textContent = isBullet ? trimmed.replace(/^[•\-\*]\s*/, "") : trimmed;

    // Parse bold text: **text**
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(textContent)) !== null) {
      if (match.index > lastIndex) {
        parts.push(textContent.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={`b-${match.index}`} className="font-semibold text-zinc-100">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < textContent.length) {
      parts.push(textContent.slice(lastIndex));
    }

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 my-0.5 ml-1">
          <span className="text-red-500 font-bold select-none text-xs leading-5">•</span>
          <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{parts}</span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-1">
        {parts}
      </p>
    );
  });
}

export const AIAssistantMessage: React.FC<AIAssistantMessageProps> = ({
  message,
  onNavigate,
}) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-start gap-3 py-2 px-4 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 mt-0.5 ${
          isUser
            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
            : "bg-red-600/20 text-red-500 border border-red-500/30"
        }`}
      >
        {isUser ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
          isUser
            ? "bg-red-600/90 text-white rounded-tr-sm border border-red-500/50"
            : "bg-zinc-900 text-zinc-200 rounded-tl-sm border border-zinc-800"
        }`}
      >
        {/* Content */}
        <div className="space-y-0.5">
          {isUser ? (
            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          ) : (
            renderSafeMarkdown(message.content)
          )}
        </div>

        {/* Action Pills */}
        {message.actions && message.actions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-2.5 border-t border-zinc-800/80">
            {message.actions.map((action, idx) => {
              if (action.isExternal) {
                return (
                  <a
                    key={idx}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors cursor-pointer"
                  >
                    <span>{action.label}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                );
              }

              return (
                <Link
                  key={idx}
                  href={action.href}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-red-600/20 hover:bg-red-600/40 text-red-300 hover:text-white border border-red-500/30 transition-colors cursor-pointer"
                >
                  <span>{action.label}</span>
                  <ArrowRight className="w-3 h-3 text-red-400" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
