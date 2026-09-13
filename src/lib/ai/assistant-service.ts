import type {
  AssistantMessage,
  AssistantAction,
  AssistantResponseBody,
} from "@/types/ai-assistant";
import { buildPortfolioContext } from "./portfolio-context";
import { buildSystemPrompt } from "./assistant-prompt";
import { defaultAIProvider, type IAIProvider } from "./ai-provider";
import { getAllProjects, getMobileProjects, getAIProjects } from "@/data/projects";
import { getPortfolioIdentity, getCapabilities, getEducation } from "@/data/portfolio";
import { getCertifications } from "@/data/credentials";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 15;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

export class AssistantService {
  constructor(private provider: IAIProvider = defaultAIProvider) {}

  async processChat(
    messages: Array<{ role: "user" | "assistant"; content: string }>,
    profileMode: "pratham" | "recruiter" = "pratham",
    clientIp: string = "anonymous"
  ): Promise<AssistantResponseBody> {
    // 1. Rate Limiting Check
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        isConfigured: this.provider.isConfigured(),
        message: {
          id: `msg-${Date.now()}`,
          role: "assistant",
          content:
            "Request threshold reached. Please wait a few moments before submitting additional queries, or browse the portfolio sections directly.",
          timestamp: Date.now(),
          actions: [
            { label: "Explore Projects", href: "/projects" },
            { label: "View Resume", href: "/resume" },
          ],
        },
        error: "Rate limit exceeded.",
      };
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const trimmedInput = lastUserMessage.trim().toLowerCase();

    // 2. If AI Provider is configured with a real API key, call LLM
    if (this.provider.isConfigured()) {
      const portfolioContext = buildPortfolioContext(profileMode);
      const systemPrompt = buildSystemPrompt(portfolioContext);

      const result = await this.provider.generateResponse(messages, systemPrompt);

      if (result.error) {
        return {
          success: false,
          isConfigured: true,
          message: {
            id: `msg-${Date.now()}`,
            role: "assistant",
            content:
              "I encountered an issue connecting to the AI model. You can continue exploring Pratham's engineering systems directly:",
            timestamp: Date.now(),
            actions: [
              { label: "View Projects", href: "/projects" },
              { label: "Open Resume", href: "/resume" },
              { label: "Contact Pratham", href: "/contact" },
            ],
          },
          error: result.error,
        };
      }

      // Extract route actions mentioned in model text
      const actions = this.extractActionsFromText(result.text);

      return {
        success: true,
        isConfigured: true,
        message: {
          id: `msg-${Date.now()}`,
          role: "assistant",
          content: result.text,
          timestamp: Date.now(),
          actions: actions.length > 0 ? actions : undefined,
        },
      };
    }

    // 3. Fallback when Live AI Provider is not configured (Default Development Mode)
    // Deterministic portfolio grounding engine responding accurately without pretending to be an LLM
    const fallbackResponse = this.generateDeterministicResponse(trimmedInput, profileMode);

