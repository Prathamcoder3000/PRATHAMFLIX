import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRATHAMFLIX",
  description: "PRATHAMFLIX — Developer Portfolio Platform Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
