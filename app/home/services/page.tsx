"use client";
import { AutoCarousel } from "@/components/autoCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Auth from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z.object({
  distance: z.string(),
  car: z.string(),
  locatoin: z.object({
    origin: z.object({}),
    destination: z.object({}),
  }),
  details: z.string(),
});
export default function Services() {
  const router = useRouter();
  useEffect(() => {
    Auth().then((res) => {
      if (!res) {
        toast.warning("ابتدا وارد حساب کاربری خود شوید");
        router.push("/home/login");
      }
    });
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      distance: "",
      car: "",
      locatoin: {},
      details: "",
    },
  });
  const [tb, setTb] = useState("distance");
  const [tb2, setTb2] = useState("origin");

  return (
    <div className="mx-auto grid w-[95vw] gap-4 sm:w-fit xl:mx-24">
      <div className="relative mt-4 h-auto animate-fade-in-left overflow-hidden rounded-xl">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Card className="grid animate-fade-in-up gap-2 border-none bg-muted/75 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">درخواست وانت</h2>
          <Tabs dir="rtl" value={tb} className="">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger
                onClick={() => {
                  setTb("distance");
                }}
                value="distance"
              >
                مسافت
              </TabsTrigger>
              <TabsTrigger
                disabled={form.getValues("distance") === ""}
                onClick={() => {
                  setTb("car");
                }}
                value="car"
              >
                خودرو
              </TabsTrigger>
              <TabsTrigger
                disabled={form.getValues("car") === ""}
                onClick={() => {
                  setTb("location");
                }}
                value="location"
              >
                موقعیت
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setTb("details");
                }}
                value="details"
              >
                مشخصات
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setTb("status");
                }}
                value="status"
              >
                وضعیت
              </TabsTrigger>
            </TabsList>
            <TabsContent value="distance">
              <Card>
                <CardHeader>
                  <CardTitle>مسافت</CardTitle>
                  <CardDescription>
                    شهری یا بین شهری بودن سفارش را مشخص کنید.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 grid-rows-1 gap-2 space-y-2">
                  <Card
                    onClick={() => {
                      form.setValue("distance", "local");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("distance") === "local" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>شهری</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card
                    onClick={() => {
                      form.setValue("distance", "global");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("distance") === "global" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>بین شهری</CardTitle>
                    </CardHeader>
                  </Card>
                </CardContent>
                <CardFooter className="flex flex-row justify-end">
                  <Button
                    disabled={form.getValues("distance") === ""}
                    onClick={() => {
                      setTb("car");
                    }}
                    className=""
                  >
                    مرحله بعد
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="car">
              <Card>
                <CardHeader>
                  <CardTitle>نوع خودرو</CardTitle>
                  <CardDescription>نوع خودرو را مشخص کنید. </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 grid-rows-2 gap-2 space-y-2">
                  <Card
                    onClick={() => {
                      form.setValue("car", "light");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("car") === "light" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>وانت سبک</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card
                    onClick={() => {
                      form.setValue("car", "semi");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("car") === "semi" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>وانت نیمه سنگین</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card
                    onClick={() => {
                      form.setValue("car", "heavy");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("car") === "heavy" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>وانت سنگین</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card
                    onClick={() => {
                      form.setValue("car", "truck");
                      router.refresh();
                    }}
                    className={`border-none bg-muted transition-all hover:scale-105 hover:cursor-pointer ${form.getValues("car") === "truck" && "ring-2 ring-primary"}`}
                  >
                    <CardHeader>
                      <CardTitle>کامیون</CardTitle>
                    </CardHeader>
                  </Card>
                </CardContent>
                <CardFooter className="flex flex-row justify-between">
                  <Button
                    onClick={() => {
                      setTb("distance");
                    }}
                    className=""
                  >
                    مرحله قبل
                  </Button>
                  <Button
                    disabled={form.getValues("car") === ""}
                    onClick={() => {
                      setTb("location");
                    }}
                    className=""
                  >
                    مرحله بعد
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="location">
              <Card>
                <CardHeader>
                  <CardTitle>موقعیت مکانی</CardTitle>
                  <CardDescription>
                    جزئیات موقعیت مکانی را مشخص کنید.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Tabs dir="rtl" value={tb2} className="grid">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger
                        onClick={() => {
                          setTb2("origin");
                        }}
                        value="origin"
                      >
                        مبدا
                      </TabsTrigger>{" "}
                      <TabsTrigger
                        disabled={false}
                        onClick={() => {
                          setTb2("destination");
                        }}
                        value="destination"
                      >
                        مقصد
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="origin">
                      <Card>
                        <CardHeader>
                          <CardTitle>مبدا</CardTitle>
                        </CardHeader>
                      </Card>
                    </TabsContent>
                    <TabsContent value="destination">
                      <Card>
                        <CardHeader>
                          <CardTitle>مقصد</CardTitle>
                        </CardHeader>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex flex-row justify-between">
                  <Button
                    onClick={() => {
                      setTb("car");
                    }}
                    className=""
                  >
                    مرحله قبل
                  </Button>
                  <Button
                    onClick={() => {
                      setTb("details");
                    }}
                    className=""
                  >
                    مرحله بعد
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>جزئیات سفارش</CardTitle>
                  <CardDescription>جزئیات سفارش را وارد کنید. </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2"></CardContent>
                <CardFooter className="flex flex-row justify-between">
                  <Button
                    onClick={() => {
                      setTb("location");
                    }}
                    className=""
                  >
                    مرحله قبل
                  </Button>
                  <Button
                    onClick={() => {
                      setTb("status");
                    }}
                    className=""
                  >
                    مرحله بعد
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="status">
              <Card>
                <CardHeader>
                  <CardTitle>وضعیت سفارش</CardTitle>
                  <CardDescription>
                    در انتظار تایید اوپراتور بمانید.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2"></CardContent>
                <CardFooter className="flex flex-row justify-between"></CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
