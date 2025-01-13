import React from "react";
import Link from "next/link";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import BrandSolutionsMarquee from "./BrandSolutionsMarquee";
import { Button } from "@/app/(shared)/components/ui/button";

function BrandSolutions({ brandSolutions }: { brandSolutions: any }) {
  // const brandSolutions = [
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Logo Design",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Website / Landing Pages",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Vehicle Wrap Design",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  //   {
  //     image: "/assets/images/website-design-sample.webp",
  //     category: {
  //       name: "Business Card",
  //     },
  //   },
  // ];

  return (
    <section className="hidden lg:block static-background-hard relative">
      <div className="container max-w-[2608px] p-0 lg:px-[25px]">
        <div className="container pt-[80px] absolute left-1/2 -translate-x-1/2 z-20">
          <h2 className="leading-[1.2] font-gilroy text-[35px] lg:text-[50px] font-bold relative text-center">
            Creative Solutions
          </h2>
          <p className="text-[17px] max-w-[536px] mt-[20px] font-light text-center mx-auto relative">
            We solve brand challenges through distinctive design -{" "}
            <strong className="font-medium">
              from bold logos to eye-catching vehicle wraps and strategic
              websites and more.
            </strong>
          </p>
          <div className="hidden relative lg:flex mt-[36px] lg:mt-[44px] w-full flex-col lg:flex-row justify-center items-center gap-[15px]">
            <CalComModalTrigger
              variant="secondary"
              containerclass="w-full max-w-[252px] lg:max-w-[172px]"
              className="w-full lg:w-full"
            >
              <span>Book a call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="8"
                color="#fff"
                fill="none"
                className="lg:hidden"
              >
                <path
                  d="m13.398 6.5 7.102 5.498-7.102 5.502V13H3.5v-2h9.898V6.5z"
                  fill="#000000"
                />
              </svg>
            </CalComModalTrigger>
            <Link
              href="/#pricing"
              className="w-full max-w-[252px] lg:max-w-[172px]"
            >
              <Button
                variant="outline"
                className="w-full max-w-[252px] lg:max-w-[172px] bg-white text-black hover:bg-white hover:bg-opacity-80"
              >
                <span>See pricing</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="8"
                  height="12"
                  color="#fff"
                  fill="none"
                  className="lg:hidden"
                >
                  <path
                    d="M17.5 13.398 12.002 20.5 6.5 13.398H11V3.5h2v9.898h4.5z"
                    fill="#ffffff"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full">
          <BrandSolutionsMarquee solutions={brandSolutions} />
        </div>
      </div>
    </section>
  );
}

export default BrandSolutions;
