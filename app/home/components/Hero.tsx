import React from "react";
import { Button } from "@/app/(shared)/components/ui/button";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import StarRating from "@/app/(shared)/components/StarRating";
import Ticker from "@/app/(shared)/components/Ticker";
import Image from "next/image";
import Link from "next/link";

function Hero({ tickerLink }: { tickerLink: string }) {
  return (
    <div className="container max-w-[2608px] p-[30px] static-background-hard relative">
      <div className="relative pt-[6px]">
        <div className="absolute w-full top-0">
          <Ticker link={tickerLink || ""} />
        </div>
        <Image
          src="/assets/images/herobg-food.webp"
          alt="Background"
          width={4000}
          height={1273}
          quality={100}
          className="h-[808px] object-cover"
        />
        <div className="container mx-auto flex flex-col items-center absolute top-0 w-full left-1/2 -translate-x-1/2">
          <Image
            src="/assets/images/logo-white.webp"
            width={100}
            height={100}
            alt="je.design logo"
            className="size-[60px] lg:size-[70px] object-contain mt-[54px] lg:mt-[100px]"
            quality={100}
            priority
          />
          <p className="text-[12px] lg:text-[15px] mt-[12px] text-center text-white">
            www.je.design
          </p>
          {/* <h1 className="hidden lg:block max-w-[804px] text-center leading-[1.18] text-[68px] font-gilroy font-bold pt-[436px]">
            Igniting creativity, fueling brands since 2004
          </h1> */}
          <h1 className="font-gilroy text-white text-[58px] lg:text-[75px] leading-[58px] lg:leading-[90px] font-bold text-center mt-[36px] lg:mt-[40px] max-w-[330px] lg:max-w-[730px]">
            Building Brands That Empower Growth
          </h1>
          <div className="flex flex-col lg:flex-row mt-[30px] gap-[20px]">
            <StarRating
              value={5}
              activeFillColor="#fff719"
              text={
                <StarRating.Text className="mr-[6px] text-[18px] text-white">
                  1,800+
                </StarRating.Text>
              }
            />
            <div className="flex items-center gap-[18px]">
              <Image
                src="/assets/images/google-white-icon.webp"
                width={185}
                height={62}
                alt="Google logo"
                className="w-[62px] h-[21px] mt-1"
              />
              <Image
                src="/assets/images/fb-white-icon.webp"
                width={251}
                height={48}
                alt="Facebook logo"
                className="w-[83.5px] h-[16px]"
              />
            </div>
          </div>
          <p className="text-white text-base leading-[23px] max-w-[300px] lg:max-w-[450px] text-center mt-[34px] lg:mt-[30px]">
            Offering tailored creative solutions and brand packages designed to
            amplify your business—efficient, impactful,
            <br /> and built for growth.
          </p>
          <div className="mt-[36px] lg:mt-[44px] w-full flex flex-col lg:flex-row justify-center items-center gap-[15px]">
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
              <Button className="w-full max-w-[252px] lg:max-w-[172px] bg-white text-black hover:bg-white hover:bg-opacity-80">
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

          {/* <p className="hidden lg:block font-delicious-handrawn absolute -bottom-[48px] z-[1] text-[20.8px] leading-none left-0 -rotate-[10deg] max-w-[177px] text-black">
            Have a look at some past projects we’ve worked on
            <Image
              src="/assets/images/arrow-down-gray.webp"
              width={81}
              height={176}
              alt="Arrow down"
              className="absolute top-[30px] -left-[24px] w-[27px] rotate-[10deg] h-[58px] brightness-0"
            />
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
