"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RecordingCard from "./RecordingCard";
import "swiper/css";
import "swiper/css/navigation";

function RecordingsCarousel({ recordings }: { recordings: any[] }) {
  const swiperRef = useRef<any>();
  return (
    <>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        breakpoints={{
          // 320: {
          //   slidesPerView: 4.5,
          //   spaceBetween: 8,
          // },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 35,
          },
          1920: {
            slidesPerView: 5.5,
            spaceBetween: 35,
          },
        }}
        className="!overflow-visible"
      >
        {recordings.map((recording, i) => (
          <SwiperSlide key={i} className="group">
            <RecordingCard recording={recording} />
          </SwiperSlide>
        ))}
      </Swiper>
      {recordings && recordings.length > 3 && (
        <div className="team-carousel-nav relative top-[80px]">
          <button
            className="swiper-button-prev"
            onClick={(e) => {
              e.stopPropagation();
              swiperRef.current?.slidePrev();
            }}
          ></button>
          <button
            className="swiper-button-next"
            onClick={(e) => {
              e.stopPropagation();
              swiperRef.current?.slideNext();
            }}
          ></button>
        </div>
      )}
    </>
  );
}

export default RecordingsCarousel;
