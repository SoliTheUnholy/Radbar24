import { AutoCarousel } from "@/components/autoCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowRightIcon,
  Building2,
  Cog,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Asked } from "@/components/Asked";
export default function Home() {
  return (
    <div className="mx-4 grid gap-4 sm:mx-12 xl:mx-24">
      <div className="relative mt-4 h-auto animate-fade-in-left overflow-hidden rounded-xl">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="">
        <Card className="grid animate-fade-in-up gap-2 border-none bg-muted/75 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">خدمات</h2>
          <div
            className={`grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4`}
          >
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-between p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <CardTitle className="text-sm md:text-base">
                  درخواست وانت
                </CardTitle>
                <Image
                  className="order-first !-mt-12 object-contain lg:order-last"
                  height={125}
                  width={125}
                  src={"/pickup.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={"/app"}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت درخواست
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-between p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <CardTitle className="text-sm md:text-base">
                  درخواست اسباب کشی
                </CardTitle>
                <Image
                  className="order-first !-mt-12 object-contain lg:order-last"
                  height={125}
                  width={125}
                  src={"/truck.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت درخواست
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-between p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <CardTitle className="text-sm md:text-base">
                  درخواست کارگر
                </CardTitle>
                <Image
                  className="order-first !-mt-12 object-contain lg:order-last"
                  height={125}
                  width={125}
                  src={"/worker.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت درخواست
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-between p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <CardTitle className="text-sm md:text-base">
                  درخواست کارگر
                </CardTitle>
                <Image
                  className="order-first !-mt-12 object-contain lg:order-last"
                  height={125}
                  width={125}
                  src={"/worker.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      ثبت درخواست
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
      <div className="">
        <Card className="grid gap-2 border-none bg-muted/75 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">
            چرا رادبار 24 ؟
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-rows-1 lg:grid-cols-4">
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Users className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  خدمات 24 ساعته
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  ارائه 24 ساعته خدمات به رانندگان و صاحبین بار
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Building2 className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  حداقل کمیسیون
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  ارائه تمامی خدمات با دریافت حداقل کمیسیون
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Cog className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">همکاران مجرب</h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  همکاری با بزرگترین شرکت وانت تلفنی جنوب کشور
                </p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 border-none p-4 transition-all hover:scale-105 hover:shadow-lg">
              <TrendingUp className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-sm font-bold md:text-base">
                  حمل و نقل مطمئن
                </h2>
                <p className="text-justify text-xs font-bold text-muted-foreground md:text-sm">
                  به کارگیری بیش از 300 راننده فعال و با تجربه
                </p>
              </div>
            </Card>
          </div>
        </Card>
      </div>
      <div>
        <div className="rounded-xl bg-muted/75 grid gap-2 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">
            پرسش‌های متداول
          </h2>
          <Asked />
        </div>
      </div>
    </div>
  );
}
