import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive & Printable Resume",
  description:
    "Engineering background, core technical stacks, education, and development achievements formatted for evaluation.",
  openGraph: {
    title: "Interactive & Printable Resume — PRATHAMFLIX",
    description:
      "Engineering background, core technical stacks, education, and development achievements formatted for evaluation.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
