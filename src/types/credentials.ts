export type CertificationCategory =
  | "Programming"
  | "AI & Machine Learning"
  | "Cloud & Systems"
  | "Web & Mobile Development"
  | "Hardware & IoT";

export type CredentialVerificationStatus =
  | "verified"
  | "structural_placeholder"
  | "in_progress";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: CertificationCategory;
  skills: string[];
  description?: string;
  verificationStatus: CredentialVerificationStatus;
  isFeatured?: boolean;
}
