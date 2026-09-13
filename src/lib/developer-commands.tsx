import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/data/projects";
import type { TerminalCommandDef, TerminalContext } from "@/types/developer";

export const TERMINAL_COMMANDS: Record<string, TerminalCommandDef> = {
  help: {
    command: "help",
    description: "List all available terminal commands and utilities",
    aliases: ["?", "commands"],
    handler: () => (
      <div className="space-y-2 text-neutral-300 font-mono text-xs">
        <p className="text-neutral-400">PRATHAMFLIX Interactive Developer Terminal (v1.0.0)</p>
        <p className="text-neutral-500">Type any command below and press Enter:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1.5">
          <div><span className="text-[var(--accent)] font-bold">about</span> - Developer overview & philosophy</div>
          <div><span className="text-[var(--accent)] font-bold">projects</span> - View all engineering projects</div>
          <div><span className="text-[var(--accent)] font-bold">skills</span> - Categorized technology stack</div>
          <div><span className="text-[var(--accent)] font-bold">resume</span> - Interactive developer resume</div>
          <div><span className="text-[var(--accent)] font-bold">whoami</span> - Display active profile identity</div>
          <div><span className="text-[var(--accent)] font-bold">ask &lt;q&gt;</span> - Query PRATHAMFLIX AI Assistant</div>
          <div><span className="text-[var(--accent)] font-bold">status</span> - System engine health & state</div>
          <div><span className="text-[var(--accent)] font-bold">switch</span> - Switch profile (pratham/recruiter)</div>
          <div><span className="text-[var(--accent)] font-bold">contact</span> - Contact & profile channels</div>
          <div><span className="text-[var(--accent)] font-bold">theme</span> - Cinematic UI design tokens</div>
          <div><span className="text-[var(--accent)] font-bold">clear</span> - Clear terminal output (Ctrl+L)</div>
        </div>
      </div>
    ),
  },

  ask: {
    command: "ask",
    description: "Ask PRATHAMFLIX AI Assistant a question (e.g. 'ask what mobile apps exist')",
    aliases: ["ai", "assistant"],
    handler: (args) => {
      const query = args.join(" ").trim();
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("prathamflix_open_assistant", { detail: { query } })
        );
      }
      return (
        <div className="space-y-1 font-mono text-xs text-purple-300">
          <p className="font-bold flex items-center gap-1.5">
            <span className="text-[var(--accent)]">✦</span> Opening PRATHAMFLIX AI Assistant...
          </p>
          {query ? (
            <p className="text-neutral-400">
              Query dispatched: <span className="text-white">&quot;{query}&quot;</span>
            </p>
          ) : (
            <p className="text-neutral-500">
              Tip: You can pass a direct question, e.g. <code className="text-neutral-300">ask what does Pratham build</code>
            </p>
          )}
        </div>
      );
    },
  },

  about: {
    command: "about",
    description: "About the engineer & portfolio architecture",
    handler: () => (
      <div className="space-y-2 text-neutral-300 font-mono text-xs leading-relaxed">
        <p className="text-white font-bold text-sm">Pratham • Computer Engineering & Full-Stack Developer</p>
        <p className="text-neutral-400">
          Building high-performance software systems across Full-Stack Web, Mobile Applications,
          and AI/ML inference pipelines.
        </p>
        <p className="text-neutral-400">
          PRATHAMFLIX is engineered with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4,
          and Framer Motion—combining streaming-platform UX with rigorous software engineering.
        </p>
      </div>
    ),
  },

  projects: {
    command: "projects",
    description: "List portfolio engineering projects",
    aliases: ["list", "proj"],
    handler: () => {
      const projects = getAllProjects();
      return (
        <div className="space-y-2.5 font-mono text-xs">
          <p className="text-neutral-400 font-semibold">Canonical Engineering Projects ({projects.length}):</p>
          <div className="space-y-1.5 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
            {projects.map((p) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">[{p.id}]</span>
                  <Link href={p.href || `/projects/${p.id}`} className="text-white hover:underline font-medium">
                    {p.title}
                  </Link>
                  <span className="text-[10px] text-neutral-500 uppercase px-1.5 py-0.2 rounded bg-white/5">
                    {p.category}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 truncate max-w-xs">
                  {p.technologies?.slice(0, 3).join(", ")}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-neutral-500 pt-1">
            Tip: Click any project title above or navigate to <Link href="/projects" className="text-neutral-300 underline">/projects</Link>.
          </p>
        </div>
      );
    },
  },

  skills: {
    command: "skills",
    description: "List technical skills and categorized stacks",
    handler: () => (
      <div className="space-y-2 text-neutral-300 font-mono text-xs">
        <p className="text-neutral-400 font-semibold">Core Technical Competencies:</p>
        <div className="space-y-1.5 pt-1">
          <div>
            <span className="text-purple-400 font-bold">AI / Machine Learning:</span> PyTorch, CUDA, TensorRT, LangChain, LangGraph, ONNX, OpenCV
          </div>
          <div>
            <span className="text-blue-400 font-bold">Full-Stack & Systems:</span> Next.js, React 19, TypeScript, Node.js, Python, FastAPI, Docker
          </div>
          <div>
            <span className="text-pink-400 font-bold">Mobile Development:</span> React Native, Expo, SQLite, CRDT Sync, Offline-First Architecture
          </div>
          <div>
            <span className="text-amber-400 font-bold">Distributed & Storage:</span> PostgreSQL, Redis, Kafka, WebSockets, gRPC, Microservices
          </div>
        </div>
      </div>
    ),
  },

  whoami: {
    command: "whoami",
    description: "Display current active profile session",
    handler: (_args, context) => (
      <div className="space-y-1 font-mono text-xs">
        <p className="text-neutral-300">
          Active Profile: <span className="text-[var(--accent)] font-bold uppercase">{context.activeProfile}</span>
        </p>
        <p className="text-neutral-400 text-[11px]">
          {context.activeProfile === "recruiter"
            ? "Mode: Recruiter / Professional View (Focused evaluation layout)"
            : "Mode: PRATHAM / Full Portfolio View (Complete systems and experiments)"}
        </p>
      </div>
    ),
  },

  status: {
    command: "status",
    description: "System engine status and application telemetry",
    handler: (_args, context) => (
      <div className="space-y-1.5 font-mono text-xs text-neutral-300">
        <p className="text-emerald-400 font-bold flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Engine Status: Online & Interactive
        </p>
        <div className="pt-1 space-y-1 text-neutral-400 text-[11px]">
          <div>• Framework: Next.js 16.3.5 App Router (Turbopack)</div>
          <div>• Runtime: React 19 Client Hydration</div>
          <div>• Styling: Tailwind CSS v4 & Design Tokens</div>
          <div>• Motion: Framer Motion Animation Presets</div>
          <div>• Active Profile: {context.activeProfile.toUpperCase()}</div>
          <div>• Saved Projects in My List: {context.savedCount}</div>
        </div>
      </div>
    ),
  },

  resume: {
    command: "resume",
    description: "Interactive resume summary & navigation",
    handler: () => (
      <div className="space-y-1.5 font-mono text-xs text-neutral-300">
        <p className="text-white font-bold">Interactive Developer Resume</p>
        <p className="text-neutral-400">
          Navigate to the complete resume page:{" "}
          <Link href="/resume" className="text-[var(--accent)] underline font-bold">
            /resume
          </Link>
        </p>
      </div>
    ),
  },

  contact: {
    command: "contact",
    description: "Developer contact & profile links",
    handler: () => (
      <div className="space-y-1.5 font-mono text-xs text-neutral-300">
        <p className="text-neutral-400 font-semibold">Connect & Collaborate:</p>
        <div className="space-y-1 pt-1">
          <div>• GitHub: <span className="text-neutral-200">github.com/Prathamcoder3000</span></div>
          <div>• Portfolio: <span className="text-neutral-200">PRATHAMFLIX Engineering Experience</span></div>
          <div>• Inquiries: <span className="text-neutral-200">Available via recruiter & case study channels</span></div>
        </div>
      </div>
    ),
  },

  theme: {
    command: "theme",
    description: "Cinematic dark design system tokens",
    handler: () => (
      <div className="space-y-1 font-mono text-xs text-neutral-300">
        <p className="text-neutral-400 font-semibold">PRATHAMFLIX Design System Tokens:</p>
        <div className="space-y-0.5 text-neutral-400 text-[11px]">
          <div>• Background: <code className="text-neutral-200">#06070a</code> (Cinematic Deep Black)</div>
          <div>• Accent: <code className="text-red-400">#e50926</code> (Prathamflix Crimson)</div>
          <div>• Surface Elevation: Base, Raised, Overlay, Floating</div>
          <div>• Motion: GPU Spring Physics & Reduced Motion Fallbacks</div>
        </div>
      </div>
    ),
  },

  switch: {
    command: "switch",
    description: "Switch profile mode (e.g. 'switch recruiter' or 'switch pratham')",
    handler: (args, context) => {
      const target = args[0]?.toLowerCase();
      if (target === "recruiter" || target === "pratham") {
        context.switchProfile?.(target);
        return (
          <p className="font-mono text-xs text-emerald-400">
            Switched profile to: <span className="font-bold uppercase">{target}</span>
          </p>
        );
      }
      return (
        <p className="font-mono text-xs text-amber-400">
          Usage: <code className="font-bold">switch recruiter</code> or <code className="font-bold">switch pratham</code>
        </p>
      );
    },
  },

  clear: {
    command: "clear",
    description: "Clear terminal output history",
    aliases: ["cls"],
    handler: (_args, context) => {
      context.clearTerminal();
      return "";
    },
  },

  sudo: {
    command: "sudo",
    description: "Elevated administrator privileges",
    handler: () => (
      <p className="font-mono text-xs text-amber-400">
        Nice try! Access granted: You already have maximum developer privileges in PRATHAMFLIX.
      </p>
    ),
  },

  easteregg: {
    command: "easteregg",
    description: "A secret message from the engineer",
    aliases: ["matrix", "secret"],
    handler: () => (
      <div className="space-y-1 font-mono text-xs text-purple-300">
        <p className="font-bold">✨ You discovered an easter egg!</p>
        <p className="text-neutral-400 text-[11px]">
          &quot;Any sufficiently advanced technology is indistinguishable from magic.&quot; — Arthur C. Clarke
        </p>
      </div>
    ),
  },
};

/**
 * Parses and executes a terminal command line
 */
export function executeTerminalCommand(
  rawInput: string,
  context: TerminalContext
): { command: string; output: React.ReactNode | string } {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { command: "", output: "" };
  }

  const parts = trimmed.split(/\s+/);
  const cmdKey = parts[0].toLowerCase();
  const args = parts.slice(1);

  // Find matching command by name or alias
  const commandDef =
    TERMINAL_COMMANDS[cmdKey] ||
    Object.values(TERMINAL_COMMANDS).find((c) => c.aliases?.includes(cmdKey));

  if (!commandDef) {
    return {
      command: trimmed,
      output: (
        <div className="font-mono text-xs text-rose-400">
          Command not found: <span className="font-bold">&quot;{parts[0]}&quot;</span>. Type <span className="text-white font-bold">&quot;help&quot;</span> for a list of valid commands.
        </div>
      ),
    };
  }

  const result = commandDef.handler(args, context);
  return {
    command: trimmed,
    output: result,
  };
}

/**
 * Autocompletes a partial command string
 */
export function autocompleteCommand(input: string): string | null {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return null;

  const allCmds = Object.keys(TERMINAL_COMMANDS);
  const match = allCmds.find((c) => c.startsWith(trimmed));
  return match || null;
}
