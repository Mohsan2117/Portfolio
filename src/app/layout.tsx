import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mohsan Iqbal | AI-Powered Full-Stack Web Developer",
  description:
    "AI-Powered Full-Stack Web Developer focused on building modern, responsive, and scalable web applications with React, Next.js, TypeScript, Go, REST APIs, and database-backed architectures.",
  keywords: [
    "Mohsan Iqbal",
    "MohsanCodes",
    "AI-Powered Full-Stack Web Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "REST APIs",
    "Tailwind CSS",
  ],
};

export const viewport = {
  themeColor: "#0f1419",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="stylesheet" href="/site.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
