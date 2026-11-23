import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Barguna",
  description: "District information and public services platform for Barguna, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-page font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
