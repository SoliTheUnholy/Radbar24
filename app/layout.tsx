import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Toast from "@/components/Toast";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        dir="rtl"
        className={`${Vazirmatn.className} overflow-x-hidden bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  );
}
