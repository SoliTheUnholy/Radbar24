import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/themeProvider";

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
          <Toaster dir="rtl" className="max-w-[90vw]" />
        </ThemeProvider>
      </body>
    </html>
  );
}
