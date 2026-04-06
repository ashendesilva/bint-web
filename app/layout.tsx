import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BINT 777 | Free Fire Streamer & PC Optimizer",
  description: "BINT 777 - Sri Lanka's top Free Fire streamer and PC optimization expert. Watch live streams, get game settings, and optimize your PC for gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
