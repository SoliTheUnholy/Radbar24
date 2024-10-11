"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(1, { message: "وارد کردن نام الزامی است." }),
  family: z.string().min(1, { message: "وارد کردن نام خانوادگی الزامی است." }),
  nationalCode: z
    .string()
    .max(10, {
      message: " ارقام را به درستی وارد کنید.",
    })
    .min(10, {
      message: "تمام ارقام را وارد کنید.",
    }),
  pin: z.string().max(5).min(5, {
    message: "تمام ارقام را وارد کنید.",
  }),
});

export default function OTP({ params }: { params: { number: string } }) {
  const initialTime = 2 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [resend, setResend] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          setResend(true);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  }, []);

  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      family: "",
      nationalCode: "",
      pin: "",
    },
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("منتظر بمانید");
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.radbar24.ir/api/Sign/GetToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: data.name,
            Family: data.family,
            NationalCode: data.nationalCode,
            PhoneNumber: params.number,
            Code: data.pin,
          }),
        },
      );
      const res = await response.json();
      console.log(res);
      if (res.Success === true) {
      }
      setError(res.Errors[0].ErrorMessage);
      setLoading(false);
      router.refresh();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div className="relative grid h-[93vh] items-center justify-center overflow-hidden bg-muted lg:grid-cols-2">
      <div className="z-10 flex items-center justify-center">
        <Card className="w-[90vw] max-w-72 lg:translate-y-0">
          <CardHeader>
            <CardTitle className="text-xl">ثبت نام</CardTitle>
            <CardDescription>مشخصات خود را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-sm font-bold text-red-500">{error}</span>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-full"
                          type="text"
                          placeholder="نام"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="family"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام خانوادگی</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-full"
                          type="text"
                          placeholder="نام خانوادگی"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nationalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>کد ملی</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-full"
                          type="number"
                          placeholder="کد ملی را وارد کنید"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رمز یکبار مصرف</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={5} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <div className="flex justify-end py-1">
                        <Button
                          disabled={!resend}
                          type="button"
                          className="h-fit rounded-sm py-1 text-xs font-bold text-primary"
                          variant={"ghost"}
                          onClick={async () => {
                            setResend(false);
                            try {
                              const response = await fetch(
                                "https://api.radbar24.ir/api/Sign/SendPhoneNumber",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    PhoneNumber: params.number,
                                  }),
                                },
                              );
                              if (response.ok) {
                                setTimeRemaining(initialTime);
                                setResend(false);
                              }
                            } catch (error) {
                              console.error("Error submitting data:", error);
                            }
                          }}
                        >
                          {timeRemaining != 0
                            ? minutes +
                              ":" +
                              (seconds <= 9 ? "0" + seconds : seconds)
                            : "ارسال مجدد"}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} type="submit" className="w-full">
                  {isLoading ? "منتظر بمانید..." : "ثبت نام"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="grid"></CardFooter>
        </Card>
      </div>
      <div className="hidden lg:block">
        <Image
          className="h-[93vh] object-cover"
          width={1920}
          height={1080}
          src={"/image3.png"}
          alt={""}
        ></Image>
      </div>
    </div>
  );
}
