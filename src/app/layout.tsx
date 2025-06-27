import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Safe Space Campaign - Safe Sleep Education & Family Support in South Carolina | 53205",
  description: "Safe Space Campaign by 53205 - Supporting safe sleep education and justice-impacted families in South Carolina. Every baby deserves a safe start, every parent deserves a second chance.",
  keywords: "safe sleep, SIDS, SUID, infant safety, family support, South Carolina, trauma-informed parenting, justice-impacted families, 53205",
  authors: [{ name: "Myeshia Bates" }],
  openGraph: {
    title: "Safe Space Campaign | 53205",
    description: "Safe Space Campaign - Supporting safe sleep education and justice-impacted families in South Carolina",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
