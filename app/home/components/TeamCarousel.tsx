"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TeamCarouselItem from "./TeamCarouselItem";

function TeamCarousel({ team }: { team: any[] }) {
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
          640: {
            slidesPerView: 4,
            spaceBetween: 36,
          },
        }}
        className="!overflow-visible"
      >
        {team.map((team, i) => (
          <SwiperSlide key={i} className="group">
            <TeamCarouselItem team={team} />
          </SwiperSlide>
        ))}
      </Swiper>
      {team && team.length > 1 && (
        <div className="team-carousel-nav relative top-[38px]">
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

export default TeamCarousel;
