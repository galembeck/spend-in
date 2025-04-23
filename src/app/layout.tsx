import { ReactNode } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";

import { spendInMetadata } from "@/config";

import "../styles/globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = spendInMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
