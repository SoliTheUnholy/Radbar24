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
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import Auth from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CircleArrowLeft, CircleArrowRight, CirclePlus } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const FormSchema = z.object({
  distance: z.string(),
  car: z.string(),
  destinations: z.object({
    destination: z.object({
      name: z.string().min(1, "نام صاحب بار را وارد نمایید."),
      phone: z.string().min(1, "شماره تماس صاحب بار را وارد نمایید."),
      address: z.string().min(1, "آدرس دقیق مبدا را وارد نمایید."),
      description: z.string(),
    }),
    destination1: z.object({
      name: z.string().min(1, "نام صاحب بار را وارد نمایید."),
      phone: z.string().min(1, "شماره تماس صاحب بار را وارد نمایید."),
      address: z.string().min(1, "آدرس دقیق مبدا را وارد نمایید."),
      description: z.string(),
    }),
    destination2: z.object({
      name: z.string().min(1, "نام صاحب بار را وارد نمایید."),
      phone: z.string().min(1, "شماره تماس صاحب بار را وارد نمایید."),
      address: z.string().min(1, "آدرس دقیق مبدا را وارد نمایید."),
      description: z.string(),
    }),
    destination3: z.object({
      name: z.string().min(1, "نام صاحب بار را وارد نمایید."),
      phone: z.string().min(1, "شماره تماس صاحب بار را وارد نمایید."),
      address: z.string().min(1, "آدرس دقیق مبدا را وارد نمایید."),
      description: z.string(),
    }),
  }),
  details: z.string(),
});
async function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log(data);
}

export default function Services() {
  const router = useRouter();
  // useEffect(() => {
  //   Auth().then((res) => {
  //     if (!res) {
  //       toast.warning("ابتدا وارد حساب کاربری خود شوید");
  //       router.push("/home/login");
  //     }
  //   });
  // });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      distance: "",
      car: "",
      destinations: {
        destination: {
          name: "",
          phone: "",
          address: "",
          description: "",
        },
        destination1: {
          name: "",
          phone: "",
          address: "",
          description: "",
        },
        destination2: {
          name: "",
          phone: "",
          address: "",
          description: "",
        },
        destination3: {
          name: "",
          phone: "",
          address: "",
          description: "",
        },
      },
      details: "",
    },
  });
  const [tb, setTb] = useState("distance");
  const [tb2, setTb2] = useState("destination");
  const [tabs, setTabs] = useState<Array<{ value: string; key: string }>>([
    { value: "destination", key: "مبدا" },
    { value: "destination1", key: "مقصد" },
  ]);
  return (
    <div className="mx-auto mt-4 grid w-[95vw] gap-4 sm:w-fit xl:mx-24">
      <div className="flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="grid animate-fade-in-up gap-4 border-none bg-muted/75 py-4 px-2 lg:p-8">
              <h2 className="text-lg font-black text-foreground">
                درخواست وانت
              </h2>
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
                    <CardContent className="grid grid-cols-2 grid-rows-1 gap-4 space-y-2">
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
                        className="flex gap-2"
                      >
                        مرحله بعد
                        <CircleArrowLeft />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="car">
                  <Card>
                    <CardHeader>
                      <CardTitle>نوع خودرو</CardTitle>
                      <CardDescription>نوع خودرو را مشخص کنید.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 grid-rows-2 gap-4 space-y-2">
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
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between">
                      <Button
                        onClick={() => {
                          setTb("distance");
                        }}
                        className="flex gap-2"
                      >
                        <CircleArrowRight />
                        مرحله قبل
                      </Button>
                      <Button
                        disabled={form.getValues("car") === ""}
                        onClick={() => {
                          setTb("location");
                        }}
                        className="flex gap-2"
                      >
                        مرحله بعد <CircleArrowLeft />
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
                    <CardContent className="space-y-2 px-2">
                      <Tabs dir="rtl" value={tb2} className="grid">
                        <TabsList className="flex">
                          {tabs.map((tab) => {
                            return (
                              <TabsTrigger
                                key={tab.value}
                                className="grow"
                                onClick={() => {
                                  setTb2(tab.value);
                                }}
                                value={tab.value}
                              >
                                {tab.key}
                              </TabsTrigger>
                            );
                          })}
                          <TabsTrigger
                            className="m-1 rounded-full bg-primary p-1 text-white shadow-md"
                            disabled={tabs.length >= 4}
                            value={"Add"}
                            onClick={() => {
                              setTabs([
                                ...tabs,
                                {
                                  value: `destination${tabs.length}`,
                                  key: `مقصد ${tabs.length}`,
                                },
                              ]);
                            }}
                          >
                            <CirclePlus className="h-5 w-5" />
                          </TabsTrigger>
                        </TabsList>
                        {tabs.map((tab) => {
                          return (
                            <TabsContent key={tab.value} value={tab.value}>
                              <Card>
                                <CardHeader>
                                  <CardTitle>{tab.key}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                  <FormField
                                    control={form.control}
                                    name={`destinations.destination.name`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>
                                          نام و نام خانوادگی
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            className="rounded-full"
                                            type="text"
                                            placeholder=""
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="destinations.destination.phone"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>شماره تماس</FormLabel>
                                        <FormControl>
                                          <Input
                                            className="rounded-full"
                                            type="number"
                                            placeholder=""
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="destinations.destination.address"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>آدرس دقیق</FormLabel>
                                        <FormControl>
                                          <Input
                                            className="rounded-full"
                                            type="text"
                                            placeholder=""
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="destinations.destination.description"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>توضیحات</FormLabel>
                                        <FormControl>
                                          <Input
                                            className="rounded-full"
                                            type="text"
                                            placeholder=""
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </CardContent>
                              </Card>
                            </TabsContent>
                          );
                        })}
                      </Tabs>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between">
                      <Button
                        onClick={() => {
                          setTb("car");
                        }}
                        className="flex gap-2"
                      >
                        <CircleArrowRight />
                        مرحله قبل
                      </Button>
                      <Button
                        onClick={() => {
                          setTb("details");
                        }}
                        className="flex gap-2"
                      >
                        مرحله بعد <CircleArrowLeft />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>جزئیات سفارش</CardTitle>
                      <CardDescription>
                        جزئیات سفارش را وارد کنید.{" "}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2"></CardContent>
                    <CardFooter className="flex flex-row justify-between">
                      <Button
                        onClick={() => {
                          setTb("location");
                        }}
                        className="flex gap-2"
                      >
                        <CircleArrowRight />
                        مرحله قبل
                      </Button>
                      <Button
                        onClick={() => {
                          setTb("status");
                        }}
                        className="flex gap-2"
                      >
                        مرحله بعد <CircleArrowLeft />
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
          </form>
        </Form>
      </div>
      <div className="relative h-auto animate-fade-in-left overflow-hidden rounded-xl">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
    </div>
  );
}
