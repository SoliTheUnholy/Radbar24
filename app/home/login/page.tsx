"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
const formSchema = z.object({
  number: z
    .string()
    .max(12, {
      message: "شماره تلفن را به درستی وارد کنید.",
    })
    .min(10, {
      message: "شماره تلفن را کامل وارد کنید.",
    }),
});
export default function LoginForm() {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("منتظر بمانید");
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
            PhoneNumber: values.number,
          }),
        },
      );
      const res = await response.json();
      if (res.Result.Value.IsNewUser) {
        router.push(`./login/register/${values.number}`);
      } else {
        router.push(`./login/otp/${values.number}`);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  return (
    <div className="relative grid h-[93vh] items-center justify-center overflow-hidden bg-muted lg:grid-cols-2">
      <div className="z-10 flex h-auto items-center justify-center">
        <Card className="w-[90vw] max-w-80 -translate-y-1/3 lg:translate-y-0">
          <CardHeader>
            <CardTitle className="text-xl">ورود به حساب</CardTitle>
            <CardDescription>شماره تلفن خود را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شماره تلفن</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="09012345678"
                          {...field}
                        />
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
      <div className="hidden lg:block">
        <Image
          className="h-[93vh] object-cover"
          width={1920}
          height={1080}
          src={"/image2.png"}
          alt={""}
        ></Image>
      </div>
    </div>
  );
}
