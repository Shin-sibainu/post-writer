import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";

const fontNotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontNotoSansJP.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
