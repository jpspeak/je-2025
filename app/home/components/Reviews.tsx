"use client";

import React from "react";
import Image from "next/image";
import ReviewsCarousel from "./ReviewsCarousel";
import useSWRInfinite from "swr/infinite";
import { getReviews } from "@/sanity/query/review";
import { Loader } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { Button } from "@/app/(shared)/components/ui/button";
import { isMobile } from "react-device-detect";

function Reviews({
  initialReviewsDesktop,
  initialReviewsMobile,
}: {
  initialReviewsDesktop: any[];
  initialReviewsMobile: any[];
}) {
  const getKey = (pageIndex: number, previousPageData: any) => {
    // reached the end
    if (previousPageData && previousPageData.length === 0) return null;

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return ["/reviews"];

    // add the cursor to the API endpoint
    const lastCreatedAt =
      previousPageData.length >= 1
        ? previousPageData[previousPageData.length - 1]._createdAt
        : "";

    return [`/reviews?lastCreatedAt=${lastCreatedAt}`, lastCreatedAt];
  };

  let REVIEWS_LIMIT = 6;
  let initialReviews = initialReviewsDesktop;
  if (isMobile) {
    REVIEWS_LIMIT = 2;
    initialReviews = initialReviewsMobile;
  }

  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    ([, lastCreatedAt]) => {
      return getReviews({
        lastCreatedAt,
        limit: REVIEWS_LIMIT,
      });
    },
    {
      fallbackData: [initialReviews],
    }
  );

  const hasMore = data && data[data.length - 1]?.length >= REVIEWS_LIMIT;

  const loadMore = async () => {
    setSize(size + 1);
  };

  const render = () => {
    if (isLoading)
      return (
        <div className="flex justify-center lg:justify-start mt-[60px] lg:mt-[100px]">
          <Loader className="size-4 lg:size-8 animate-spin text-muted-foreground" />
        </div>
      );
    if (data?.[0]?.length === 0)
      return (
        <p className="text-sm lg:text-lg text-center lg:text-left text-muted-foreground mt-[60px] lg:mt-[100px]">
          NO RESULTS FOUND
        </p>
      );

    if (data)
      return data?.map((reviews: any[]) =>
        reviews.map((review) => {
          return (
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
          );
        })
      );
    return null;
  };
  return (
    <section id="reviews" className="relative static-background-hard">
      <div className="container max-w-[2608px] lg:p-[25px] lg:pt-0 p-0">
        <div className="bg-[#f6f6f8] ">
          <div className="container px-[20px] lg:px-[32px] pt-[50px] pb-[43px] lg:py-[124px]">
            <div className="flex items-center gap-[18px] justify-center">
              <Image
                src="/assets/images/google-colored-icon.webp"
                width={185}
                height={62}
                alt="Google logo"
                className="w-[62px] h-[21px] mt-1"
              />
              <Image
                src="/assets/images/fb-colored-icon.webp"
                width={251}
                height={48}
                alt="Facebook logo"
                className="w-[83.5px] h-[16px]"
              />
            </div>
            <h2 className="text-center leading-[1.5] mt-[20px] lg:mt-[4px] text-[35px] lg:text-[50px] font-gilroy font-bold">
              1.8k Success
              <br className="lg:hidden" /> Stories
            </h2>
            <p className="text-[17px] font-light text-center max-w-[492px] mx-auto mt-[28px] lg:mt-[20px] mb-[46px] lg:mb-[64px]">
              <strong className="font-medium">
                At je.design, we are committed to your success.
              </strong>
              <br />
              We believe that our success lies in your success, and we are
              dedicated to helping you achieve it.
            </p>
            <div className="hidden lg:block">
              <ReviewsCarousel
                infiniteReviews={data || []}
                onReachEnd={loadMore}
                hasMore={!!hasMore}
              />
            </div>
            <div className="lg:hidden">
              <div className=" flex flex-col gap-[20px]">{render()}</div>
              {hasMore && (
                <div className="flex justify-center mt-[28px] lg:mt-[65px]">
                  {isValidating ? (
                    <Loader className="size-4 animate-spin text-muted-foreground" />
                  ) : (
                    <Button
                      variant="outline"
                      className="mx-auto flex items-center gap-[13px] text-black min-w-[250px] h-[60px] lg:h-[71px] text-[20px] font-gilroy font-bold w-full lg:w-max"
                      onClick={loadMore}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="size-[11px]"
                        color="#000"
                        fill="none"
                      >
                        <path
                          d="M10.75 13.25V20h2.5v-6.75H20v-2.5h-6.75V4h-2.5v6.75H4v2.5h6.75z"
                          fill="#000000"
                        />
                      </svg>
                      Show more
                    </Button>
                  )}
                </div>
              )}
            </div>
            <p className="mt-[40px] lg:mt-[146px] text-[15px] font-light text-center lg:max-w-[270px] max-w-[210px] text-[#555555] mx-auto">
              Trusted by over 8,000 Startups across the United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
