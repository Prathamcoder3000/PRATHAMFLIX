export type AssistantRole = "user" | "assistant" | "system";

export interface AssistantAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  isExternal?: boolean;
}

export interface AssistantMessage {
  id: string;
  role: AssistantRole;
  content: string;
  timestamp: number | string;
  actions?: AssistantAction[];
  isUnconfigured?: boolean;
}

export interface AssistantRequestBody {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
  profileMode?: "pratham" | "recruiter";
}

export interface AssistantResponseBody {
  success: boolean;
  message: AssistantMessage;
  isConfigured: boolean;
  error?: string;
}
