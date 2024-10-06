"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

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

const FormSchema = z.object({
  pin: z.string().min(5, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function OTP() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.radbar24.ir/api/Sign/SendPhoneNumber",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            PhoneNumber: data,
          }),
        },
      );
      const res = await response.json();
      console.log(res);
      router.refresh();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div className="relative grid h-screen items-center justify-center overflow-hidden bg-muted lg:grid-cols-5">
      <div className="z-10 flex h-auto items-center justify-center lg:col-span-2">
        <Card className="w-[90vw] max-w-fit">
          <CardHeader>
            <CardTitle className="text-xl">ورود به حساب</CardTitle>
            <CardDescription>رمز ارسال شده را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="min-w-64 space-y-4"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>پسوورد</FormLabel>
                      <FormControl>
                        <InputOTP dir="ltr" maxLength={5} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} type="submit" className="w-full">
                  {isLoading ? "منتظر بمانید..." : "ورود / ثبت نام"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="grid"></CardFooter>
        </Card>
      </div>
      <div></div>
    </div>
  );
}