    return {
      success: true,
      isConfigured: false,
      message: {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: fallbackResponse.content,
        timestamp: Date.now(),
        actions: fallbackResponse.actions,
        isUnconfigured: true,
      },
    };
  }

  private extractActionsFromText(text: string): AssistantAction[] {
    const actions: AssistantAction[] = [];
    const lower = text.toLowerCase();

    if (lower.includes("/projects")) {
      actions.push({ label: "Explore Projects", href: "/projects", variant: "primary" });
    }
    if (lower.includes("/resume")) {
      actions.push({ label: "View Resume", href: "/resume", variant: "outline" });
    }
    if (lower.includes("/github")) {
      actions.push({ label: "GitHub Repositories", href: "/github", variant: "outline" });
    }
    if (lower.includes("/contact")) {
      actions.push({ label: "Contact Pratham", href: "/contact", variant: "secondary" });
    }

    return actions.slice(0, 3);
  }

  private generateDeterministicResponse(
    query: string,
    profileMode: "pratham" | "recruiter"
  ): { content: string; actions: AssistantAction[] } {
    const identity = getPortfolioIdentity();
    const allProjects = getAllProjects();
    const mobileProjects = getMobileProjects();
    const aiProjects = getAIProjects();
    const capabilities = getCapabilities();
    const education = getEducation()[0];
    const certs = getCertifications();

    // 1. Mobile query
    if (query.includes("mobile") || query.includes("flutter") || query.includes("react native") || query.includes("app")) {
      const names = mobileProjects.map((p) => `• **${p.title}**: ${p.shortDescription}`).join("\n");
      return {
        content: `Pratham engineers high-performance cross-platform mobile clients with offline-first synchronization and biometric security:\n\n${names}`,
        actions: [
          { label: "View Mobile Projects", href: "/projects?category=mobile", variant: "primary" },
          { label: "Explore All Projects", href: "/projects", variant: "outline" },
        ],
      };
    }

    // 2. AI / ML query
    if (query.includes("ai") || query.includes("ml") || query.includes("machine learning") || query.includes("neural") || query.includes("pytorch")) {
      const names = aiProjects.map((p) => `• **${p.title}**: ${p.shortDescription}`).join("\n");
      return {
        content: `Pratham's AI/ML engineering spans neural inference acceleration, autonomous multi-agent DAG execution, and computer vision defect detection:\n\n${names}`,
        actions: [
          { label: "View AI Projects", href: "/projects?category=ai", variant: "primary" },
          { label: "Explore DAG Orchestrator", href: "/projects/ai-agent-dag", variant: "outline" },
        ],
      };
    }

    // 3. Projects in general
    if (query.includes("project") || query.includes("strongest") || query.includes("work") || query.includes("build")) {
      const topProjects = allProjects.slice(0, 3).map((p) => `• **${p.title}** (${p.category}): ${p.shortDescription}`).join("\n");
      return {
        content: `Pratham has architected ${allProjects.length} canonical engineering systems across Full-Stack, Mobile, and AI:\n\n${topProjects}\n\nYou can explore deep architectural case studies for every project.`,
        actions: [
          { label: "Explore All Projects", href: "/projects", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // 4. Skills & Technologies
    if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language") || query.includes("framework")) {
      const caps = capabilities.map((c) => `• **${c.title}**: ${c.technologies.join(", ")}`).join("\n");
      return {
        content: `Pratham's technical competencies are structured across core engineering domains:\n\n${caps}`,
        actions: [
          { label: "View Skills & Stacks", href: "/skills", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // 5. Education
    if (query.includes("education") || query.includes("degree") || query.includes("university") || query.includes("study") || query.includes("academic")) {
      return {
        content: `**Academic Foundation:**\n\n• **Degree**: ${education?.degree} in ${education?.field}\n• **Institution**: ${education?.institution}\n• **Period**: ${education?.period}\n• **Key Coursework**: ${education?.highlights.join(", ")}`,
        actions: [
          { label: "About & Career", href: "/about", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // 6. Certifications
    if (query.includes("cert") || query.includes("credential")) {
      const certList = certs.slice(0, 3).map((c) => `• **${c.title}** (${c.issuer}) — ${c.category}`).join("\n");
      return {
        content: `Pratham holds verified coursework credentials in deep learning, distributed cloud systems, and cross-platform mobile development:\n\n${certList}`,
        actions: [
          { label: "Certifications Library", href: "/certifications", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // 7. Contact
    if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("reach") || query.includes("message")) {
      return {
        content: `You can reach Pratham directly through several verified channels:\n\n• **Direct Email**: contact@prathamflix.dev\n• **Interactive Form**: /contact\n• **LinkedIn**: linkedin.com\n• **GitHub**: github.com/Prathamcoder3000`,
        actions: [
          { label: "Go to Contact Page", href: "/contact", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // 8. GitHub
    if (query.includes("github") || query.includes("repo") || query.includes("open source")) {
      return {
        content: `Pratham's open-source repositories and engineering activity are synchronized via GitHub (@Prathamcoder3000). You can explore public codebases and repositories directly:`,
        actions: [
          { label: "Explore GitHub Repositories", href: "/github", variant: "primary" },
          { label: "Open GitHub Profile", href: "https://github.com/Prathamcoder3000", variant: "outline", isExternal: true },
        ],
      };
    }

    // 9. Hallucination Guard for unlisted questions (salary, company, fake awards)
    if (query.includes("salary") || query.includes("employer") || query.includes("compensation") || query.includes("award") || query.includes("past job")) {
      return {
        content: `I don't have verified information regarding that query in the portfolio knowledge base. Real verified career achievements and milestones are detailed in the Projects and Resume sections.`,
        actions: [
          { label: "View Projects", href: "/projects", variant: "primary" },
          { label: "View Resume", href: "/resume", variant: "outline" },
        ],
      };
    }

    // Default overview response
    return {
      content: `**Pratham** is a **Computer Engineering Student**, **Full-Stack Developer**, **Mobile Application Developer**, and **AI/ML Enthusiast**.\n\nHe specializes in building scalable distributed systems, cross-platform mobile applications with offline sync, and intelligent agent DAG pipelines.`,
      actions: [
        { label: "Explore Projects", href: "/projects", variant: "primary" },
        { label: "View Resume", href: "/resume", variant: "outline" },
        { label: "Contact Pratham", href: "/contact", variant: "secondary" },
      ],
    };
  }
}

export const assistantService = new AssistantService();

export async function processAssistantQuery(
  body: {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    profileMode?: "pratham" | "recruiter";
  },
  clientIp?: string
): Promise<AssistantResponseBody> {
  return assistantService.processChat(
    body.messages,
    body.profileMode || "pratham",
    clientIp || "anonymous"
  );
}
