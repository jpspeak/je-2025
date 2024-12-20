"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { urlForImage } from "@/sanity/lib/image";

function ReviewsCarousel({ reviews }: { reviews: any[] }) {
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
            slidesPerView: 3,
            spaceBetween: 35,
          },
        }}
        className="!overflow-visible"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="group">
            <ReviewCard
              key={review._id}
              avatar={urlForImage(review.avatar as any)}
              reviewerName={review.reviewerName || ""}
              reviewerInfo={review.reviewerInfo || ""}
              rating={review.rating || 5}
              text={review.reviewText}
              platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
              platformName={review.reviewPlatformName}
              images={review.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {reviews && reviews.length > 3 && (
        <div className="reviews-carousel-nav relative top-[38px]">
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

export default ReviewsCarousel;
