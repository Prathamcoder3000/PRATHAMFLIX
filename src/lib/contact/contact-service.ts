import type {
  ContactFormData,
  ContactApiResponse,
  IEmailProvider,
} from "./contact-types";
import { validateContactForm } from "./contact-validation";
import { defaultEmailProvider } from "./email-provider";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory rate limiting map: 5 requests per 10 minutes per identifier (IP)
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

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

export class ContactService {
  constructor(private provider: IEmailProvider = defaultEmailProvider) {}

  async processSubmission(
    data: Partial<ContactFormData>,
    clientIp: string = "anonymous"
  ): Promise<ContactApiResponse> {
    // 1. Check Rate Limit
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        status: "rate_limited",
        message:
          "Submission limit reached. Please wait a few minutes before sending another message or use direct contact channels.",
      };
    }

    // 2. Validate input and check honeypot
    const validation = validateContactForm(data);
    if (validation.isSpam) {
      // Silently reject spam submissions
      return {
        success: false,
        status: "validation_error",
        message: "Invalid submission detected.",
      };
    }

    if (!validation.isValid || !validation.sanitizedData) {
      return {
        success: false,
        status: "validation_error",
        message: "Please correct the highlighted errors in the form.",
        errors: validation.errors,
      };
    }

    // 3. Dispatch to Email Provider
    const result = await this.provider.sendEmail(validation.sanitizedData);

    if (result.unconfigured) {
      return {
        success: false,
        status: "unconfigured",
        message:
          "Contact delivery service is currently not configured with an active transactional provider. Please reach out directly via contact@prathamflix.dev or LinkedIn.",
      };
    }

    if (!result.success) {
      return {
        success: false,
        status: "delivery_failed",
        message:
          result.error ||
          "Unable to deliver your message at this time. Please use one of the direct contact channels.",
      };
    }

    return {
      success: true,
      status: "delivered",
      message:
        "Transmission received! Thank you for reaching out. Your message has been successfully delivered.",
    };
  }
}

export const contactService = new ContactService();
