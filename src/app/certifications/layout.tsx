import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Credentials",
  description:
    "Specialized coursework, verified technical certifications, and engineering credentials.",
  openGraph: {
    title: "Certifications & Credentials — PRATHAMFLIX",
    description:
      "Specialized coursework, verified technical certifications, and engineering credentials.",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
