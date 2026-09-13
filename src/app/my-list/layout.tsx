import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Saved Library",
  description: "Personal saved engineering systems, architectures, and project case studies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MyListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
