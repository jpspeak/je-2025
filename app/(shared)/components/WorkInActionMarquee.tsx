"use client";

import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function WorkInActionMarquee({
  workInActionImages,
}: {
  workInActionImages: any[];
}) {
  return (
    <Marquee
      loop={0}
      pauseOnClick
      pauseOnHover
      autoFill
      className="!overflow-hidden"
    >
      {workInActionImages?.map((workInActionImage, i) => (
        <div
          key={i}
          className="w-[250px] md:w-[350px] xl:w-[350px] shrink-0 mx-[2px] relative -bottom-[4px]"
        >
          <div className="relative w-full pb-[100%] bg-muted inline-block">
            <Image
              src={urlForImage(workInActionImage?.image as any)}
              fill
              alt="Work in action"
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
}

export default WorkInActionMarquee;
