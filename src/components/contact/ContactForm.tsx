"use client";

import React, { useState } from "react";
import { Surface } from "@/components/ui/Surface";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading3, Paragraph } from "@/components/ui/Typography";
import { ContactSuccess } from "./ContactSuccess";
import {
  CONTACT_REASONS,
  validateContactForm,
  isValidReason,
} from "@/lib/contact/contact-validation";
import type {
  ContactFormData,
  ContactReason,
  ContactApiResponse,
} from "@/lib/contact/contact-types";
import {
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

interface ContactFormProps {
  initialReason?: string;
  isRecruiter?: boolean;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialReason,
  isRecruiter = false,
  className = "",
}) => {
  // Determine default reason based on initial query or profile
  const defaultReason: ContactReason =
    initialReason && isValidReason(initialReason)
      ? initialReason
      : isRecruiter
      ? "job"
      : "general";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    reason: defaultReason,
    company: "",
    message: "",
    website: "", // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<ContactApiResponse | null>(null);
  const [isDelivered, setIsDelivered] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (apiResponse) {
      setApiResponse(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation check
    const validation = validateContactForm(formData);
    if (validation.isSpam) {
      setErrors({ form: "Submission flagged as spam." });
      return;
    }

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setApiResponse(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();
      setApiResponse(data);

      if (data.success && data.status === "delivered") {
        setIsDelivered(true);
        // Only clear the form upon genuine verified delivery
        setFormData({
          name: "",
          email: "",
          reason: defaultReason,
          company: "",
          message: "",
          website: "",
        });
      } else if (data.errors) {
        setErrors(data.errors);
      }
    } catch {
      setApiResponse({
        success: false,
        status: "delivery_failed",
        message:
          "Network error occurred while submitting. Please try again or use direct contact channels.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsDelivered(false);
    setApiResponse(null);
    setErrors({});
  };

  if (isDelivered) {
    return <ContactSuccess onReset={handleReset} />;
  }

  return (
    <Surface
      elevation="subtle"
      padding="lg"
      className={`relative rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl ${className}`}
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Form Header */}
        <div className="space-y-1.5 pb-2 border-b border-white/5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
            Interactive Transmission
          </span>
          <Heading3 className="text-xl sm:text-2xl font-bold text-white">
            Send a Direct Message
          </Heading3>
          <Paragraph className="text-xs sm:text-sm text-neutral-400">
            Fill out the parameters below to initiate contact. All fields marked with * are required.
          </Paragraph>
        </div>

        {/* Global API Feedback Banner if error or unconfigured */}
        {apiResponse && !apiResponse.success && (
          <div
            role="alert"
            aria-live="polite"
            className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 border ${
              apiResponse.status === "unconfigured"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                : apiResponse.status === "rate_limited"
                ? "bg-blue-500/10 border-blue-500/30 text-blue-200"
                : "bg-red-500/10 border-red-500/30 text-red-200"
            }`}
          >
            {apiResponse.status === "unconfigured" ? (
              <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            ) : apiResponse.status === "rate_limited" ? (
              <AlertTriangle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <div className="font-semibold">
                {apiResponse.status === "unconfigured"
                  ? "Direct Email Preferred"
                  : apiResponse.status === "rate_limited"
                  ? "Submission Throttled"
                  : "Transmission Failed"}
              </div>
              <div className="text-xs leading-relaxed opacity-90">
                {apiResponse.message}
              </div>
            </div>
          </div>
        )}

        {/* Invisible Honeypot Field for Spam Defense */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website-input">Leave this field blank</label>
          <input
            id="contact-website-input"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* 2-Column Grid: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300"
            >
              Your Name <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Mercer"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border text-base sm:text-sm text-white placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-sans ${
                errors.name ? "border-red-500/80" : "border-white/10"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300"
            >
              Email Address <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border text-base sm:text-sm text-white placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-sans ${
                errors.email ? "border-red-500/80" : "border-white/10"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* 2-Column Grid: Inquiry Reason & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Reason Selector */}
          <div className="space-y-2">
            <label
              htmlFor="contact-reason"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300"
            >
              Reason for Inquiry <span className="text-[var(--accent)]">*</span>
            </label>
            <select
              id="contact-reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.reason)}
              aria-describedby={errors.reason ? "reason-error" : undefined}
              className={`w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border text-base sm:text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-sans cursor-pointer ${
                errors.reason ? "border-red-500/80" : "border-white/10"
              }`}
            >
              {CONTACT_REASONS.map((r) => (
				<option key={r.value} value={r.value} className="bg-neutral-900 text-white">
                  {r.label}
                </option>
              ))}
            </select>
            {errors.reason && (
              <p id="reason-error" className="text-xs text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.reason}</span>
              </p>
            )}
          </div>

          {/* Company / Organization (Optional) */}
          <div className="space-y-2">
            <label
              htmlFor="contact-company"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300"
            >
              Company / Organization <span className="text-neutral-500 text-[10px] lowercase">(optional)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. TechCorp / University"
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-base sm:text-sm text-white placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] font-sans"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-300"
            >
              Message Content <span className="text-[var(--accent)]">*</span>
            </label>
            <span className="text-[11px] font-mono text-neutral-500">
              {formData.message.length} / 3000 chars
            </span>
          </div>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your opportunity, architectural question, or collaboration proposal..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-base sm:text-sm text-white placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-y font-sans leading-relaxed ${
              errors.message ? "border-red-500/80" : "border-white/10"
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-neutral-500 order-2 sm:order-1 text-center sm:text-left">
            Encrypted client-server transmission via Next.js
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            leftIcon={
              isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )
            }
            className="w-full sm:w-auto order-1 sm:order-2"
          >
            {isSubmitting ? "Transmitting..." : "Transmit Message"}
          </Button>
        </div>
      </form>
    </Surface>
  );
};
