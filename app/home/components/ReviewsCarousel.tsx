"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { urlForImage } from "@/sanity/lib/image";

function ReviewsCarousel({
  infiniteReviews,
  onReachEnd,
  hasMore,
}: {
  infiniteReviews: any[][];
  onReachEnd: () => void;
  hasMore: boolean;
}) {
  const swiperRef = useRef<any>();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.activeIndex;
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);

    // Check if we're within 3 slides from the end
    if (currentIndex >= totalSlides - 4) {
      onReachEnd();
    }
  };
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
        onSlideChange={handleSlideChange}
        className="!overflow-visible"
      >
        {infiniteReviews?.map((reviews: any[]) =>
          reviews.map((review) => (
            <SwiperSlide key={review._id} className="group">
              <ReviewCard
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
          ))
        )}
      </Swiper>
      {infiniteReviews.flat().length > 3 && (
        <div className="team-carousel-nav relative top-[80px]">
          <button
            className="swiper-button-prev"
            onClick={(e) => {
              e.stopPropagation();
              swiperRef.current?.slidePrev();
            }}
            disabled={isAtStart}
          ></button>
          <button
            className="swiper-button-next"
            onClick={(e) => {
              e.stopPropagation();
              swiperRef.current?.slideNext();
            }}
            disabled={!hasMore && isAtEnd}
          ></button>
        </div>
      )}
    </>
  );
}

export default ReviewsCarousel;
