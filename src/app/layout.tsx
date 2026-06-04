import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import PageTransition from "@/components/providers/page-transition";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A premium modern developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <React.Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </React.Suspense>
      </body>
    </html>
  );
}
