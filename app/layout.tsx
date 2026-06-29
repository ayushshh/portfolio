import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ayush Sharma — Full Stack Developer",
  description:
    "Portfolio of Ayush, a passionate Full Stack Developer & cloud technologies.",
  keywords: [
    "Ayush Sharma",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Kumar Sharma" }],
  openGraph: {
    title: "Ayush Kumar Sharma — Full Stack Developer",
    description:
      "Portfolio of Ayush Kumar Sharma, a passionate Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.variable} suppressHydrationWarning>
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
