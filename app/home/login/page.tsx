"use client";

import { FormEvent} from "react";
import Link from "next/link";

// import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function LoginForm() {
  // const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const res = await signIn("credentials", {
    //   number: formData.get("number"),
    //   password: formData.get("password"),
    //   redirect: false,
    // });
    // if (res?.error) {
    //   setError(res.error as string);
    // }
    // if (res?.ok) {
    //   return router.push("/");
    // }
  };
  return (
    <div className="relative grid h-[93vh] items-center justify-center overflow-hidden bg-muted lg:grid-cols-5">
      <div className="z-10 flex h-[93vh] items-center justify-center lg:col-span-2">
        <Card className="w-[90vw] max-w-fit">
          <CardHeader>
            <CardTitle className="text-xl">ورود به حساب</CardTitle>
            <CardDescription>
              شماره تلفن خود را وارد کنید
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="grid w-80 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="number">شماره تلفن</Label>
                  <Input
                    name="number"
                    type="number"
                    placeholder="09012345678"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  ورود / ثبت نام
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="grid">
          </CardFooter>
        </Card>
      </div>
      <div></div>
    </div>
  );
}
