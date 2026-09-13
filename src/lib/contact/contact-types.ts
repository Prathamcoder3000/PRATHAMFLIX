export type ContactReason =
  | "job"
  | "internship"
  | "collaboration"
  | "project"
  | "hackathon"
  | "general";

export interface ContactReasonOption {
  value: ContactReason;
  label: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  reason: ContactReason;
  company?: string;
  message: string;
  website?: string; // Honeypot spam defense field
}

export type ContactApiStatus =
  | "delivered"
  | "unconfigured"
  | "validation_error"
  | "rate_limited"
  | "delivery_failed";

export interface ContactApiResponse {
  success: boolean;
  status: ContactApiStatus;
  message: string;
  errors?: Record<string, string>;
}

export interface EmailProviderResult {
  success: boolean;
  messageId?: string;
  error?: string;
  unconfigured?: boolean;
}

export interface IEmailProvider {
  name: string;
  isConfigured(): boolean;
  sendEmail(data: ContactFormData): Promise<EmailProviderResult>;
}
