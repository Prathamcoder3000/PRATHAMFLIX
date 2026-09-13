import type { Metadata, Viewport } from "next";
import { SITE_URL, SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.title,
    template: "%s — PRATHAMFLIX",
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.githubUrl }],
  creator: SITE_CONFIG.author,
  keywords: [
    "developer portfolio",
    "software engineer",
    "Next.js",
    "React",
    "TypeScript",
    "full-stack",
    "mobile development",
    "AI/ML",
    "streaming UX",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_CONFIG.name,
      "description": SITE_CONFIG.description,
      "inLanguage": "en-US",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": SITE_CONFIG.author,
      "url": SITE_URL,
      "sameAs": [SITE_CONFIG.githubUrl],
      "jobTitle": "Full-Stack Developer & Computer Engineering Student",
      "knowsAbout": [
        "Full-Stack Development",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
