import { AutoCarousel } from "@/components/autoCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function services() {
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
            className={`flex justify-center gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8`}
          >
            <Card
              className={`relative z-0 grid h-auto animate-fade-in-up border-none bg-muted bg-opacity-10 transition-all hover:z-20 hover:scale-105 hover:shadow-md`}
            >
              <CardHeader className="flex flex-col items-center justify-center p-2 text-xl text-foreground sm:text-2xl lg:flex-row">
                <Image
                  className="order-first !-mt-16 object-contain lg:order-last"
                  height={225}
                  width={225}
                  src={"/pickup.png"}
                  alt={""}
                ></Image>
              </CardHeader>
              <CardFooter className="grid p-2">
                <Link href={"./home/services"}>
                  <Button
                    className={`z-30 w-full gap-2 rounded-xl transition-all hover:scale-105 hover:shadow-md`}
                  >
                    <ArrowRightIcon className="hidden sm:block" />
                    <span className="text-xs font-bold md:text-sm">
                      درخواست نیسان
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
                  className="order-first !-mt-16 object-contain lg:order-last"
                  height={225}
                  width={225}
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
                      درخواست اسباب کشی
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
                  className="order-first !-mt-16 object-contain lg:order-last"
                  height={225}
                  width={225}
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
                      درخواست کارگر
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
                  className="order-first !-mt-16 object-contain lg:order-last"
                  height={225}
                  width={225}
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
                      درخواست کارگر
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
