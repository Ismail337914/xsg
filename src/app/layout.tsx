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
  title: {
    default: "XSG — Dedicated Engineering & QA Teams",
    template: "%s | XSG",
  },
  description:
    "Dedicated engineering and QA teams for mission-critical software. Hourly collaboration with experienced engineers and QA specialists to build, test, and scale reliable digital products.",
  applicationName: "XSG Landing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Dedicated Engineering & QA Teams for Mission-Critical Software",
    description:
      "Experienced software engineers and QA professionals available hourly to help international teams build and scale reliable products.",
    siteName: "XSG",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
