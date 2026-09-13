import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Engineering Mindset",
  description:
    "Explore developer background, core capabilities, architecture philosophy, and career milestones.",
  openGraph: {
    title: "About & Engineering Mindset — PRATHAMFLIX",
    description:
      "Explore developer background, core capabilities, architecture philosophy, and career milestones.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
