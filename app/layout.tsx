import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ny } from "@/app/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "schuhmacher.dev",
  description: "made by André Schuhmacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={ny(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
          {children}
      </body>
    </html>
  );
}
