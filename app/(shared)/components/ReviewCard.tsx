"use client";

import { ReactNode, useRef, useState } from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import {
  ShowMore,
  ShowMoreRef,
  ShowMoreToggleLinesFn,
} from "@re-dev/react-truncate";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatRateNumber, generateAvatarInitials } from "../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlForImage } from "@/sanity/lib/image";
import { Mousewheel, Thumbs } from "swiper/modules";
import { SliderFullScreen } from "./slider-full-screen/SliderFullScreen";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

function ReviewCard({
  avatar,
  reviewerName,
  reviewerInfo,
  rating,
  text,
  platformLogoUrl,
  platformName,
  images,
}: {
  avatar?: string;
  reviewerName: string;
  reviewerInfo: string;
  rating: number;
  text?: ReactNode;
  platformLogoUrl?: string;
  platformName: string;
  images?: any[];
}) {
  // The Toggle method will be passed back through `useImperativeHandle`
  const ref = useRef<ShowMoreRef>(null);

  // Custom buttons can be expanded and collapsed through this method
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };

  const [isOpenSliderFullScreen, setIsOpenSliderFullScreen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleImageClick = (slideIndex: number) => {
    setIsOpenSliderFullScreen(true);
    setCurrentSlideIndex(slideIndex);
  };
  return (
    // <Card className="p-4 lg:p-[25px] rounded-none shadow-none border-none h-max">
    //   <div className="flex gap-[10px] lg:gap-[18px] items-center">
    //     <Avatar className="size-[50px] lg:size-[70px]">
    //       <AvatarImage src={avatar} alt={reviewerName} />
    //       <AvatarFallback>
    //         {generateAvatarInitials(reviewerName)}
    //       </AvatarFallback>
    //     </Avatar>
    //     <div>
    //       <div className="flex gap-1 lg:gap-[6px] items-center">
    //         <p className="font-medium font-gilroy text-sm lg:text-[17.5px] leading-none">
    //           {reviewerName}
    //         </p>
    //       </div>
    //       <p
    //         title={reviewerInfo}
    //         className="text-xs lg:text-[15px] font-light text-[#53545c] mt-[6px] lg:mt-[8px] leading-none line-clamp-1"
    //       >
    //         {reviewerInfo}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="pb-[26px] pt-[22px] text-sm font-light lg:text-base leading-normal lg:leading-normal w-full">
    //     {/* <ShowMoreText
    //       lines={4}
    //       more="More"
    //       less="Less"
    //       anchorClass="underline cursor-pointer"
    //       truncatedEndingComponent={"... "}
    //     >
    //       {text}
    //     </ShowMoreText> */}
    //     <ShowMore
    //       ref={ref}
    //       lines={4}
    //       more={
    //         <button onClick={toggleLines}>
    //           ... <span className="underline">More</span>
    //         </button>
    //       }
    //       less={
    //         <button onClick={toggleLines} className="underline">
    //           {" "}
    //           Less
    //         </button>
    //       }
    //     >
    //       {text}
    //     </ShowMore>

    //     {images && images?.length > 0 && (
    //       <Swiper
    //         onSwiper={setThumbsSwiper as any}
    //         loop
    //         modules={[Thumbs, Mousewheel]}
    //         spaceBetween={10}
    //         slidesPerView={3}
    //         className="mt-[30px] lg:mt-[34px]"
    //         mousewheel
    //       >
    //         {images?.map((image, i) => (
    //           <SwiperSlide key={i}>
    //             <div
    //               onClick={() => handleImageClick(i)}
    //               className="relative pb-[100%] border border-[#f0efed] cursor-zoom-in"
    //             >
    //               <Image
    //                 src={urlForImage(image)}
    //                 fill
    //                 alt={platformName}
    //                 className="object-contain"
    //                 quality="100"
    //               />
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     )}
    //     <SliderFullScreen
    //       isOpen={isOpenSliderFullScreen}
    //       setIsOpen={setIsOpenSliderFullScreen}
    //       images={images as any[]}
    //       thumbsSwiper={thumbsSwiper}
    //       currentIndex={currentSlideIndex}
    //     />
    //   </div>
    //   <div className="border-t border-[#f0efed] pt-4 lg:pt-[25px] flex justify-between">
    //     <StarRating
    //       value={rating}
    //       text={<StarRating.Text>{formatRateNumber(rating)}</StarRating.Text>}
    //     />
    //     {platformLogoUrl && (
    //       // <div className="relative h-auto max-h-[14px] w-[70px] lg:h-auto lg:max-h-[22px] lg:w-[86px]">
    //       <div className="relative h-[21px] w-[86px]">
    //         <Image
    //           src={platformLogoUrl}
    //           fill
    //           alt={platformName}
    //           className="object-contain object-right"
    //           quality="100"
    //         />
    //       </div>
    //     )}
    //   </div>
    // </Card>
    <Card className="p-4 lg:p-[38px] rounded-none shadow-none border-none h-max">
      <div className="flex justify-between">
        <StarRating
          value={rating}
          text={<StarRating.Text>{formatRateNumber(rating)}</StarRating.Text>}
        />
        {platformLogoUrl && (
          // <div className="relative h-auto max-h-[14px] w-[70px] lg:h-auto lg:max-h-[22px] lg:w-[86px]">
          <div className="relative h-[21px] w-[86px]">
            <Image
              src={platformLogoUrl}
              fill
              alt={platformName}
              className="object-contain object-right"
              quality="100"
            />
          </div>
        )}
      </div>

      <div className="pt-[16px] lg:pt-[22px] text-sm font-light lg:text-base leading-normal lg:leading-normal w-full">
        <ShowMore
          ref={ref}
          lines={4}
          more={
            <button onClick={toggleLines}>
              ... <span className="underline">More</span>
            </button>
          }
          less={
            <button onClick={toggleLines} className="underline">
              {" "}
              Less
            </button>
          }
        >
          {text}
        </ShowMore>

        {/* {images && images?.length > 0 && (
          <Swiper
            onSwiper={setThumbsSwiper as any}
            loop
            modules={[Thumbs, Mousewheel]}
            spaceBetween={10}
            slidesPerView={3}
            className="mt-[30px] lg:mt-[34px]"
            mousewheel
          >
            {images?.map((image, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => handleImageClick(i)}
                  className="relative pb-[100%] border border-[#f0efed] cursor-zoom-in"
                >
                  <Image
                    src={urlForImage(image)}
                    fill
                    alt={platformName}
                    className="object-contain"
                    quality="100"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <SliderFullScreen
          isOpen={isOpenSliderFullScreen}
          setIsOpen={setIsOpenSliderFullScreen}
          images={images as any[]}
          thumbsSwiper={thumbsSwiper}
          currentIndex={currentSlideIndex}
        /> */}

        <div className="mt-[40px] lg:mt-[60px] flex gap-[10px] lg:gap-[18px] items-center">
          <Avatar className="size-[43px] lg:size-[43px] rounded-none">
            <AvatarImage src={avatar} alt={reviewerName} />
            <AvatarFallback>
              {generateAvatarInitials(reviewerName)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-1 lg:gap-[6px] items-center">
              <p className="font-light text-sm lg:text-[15px] leading-none">
                {reviewerName}
              </p>
            </div>
            <p
              title={reviewerInfo}
              className="text-xs lg:text-[15px] font-light text-[#53545c] mt-[6px] lg:mt-[8px] leading-none line-clamp-1"
            >
              {reviewerInfo}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ReviewCard;
