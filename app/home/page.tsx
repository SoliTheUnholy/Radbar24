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
export default function Home() {
  return (
    <div className="mx-4 mt-4 grid gap-4 md:mx-16 lg:mx-24">
      <div className="relative h-auto overflow-hidden rounded-lg rounded-b-lg">
        <div className="absolute z-20 h-[50vh] w-full bg-gradient-to-l from-black/50 to-transparent">
          <div className="absolute start-1/2 top-1/2 z-20 grid w-fit -translate-y-1/2 translate-x-1/2 gap-4 text-white lg:start-1/4 lg:translate-x-1/4">
            <h2 className="text-center text-4xl font-bold text-background lg:text-6xl">
              رادبار 24
            </h2>
            <h3 className="text-xl text-background lg:text-2xl">
              بزرگترین شركت حمل و نقل جنوب کشور
            </h3>
            <Link href={"./products"}>
              <Button
                variant={"outline"}
                className="w-full border-2 bg-transparent p-6 !text-xl text-white lg:!text-2xl"
              >
                ثبت درخواست
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <AutoCarousel />
        </div>
      </div>

      <div className="">
        <Card className="grid gap-4 p-4 lg:p-8">
          <h2 className="text-2xl font-black text-foreground">خدمات</h2>
          <div className={`grid gap-8 lg:grid-cols-3 lg:gap-4`}>
            <Card
              className={`animate-fade-in-up relative z-0 m-4 grid h-auto bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col justify-between pb-0 text-xl text-foreground sm:text-2xl md:flex-row">
                <CardTitle>درخواست وانت</CardTitle>
                <Image
                  className="order-first !-mt-32 object-contain md:order-last"
                  height={300}
                  width={300}
                  src={"/pickup.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid pt-0 md:grid-cols-2">
                <Link href={"/app"}>
                  <Button
                    className={`z-30 mt-4 w-full min-w-40 gap-4 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="font-bold">ثبت درخواست</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`animate-fade-in-up relative z-0 m-4 grid h-auto bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col justify-between pb-0 text-xl text-foreground sm:text-2xl md:flex-row">
                <CardTitle>درخواست اسباب کشی</CardTitle>
                <Image
                  className="order-first !-mt-32 object-contain md:order-last"
                  height={300}
                  width={300}
                  src={"/truck.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid pt-0 md:grid-cols-2">
                <Link href={""}>
                  <Button
                    className={`z-30 mt-4 w-full min-w-40 gap-4 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="font-bold">ثبت درخواست</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className={`animate-fade-in-up relative z-0 m-4 grid h-auto bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col justify-between pb-0 text-xl text-foreground sm:text-2xl md:flex-row">
                <CardTitle>درخواست کارگر</CardTitle>
                <Image
                  className="order-first !-mt-32 object-contain md:order-last"
                  height={250}
                  width={250}
                  src={"/worker.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid pt-0 md:grid-cols-2">
                <Link href={""}>
                  <Button
                    className={`z-30 mt-4 w-full min-w-40 gap-4 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon />
                    <span className="font-bold">ثبت درخواست</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
      <div className="">
        <Card className="grid gap-4 p-8">
          <h2 className="text-2xl font-black text-foreground">
            چرا رادبار 24 ؟
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-1">
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Users className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-lg font-bold">خدمات 24 ساعته</h2>
                <p>ارائه 24 ساعته خدمات به رانندگان و صاحبین بار</p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Building2 className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-lg font-bold">حداقل کمیسیون</h2>
                <p>ارائه تمامی خدمات با دریافت حداقل کمیسیون</p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 p-4 transition-all hover:scale-105 hover:shadow-lg">
              <Cog className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-lg font-bold">همکاران مجرب</h2>
                <p>همکاری با بزرگترین شرکت وانت تلفنی جنوب کشور</p>
              </div>
            </Card>
            <Card className="grid grid-cols-3 grid-rows-1 gap-2 p-4 transition-all hover:scale-105 hover:shadow-lg">
              <TrendingUp className="h-12 w-12 self-center justify-self-center text-primary" />
              <div className="col-span-2 grid gap-2 text-foreground">
                <h2 className="text-lg font-bold">حمل و نقل مطمئن</h2>
                <p>به کارگیری بیش از 300 راننده فعال و با تجربه</p>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
