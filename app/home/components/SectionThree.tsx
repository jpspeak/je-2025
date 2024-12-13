import Image from "next/image";
import React from "react";

function SectionThree() {
  return (
    <section className="relative static-background-hard">
      <div className="container px-[20px] lg:px-[32px] mx-auto pt-[46px] lg:pt-[120px] pb-[50px] lg:pb-[125px]">
        <h2 className="text-center leading-[1.2] lg:leading-normal lg:w-max mx-auto font-gilroy text-[35px] lg:text-[50px] font-bold relative">
          Our Expertise,
          <br className="lg:hidden" /> Your Success
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31 28"
            className="hidden lg:block w-[28px] h-[26px] absolute -right-[20px] top-[8px]"
            fill="none"
          >
            <path
              fill="#262626"
              fillRule="evenodd"
              d="M2.006 9.173C2.74 6.555 3.11 3.814 3.45 1.156 3.521.583 3.124.05 2.565.01a1.016 1.016 0 0 0-1.143.86C1.095 3.446.745 6.105.038 8.6a1.039 1.039 0 0 0 .705 1.268 1.018 1.018 0 0 0 1.263-.695zm10.413 7.934c4.3-4.213 8.045-8.958 12.46-13.089a1.007 1.007 0 0 0 .049-1.431c-.386-.41-1.033-.45-1.446-.041-4.427 4.131-8.185 8.876-12.497 13.088a1.055 1.055 0 0 0-.012 1.473c.395.368 1.043.409 1.446 0zm16.538 7.895-7.383.367c-.563 0-.999.491-.971 1.064.028.573.507.982 1.071.982l7.394-.368a1.05 1.05 0 0 0 .965-1.105 1.018 1.018 0 0 0-1.076-.94z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] lg:gap-[35px] mt-[40px] lg:mt-[70px]">
          <div>
            <div className="w-full pb-[100%] bg-[#f3f4f6] whitespace-nowrap relative">
              <Image
                src="/assets/images/layer-12@3x.webp"
                fill
                alt="Branding"
                className="object-contain mix-blend-darken"
                quality={100}
              />
            </div>
            <p className="font-gilroy text-[24px] lg:text-[25px] text-center mt-[22px] lg:mt-[30px]">
              Branding
            </p>
          </div>
          <div>
            <div className="w-full pb-[100%] bg-[#f3f4f6] relative">
              <Image
                src="/assets/images/layer-9@3x.webp"
                fill
                alt="Website Design/Dev."
                className="object-contain mix-blend-darken"
                quality={100}
              />
            </div>
            <p className="font-gilroy text-[24px] lg:text-[25px] text-center mt-[22px] lg:mt-[30px]">
              Website Design/Dev.
            </p>
          </div>
          <div>
            <div className="w-full pb-[100%] bg-[#f3f4f6] relative">
              <Image
                src="/assets/images/layer-11@3x.webp"
                fill
                alt="App Design/Dev."
                className="object-contain mix-blend-darken"
                quality={100}
              />
            </div>
            <p className="font-gilroy text-[24px] lg:text-[25px] text-center mt-[22px] lg:mt-[30px]">
              App Design/Dev.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-[10px] lg:gap-[20px] justify-center mt-[30px] lg:mt-[60px] ">
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Logo Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Vehicle Wrap Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Uniform Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Product Label Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Illustration Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Social Media Ads
          </div>
          <div className="w-full lg:w-auto flex justify-center">
            <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
              Brand Guidelines
            </div>
          </div>
          <div className="w-full lg:w-max flex justify-center gap-[10px] lg:gap-[20px]">
            <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
              Icons
            </div>
            <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
              Poster Designs
            </div>
          </div>

          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Landing pages
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
