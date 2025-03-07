"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/app/(shared)/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function repeatUntilLength(arr: any[], length: number) {
  const result = [];
  let i = 0;

  while (result.length < length) {
    result.push(arr[i % arr.length]); // Cycles through the original array
    i++;
  }

  return result;
}

function BrandSolutionsMarquee({ solutions }: { solutions: any[] }) {
  const swiperRef = useRef<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(
    solutions[0]?.category?.name || null
  );

  const brandSolutionCategories = [
    ...new Set(
      solutions
        .sort((a, b) => a.category.position - b.category.position)
        .map((solution) => solution.category.name)
    ),
  ];
  const filteredSolutions = solutions.filter(
    (solution) => solution.category.name === selectedCategory
  );

  const loopedSolutions =
    filteredSolutions.length > 0
      ? repeatUntilLength(filteredSolutions, 18)
      : [];

  useEffect(() => {
    setSelectedCategory(brandSolutionCategories[0]);
  }, [solutions]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    // Find the index of the clicked category
    const categoryIndex = brandSolutionCategories.indexOf(category);

    // Scroll to the selected category slide
    if (swiperRef.current) {
      swiperRef.current.slideTo(categoryIndex, 500, false);
    }
  };
  return (
    <div>
      <div className="h-[800px] mx-auto grid place-items-center relative overflow-hidden">
        <div className="size-0 relative grid place-items-center z-10 -top-[1130px] rotate-clockwise-slow">
          {loopedSolutions.map((solution, i) => {
            const degree = -(i * 20);

            return (
              <div
                key={i + Math.random()}
                className={`h-[3000px] w-[350px] absolute flex items-end`}
                style={{ transform: `rotate(${degree}deg)` }}
              >
                <div className="w-full h-[350px] bg-gray relative">
                  <Image
                    src={urlForImage(solution.image)}
                    alt={solution.name || "Design solution"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}

          {/* <div className="rotate-[-20deg] h-[3000px] w-[350px] bg-orange-200 absolute border border-black opacity-40 flex items-end">
        <div className="w-full h-[350px] bg-black"></div>
      </div> */}
        </div>
      </div>

      <div className="container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          freeMode
          modules={[Scrollbar, FreeMode]}
          breakpoints={
            {
              // 320: {
              //   slidesPerView: 4.5,
              //   spaceBetween: 8,
              // },
              // when window width is >= 640px
              // 640: {
              //   slidesPerView: 4,
              //   spaceBetween: 36,
              // },
            }
          }
          slidesPerView="auto"
          spaceBetween={52}
          className="!overflow-visible mt-[24px] gap-[52px]"
        >
          {/* {team.map((team, i) => (
          <SwiperSlide key={i} className="group">
            <TeamCarouselItem team={team} />
          </SwiperSlide>
        ))} */}
          {brandSolutionCategories.map((brandSolutionCategory, i) => {
            const isActive = brandSolutionCategory === selectedCategory;
            return (
              <SwiperSlide key={i + Math.random()} className="!w-max">
                <li
                  onClick={() => handleCategoryClick(brandSolutionCategory)}
                  key={brandSolutionCategory}
                  className={cn(
                    "w-max cursor-pointer font-gilroy font-bold text-[40px] py-[36px] border-b border-transparent text-[#d9dadc] whitespace-nowrap",
                    isActive && "border-black text-black"
                  )}
                >
                  {brandSolutionCategory}
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* <ul className="mt-[24px] flex gap-[52px] container overflow-visible">
        {brandSolutionCategories.map((brandSolutionCategory) => {
          const isActive = brandSolutionCategory === selectedCategory;
          return (
            <li
              onClick={() => handleCategoryClick(brandSolutionCategory)}
              key={brandSolutionCategory}
              className={cn(
                "cursor-pointer font-gilroy font-bold text-[40px] py-[36px] border-b border-transparent text-[#d9dadc] whitespace-nowrap",
                isActive && "border-black text-black"
              )}
            >
              {brandSolutionCategory}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default BrandSolutionsMarquee;
