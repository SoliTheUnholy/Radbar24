import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const Vazirmatn = localFont({ src: "./fonts/Vazirmatn[wght].woff2" });

export const metadata: Metadata = {
  title: "Radbar24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${Vazirmatn.className} bg-background overflow-x-hidden`}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
