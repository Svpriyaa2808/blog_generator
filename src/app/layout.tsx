import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Blog Post Generator - Powered by Groq",
  description: "Generate professional, SEO-optimized blog posts instantly using AI. Free, fast, and powered by Groq's cutting-edge language models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
