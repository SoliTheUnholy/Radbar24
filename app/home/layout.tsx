"use client";
import Link from "next/link";
import { Home, Menu, Package2, CirclePlus, List, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Card, CardFooter } from "@/components/ui/card";
import { SwitchTheme } from "@/components/modeToggle";
const currentYear = new Date().getFullYear();
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 bg-muted px-4 transition-all md:px-6">
          <nav className="hidden flex-col gap-3 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-5">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-bold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span>رادبار 24</span>
            </Link>
            <Separator orientation="vertical" className="h-10" />
            <Link
              href="/home/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "text-lg font-bold text-primary" : ""}`}
            >
              خانه
            </Link>
            <Link
              href="/home/services"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname.includes("/home/services") ? "text-lg font-bold text-primary" : ""}`}
            >
              خدمات
            </Link>
            <Link
              href="/home/contactus"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/contactus" ? "text-lg font-bold text-primary" : ""}`}
            >
              پشتیبانی
            </Link>
          </nav>
          <Sheet>
            <SheetTitle className="sr-only"></SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col overflow-y-scroll bg-card"
            >
              <div className="mt-10 flex justify-between">
                <Link
                  href="/home"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span>رادبار 24</span>
                </Link>
              </div>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/home">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    خانه
                  </SheetClose>
                </Link>
                <Link href="/home/services">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/products" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    خدمات
                  </SheetClose>
                </Link>
                <Link href="/home/contactus">
                  <SheetClose
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home/contact" ? "bg-muted text-primary" : ""}`}
                  >
                    <Home className="h-4 w-4" />
                    پشتیبانی
                  </SheetClose>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-row items-center gap-2">
            <Link href={"/home/login"}>
              <Button className="w-full" variant={"default"}>
                ورود / ثبت نام
              </Button>
            </Link>
            <Separator className="h-10" orientation="vertical" />
            <SwitchTheme />
          </div>
        </header>
        {children}
        <div className="fixed bottom-0 z-30 flex h-24 w-full justify-center rounded-3xl bg-clip-content p-4 sm:hidden">
          <div className="-ml-[2px] flex h-[61.5px] grow items-center justify-center rounded-r-2xl bg-primary shadow-lg">
            <div className="w-18 flex flex-col items-center justify-center gap-1 text-xs font-bold text-background">
              <Headset className="ml-1 h-6 w-6 stroke-2" />
              <h3 className="w-20 text-center">پشتیبانی</h3>
            </div>
          </div>
          <div className="flex h-[65px] w-[103px] items-end justify-center overflow-hidden text-background drop-shadow-lg">
            <svg width="103px" height="84px">
              <path
                className="fill-primary"
                fillRule="evenodd"
                d="M1.1000,18.1000 L100.000,18.1000 L100.000,81.000 L1.1000,81.000 L1.1000,18.1000 ZM50.1000,1.1000 C68.397,1.1000 82.500,16.103 82.500,33.500 C82.500,50.897 68.397,65.000 50.1000,65.000 C33.603,65.000 19.500,50.897 19.500,33.500 C19.500,16.103 33.603,1.1000 50.1000,1.1000 Z"
              />
            </svg>
            <h3 className="absolute z-50 mb-[2px] text-xs font-bold text-background">
              ثبت سفارش
            </h3>
          </div>
          <div className="absolute mb-9 ml-[1px] flex h-14 w-14 items-center justify-center self-center justify-self-center rounded-full bg-primary shadow-md">
            <CirclePlus className="h-12 w-12 stroke-[1.5px] text-background" />
          </div>
          <div className="flex h-[61.5px] grow items-center justify-center rounded-l-2xl bg-primary shadow-lg">
            <div className="w-18 flex flex-col items-center justify-center gap-1 text-xs font-bold text-background">
              <List className="h-6 w-6" />
              <h3 className="w-20 text-center">لیست سفارشات</h3>
            </div>
          </div>
        </div>
        <footer className="mt-4">
          <Card className="rounded-none border-none px-3 pb-20 sm:pb-0">
            <CardFooter className="p-3">
              <div className="flex w-full flex-col items-center justify-center border-t border-muted-foreground py-4 md:flex-row md:justify-between">
                <span className="mb-4 text-center text-sm font-bold md:mb-0">
                  &copy; {currentYear + " "}شركت رادبار 24
                </span>
                <div className="flex gap-4 sm:justify-center">
                  <a
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </CardFooter>
          </Card>
        </footer>
      </div>
    </>
  );
}
