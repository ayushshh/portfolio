import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ayush Portfolio",
  icons: {
    icon: "/img1.webp",
    shortcut: "/img1.webp",
    apple: "/img1.webp"
  },
  description:
    "Portfolio of Ayush, a passionate Developer.",
  keywords: [
    "Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Kumar Sharma" }],
  openGraph: {
    title: "Ayush's Portfolio",
    description:
      "A developer portfolio.",
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
