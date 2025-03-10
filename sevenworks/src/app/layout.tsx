import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from 'classnames';

// const markazi = Markazi_Text({
//     subsets: ["latin"],
//     variable: "--font-markazi",
// })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Sevenworks", // Updated title
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(inter.className, "antialiased bg-[#2b2d42]")}>
        {children}
      </body>
    </html>
  );
}