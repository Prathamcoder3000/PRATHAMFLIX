import type {
  ContactReason,
  ContactReasonOption,
  ContactFormData,
} from "./contact-types";

export const CONTACT_REASONS: ContactReasonOption[] = [
  {
    value: "job",
    label: "Job Opportunity",
    description: "Full-time software engineering roles and inquiries",
  },
  {
    value: "internship",
    label: "Internship Opportunity",
    description: "Engineering internships and co-op positions",
  },
  {
    value: "collaboration",
    label: "Collaboration / Open Source",
    description: "Technical partnerships, research, and open-source systems",
  },
  {
    value: "project",
    label: "Project Discussion",
    description: "In-depth questions about PRATHAMFLIX systems and architecture",
  },
  {
    value: "hackathon",
    label: "Hackathon / Technical Work",
    description: "Hackathon team invites and technical competitions",
  },
  {
    value: "general",
    label: "General Inquiry",
    description: "General engineering messages and networking",
  },
];

const VALID_REASONS = new Set<string>(CONTACT_REASONS.map((r) => r.value));

export function isValidReason(reason: string): reason is ContactReason {
  return VALID_REASONS.has(reason);
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
  isSpam?: boolean;
}

export function validateContactForm(
  data: Partial<ContactFormData>
): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check: If the hidden 'website' field is filled, flag as spam
  if (data.website && data.website.trim().length > 0) {
    return {
      isValid: false,
      isSpam: true,
      errors: { website: "Spam detection triggered." },
    };
  }

  // Name validation
  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  // Email validation
  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email) || email.length > 150) {
    errors.email = "Please enter a valid email address.";
  }

  // Reason validation
  const reason = data.reason as string;
  if (!reason || !isValidReason(reason)) {
    errors.reason = "Please select a valid inquiry reason.";
  }

  // Optional Company validation
  const company = typeof data.company === "string" ? data.company.trim() : undefined;
  if (company && company.length > 100) {
    errors.company = "Company name must be under 100 characters.";
  }

  // Message validation
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 3000) {
    errors.message = "Message must be under 3,000 characters.";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          name,
          email,
          reason: reason as ContactReason,
          company: company || undefined,
          message,
        }
      : undefined,
  };
}
