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
  title: "Dada Group — Mining, Infrastructure & Agriculture, Nigeria",
  description:
    "Dada Group is a diversified Nigerian holding company operating across mining & energies, civil infrastructure and agriculture — through Dada Minings & Energies, Dada Civil Contractors and Dada Green Farm.",
  icons: {
    icon: "/images/dada-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper">{children}</body>
    </html>
  );
}
