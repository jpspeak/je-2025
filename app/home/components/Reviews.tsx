import React from "react";
import Image from "next/image";
import ReviewsCarousel from "./ReviewsCarousel";

function Reviews({ reviews }: { reviews: any[] }) {
  return (
    <section className="bg-[#f6f6f8] border-t border-[#e9eaec]">
      <div className="container py-[124px]">
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
        <h2 className="text-center mt-[4px] text-[50px] font-gilroy font-bold">
          1.8k Success Stories
        </h2>
        <p className="text-[17px] text-center max-w-[492px] mx-auto mt-[20px] mb-[64px]">
          At je.design, we are committed to your success. We believe that our
          success lies in your success, and we are dedicated to helping you
          achieve it.
        </p>
        <ReviewsCarousel reviews={reviews} />
        <p className="mt-[46px] text-[15px] font-light text-center lg:max-w-[270px] max-w-[210px] text-[#555555] mx-auto">
          Trusted by over 8,000 Startups across the United States
        </p>
      </div>
    </section>
  );
}

export default Reviews;
