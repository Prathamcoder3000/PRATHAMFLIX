import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Transmission",
  description:
    "Direct communication channel for engineering opportunities, technical collaborations, and inquiries.",
  openGraph: {
    title: "Contact & Transmission — PRATHAMFLIX",
    description:
      "Direct communication channel for engineering opportunities, technical collaborations, and inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
