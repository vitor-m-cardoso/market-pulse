import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';

import { AppProvider } from "@/contexts/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Market Pulse",
  description: "Market Pulse app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 w-full h-full`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
