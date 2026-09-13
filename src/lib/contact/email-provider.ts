import type {
  ContactFormData,
  IEmailProvider,
  EmailProviderResult,
} from "./contact-types";

export class ResendEmailProvider implements IEmailProvider {
  name = "Resend";

  private apiKey = process.env.RESEND_API_KEY;
  private toEmail = process.env.CONTACT_EMAIL_TO || "contact@prathamflix.dev";
  private fromEmail = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

  isConfigured(): boolean {
    return Boolean(this.apiKey && this.apiKey.trim().length > 0);
  }

  async sendEmail(data: ContactFormData): Promise<EmailProviderResult> {
    if (!this.isConfigured()) {
      return {
        success: false,
        unconfigured: true,
        error:
          "Email delivery service is not configured with an active transactional provider. Please reach out via direct channels.",
      };
    }

    try {
      const subjectMap: Record<string, string> = {
        job: "Job Opportunity",
        internship: "Internship Opportunity",
        collaboration: "Collaboration Request",
        project: "Project Architecture Discussion",
        hackathon: "Hackathon / Technical Work",
        general: "General Inquiry",
      };

      const safeSubject = `PRATHAMFLIX Contact — ${subjectMap[data.reason] || "Portfolio Inquiry"}: ${data.name}`;

      const textBody = [
        `PRATHAMFLIX PORTFOLIO TRANSMISSION`,
        `==================================`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Reason: ${subjectMap[data.reason] || data.reason}`,
        data.company ? `Company / Org: ${data.company}` : null,
        `Timestamp: ${new Date().toISOString()}`,
        ``,
        `Message:`,
        `----------------------------------`,
        data.message,
        `----------------------------------`,
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `PRATHAMFLIX Portfolio <${this.fromEmail}>`,
          to: [this.toEmail],
          reply_to: data.email,
          subject: safeSubject,
          text: textBody,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        return {
          success: false,
          error:
            typeof errJson === "object" && errJson && "message" in errJson
              ? String(errJson.message)
              : "Failed to transmit message through email provider.",
        };
      }

      const resData = await response.json();
      return {
        success: true,
        messageId: resData?.id,
      };
    } catch {
      return {
        success: false,
        error: "Network error during email delivery.",
      };
    }
  }
}

export const defaultEmailProvider = new ResendEmailProvider();
