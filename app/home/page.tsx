import { AutoCarousel } from "@/components/autoCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div className="mx-4 grid gap-4 sm:mx-12 xl:mx-24">
      <div className="relative mt-4 h-auto animate-fade-in-left overflow-hidden rounded-2xl shadow-md">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="">
        <Card className="grid animate-fade-in-up gap-2 border-none bg-muted/75 p-4 shadow-md lg:p-8">
          <h2 className="text-lg font-black text-foreground">خدمات</h2>
          <div
            className={`grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8`}
          >
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-center p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <Image
                  className="order-first !-my-10 object-contain lg:order-last"
                  height={225}
                  width={225}
                  src={"/pickup.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={"./home/services"}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-2xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      درخواست وانت
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-center p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <Image
                  className="order-first !-my-10 object-contain lg:order-last"
                  height={225}
                  width={225}
                  src={"/truck.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-2xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      اسباب کشی
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-center p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <Image
                  className="order-first !-my-10 object-contain lg:order-last"
                  height={225}
                  width={225}
                  src={"/worker.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-2xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      درخواست کارگر
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>{" "}
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-center p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <Image
                  className="order-first !-my-10 rounded-3xl object-contain p-4 lg:order-last"
                  height={225}
                  width={225}
                  src={"/others.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={""}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-2xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      صدور باربری
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
      <div className="">
        <Card className="grid gap-2 border-none bg-muted/75 p-4 shadow-md lg:p-8">
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
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2 rounded-2xl bg-muted/75 p-4 shadow-md lg:p-8">
          <h2 className="text-lg font-black text-foreground">
            پرسش‌های متداول
          </h2>
          <Asked />
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2 rounded-2xl bg-muted/75 p-4 shadow-md lg:p-8">
            <h2 className="text-lg font-black text-foreground">کد تخفیف</h2>
            <p>
              شماره موبایل خود را وارد نمایید تا کد تخفیف 50 هزار تومانی برای
              سفارش اول شما ارسال شود
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                className="rounded-l-none bg-muted"
                type="number"
                placeholder="شماره تماس"
              />
              <Button className="rounded-r-none px-6" type="submit">
                ثبت
              </Button>
            </div>
          </div>
          <div className="grid gap-2 rounded-2xl bg-muted/75 p-4 shadow-md lg:p-8">
            <h2 className="text-lg font-black text-foreground">
              دانلود اپلیکیشن
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <Button variant={"outline"}>بازار</Button>
              <Button variant={"outline"}>سروش</Button>
              <Button variant={"outline"}>مایکت</Button>
              <Button variant={"outline"}>ios</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
