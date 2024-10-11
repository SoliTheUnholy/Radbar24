"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function HomePage() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const [animation, setAnimation] = useState(false);
  const router = useRouter();
  useEffect(() => {
    sleep(700)
      .then(() => setAnimation(true))
      .then(() => sleep(200).then(() => router.push("/home")));
  });
  return (
    <>
      <div
        className={` ${animation && "animate animate-fade-out-up opacity-0"} flex h-screen w-screen flex-col items-center justify-center bg-primary transition-all`}
      >
        <div className="flex h-20 items-center justify-center overflow-hidden rounded-full">
          <video className="h-48" muted autoPlay>
            <source src="/423310.mp4" type="video/mp4" />
          </video>
        </div>
        <span className="absolute bottom-8 text-sm font-bold">نسخه 1.0.2</span>
      </div>
    </>
  );
}
