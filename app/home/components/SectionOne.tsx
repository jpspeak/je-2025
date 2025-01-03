import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import ProjectMarquee from "@/app/(shared)/components/ProjectMarque";
import StarRating from "@/app/(shared)/components/StarRating";
import { Button } from "@/app/(shared)/components/ui/button";
import { cn } from "@/app/(shared)/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SectionOne({ homePageSetting }: { homePageSetting: any }) {
  return (
    <section className="relative static-background-hard pb-[50px] lg:pb-[118px] ">
      <Image
        src="/assets/images/je.design-hero.webp"
        alt="Background"
        width={3000}
        height={1497}
        quality={100}
        className="absolute left-1/2 -translate-x-1/2 -top-[95px] lg:top-0 -z-[1] object-cover h-[1116px] w-[2560px] object-[42%,top] lg:object-[24%,top]"
      />
      <div className="container mx-auto flex flex-col items-center relative">
        <Image
          src="/assets/images/logo-black.webp"
          width={100}
          height={100}
          alt="je.design logo"
          className="size-[60px] lg:size-[70px] object-contain mt-[54px] lg:mt-[75px]"
          quality={100}
          priority
        />
        <p className="text-[12px] lg:text-[15px] mt-[12px] text-center">
          www.je.design
        </p>
        {/* <h1 className="hidden lg:block max-w-[804px] text-center leading-[1.18] text-[68px] font-gilroy font-bold pt-[436px]">
            Igniting creativity, fueling brands since 2004
          </h1> */}
        <h1 className="font-gilroy text-[58px] lg:text-[80px] leading-[58px] lg:leading-[90px] font-bold text-center mt-[40px] lg:mt-[70px] max-w-[330px] lg:max-w-[740px]">
          Crafting Tomorrows Iconic Brands
        </h1>
        <div className="flex flex-col lg:flex-row mt-[40px] gap-[20px]">
          <StarRating
            value={5}
            text={
              <StarRating.Text className="mr-[6px] text-[18px]">
                1,800+
              </StarRating.Text>
            }
          />
          <div className="flex items-center gap-[18px]">
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
        </div>
        <p className="text-[#555555] text-base leading-[23px] max-w-[300px] lg:max-w-[450px] text-center mt-[34px] lg:mt-[30px]">
          Offering tailored creative solutions and brand packages designed to
          amplify your business—efficient, impactful,
          <br /> and built for growth.
        </p>
        <div className="mt-[36px] lg:mt-[44px] w-full flex flex-col lg:flex-row justify-center items-center gap-[15px]">
          <CalComModalTrigger
            variant="outline"
            containerclass="w-full max-w-[252px] lg:max-w-[172px]"
            className="w-full lg:w-full text-black"
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
            <Button className="w-full max-w-[252px] lg:max-w-[172px]">
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

        <p className="hidden lg:block font-delicious-handrawn absolute -bottom-[48px] z-[1] text-[20.8px] leading-none left-0 -rotate-[10deg] max-w-[177px] text-black">
          Have a look at some past projects we’ve worked on
          <Image
            src="/assets/images/arrow-down-gray.webp"
            width={81}
            height={176}
            alt="Arrow down"
            className="absolute top-[30px] -left-[24px] w-[27px] rotate-[10deg] h-[58px] brightness-0"
          />
        </p>
      </div>
      <div className="hidden lg:block mt-[62px] lg:mt-[140px] relative left-1/2 -translate-x-1/2 max-w-[2560px]">
        <ProjectMarquee projects={homePageSetting.projectMarquee} />
      </div>
      <div className="lg:hidden grid grid-cols-2 gap-[10px] px-[20px] mt-[77px]">
        {homePageSetting.projectMarquee.map((project: any, i: number) => {
          const gridClasses = (index: number) => {
            const position = index % 3; // Pattern repeats every 3 items
            if (position === 0) return "col-span-2"; // Full width
            return "col-span-1"; // Single column
          };
          return (
            <div
              key={i}
              className={cn("w-full relative pb-[100%]", gridClasses(i))}
            >
              <Image
                src={urlForImage(project.mainImage)}
                alt={project.title}
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="container mx-auto flex flex-col items-center relative mt-[66px] lg:mt-[120px]">
        <Image
          src="/assets/images/twentyyrs.webp"
          width={333}
          height={342}
          alt="20 years"
          className="w-[135px] h-[138px]"
        />
        {/* <p className="font-gilroy text-[23px] lg:text-[25px] font-bold mt-[20px] text-center">
          Over 20 years of experience
        </p> */}
        <p className="mt-[30px] text-[15px] font-light text-center lg:max-w-[240px] max-w-[210px] text-[#555555]">
          Trusted by over 8,000 Startups across the United States
        </p>
        <p className="hidden lg:block relative max-w-[820px] mt-[40px] text-[50px] font-bold font-gilroy text-center leading-tight">
          Partnering with Home Service, Tech, Food/Beverage, Fashion and
          Transportation startups.
        </p>
        <div className="hidden lg:flex container text-black justify-center px-3 lg:px-8 relative items-center gap-[12px] overflow-hidden static-background-hard mt-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 49 50"
            className="size-[26px]"
          >
            <path
              fillRule="evenodd"
              fill="#FFAE00"
              d="M48.837 25.134c0 13.376-10.844 24.219-24.219 24.219C11.242 49.353.399 38.51.399 25.134.399 11.758 11.242.915 24.618.915c13.375 0 24.219 10.843 24.219 24.219zm-13.834-3.45c.483-3.223-1.971-4.955-5.327-6.111l1.089-4.365-2.658-.662-1.059 4.25c-.699-.174-1.417-.338-2.13-.501l1.068-4.278-2.656-.663-1.09 4.364a84.266 84.266 0 0 1-1.697-.399l.003-.013-3.665-.915-.706 2.838s1.971.452 1.93.48c1.076.268 1.271.98 1.238 1.545l-1.24 4.973c.074.019.17.046.276.089l-.28-.07-1.738 6.967c-.132.327-.466.817-1.218.631.026.039-1.932-.482-1.932-.482l-1.319 3.042 3.458.862c.644.161 1.274.33 1.895.488l-1.1 4.416 2.654.662 1.09-4.368c.704.19 1.41.373 2.117.549l-1.085 4.348 2.658.662 1.099-4.407c4.532.858 7.94.512 9.374-3.586 1.156-3.3-.058-5.204-2.442-6.445 1.736-.4 3.045-1.542 3.393-3.901zm-6.072 8.513c-.821 3.3-6.377 1.516-8.179 1.069l1.46-5.849c1.801.449 7.578 1.339 6.719 4.78zm.822-8.561c-.749 3.002-5.374 1.477-6.874 1.103l1.323-5.305c1.5.373 6.332 1.071 5.551 4.202z"
            />
          </svg>
          <p className="hidden lg:block text-[15px]">
            je.design now accepts Bitcoin, Litecoin, Solana and XRP -{" "}
            <Link href={homePageSetting.tickerLink || ""}>Learn more</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
