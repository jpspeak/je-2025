"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

function TeamCarouselMobile({ team }: { team: any[] }) {
  const swiperRef = useRef<any>();
  return (
    <>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        centeredSlides
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={20}
        loop
        // breakpoints={{
        //   320: {
        //     slidesPerView: 4.5,
        //     spaceBetween: 8,
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 36,
        //   },
        // }}
      >
        {team.map((team, i) => (
          <SwiperSlide key={i} className="group">
            <div className="w-full pb-[100%] relative bg-[#f3f4f6]">
              <Image
                src={urlForImage(team.image)}
                fill
                alt={team.name}
                className="object-cover"
              />
            </div>
            <p className="text-[20px] font-gilroy font-bold mt-[20px] text-center">
              {team.name}
            </p>
            <p className="text-[13px] text-center">{team.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default TeamCarouselMobile;
