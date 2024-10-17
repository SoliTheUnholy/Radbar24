"use client"
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

export default function Services() {
  const [tb, setTb] = useState("distance");
  return (
    <div className="mx-auto grid w-[95vw] gap-4 sm:w-fit xl:mx-24">
      <div className="relative mt-4 h-auto animate-fade-in-left overflow-hidden rounded-xl">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Card className="grid animate-fade-in-up gap-2 border-none bg-muted/75 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">خدمات</h2>
          <Tabs dir="rtl" defaultValue="distance" value={tb} className="">
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
                onClick={() => {
                  setTb("car");
                }}
                value="car"
              >
                خودرو
              </TabsTrigger>
              <TabsTrigger
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
                <CardContent className="space-y-2"></CardContent>
                <CardFooter className="flex flex-row justify-end">
                  <Button
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
                <CardContent className="space-y-2"></CardContent>
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
                <CardContent className="space-y-2"></CardContent>
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
