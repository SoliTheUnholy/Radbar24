"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function AutoCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel plugins={[plugin.current]} className="h-[50vh] w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            className="h-[50vh] w-screen object-cover"
            width={1920}
            height={1080}
            src={"/image.png"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-[50vh] w-screen object-cover"
            width={1920}
            height={1080}
            src={"/image1.png"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-[50vh] w-screen object-cover"
            width={1920}
            height={1080}
            src={"/image2.png"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-[50vh] w-screen object-cover"
            width={1920}
            height={1080}
            src={"/image3.png"}
            alt={""}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="h-[50vh] w-screen object-cover"
            width={1920}
            height={1080}
            src={"/image4.png"}
            alt={""}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
