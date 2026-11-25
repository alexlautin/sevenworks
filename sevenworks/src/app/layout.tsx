import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth";
import { DemoBanner } from "@/components/demo-banner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SevenWorks · Resume builder",
  description: "Pick a template, fill in your story, and watch a polished PDF resume update as you type.",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <AuthProvider>
          <DemoBanner />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
