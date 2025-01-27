import Image from "next/image";
import React from "react";

function SectionThree() {
  return (
    <section className="relative static-background-hard">
      <div className="container px-[20px] lg:px-[32px] mx-auto pt-[40px] lg:pt-[70px] pb-[50px] lg:pb-[105px]">
        <h2 className="leading-[1.2] font-gilroy text-[35px] lg:text-[50px] font-bold relative">
          Our Brand <br className="lg:hidden" /> Solutions
        </h2>
        <p className="text-[17px] max-w-[552px] mt-[20px]">
          We solve brand challenges through distinctive design - from bold logos
          to powerful websites and strategic social media.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[35px] mt-[40px] lg:mt-[45px]">
          <div>
            <div className="w-full pb-[100%] bg-[#f3f4f6] whitespace-nowrap relative">
              <Image
                src="/assets/images/layer-12@3x.webp"
                fill
                alt="Branding"
                className="object-contain mix-blend-darken"
                quality={100}
              />
              <p className="absolute bottom-[20px] left-[30px] font-gilroy text-[20px] lg:text-[22px]">
                Branding
              </p>
            </div>
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
              <p className="absolute bottom-[20px] left-[30px] font-gilroy text-[20px] lg:text-[22px]">
                Website Design/Dev.
              </p>
            </div>
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
              <p className="absolute bottom-[20px] left-[30px] font-gilroy text-[20px] lg:text-[22px]">
                App Design/Dev.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[10px] lg:gap-[20px] mt-[30px] lg:mt-[40px] ">
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
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Brand Guidelines
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Icons
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[38px] lg:h-[52px] flex items-center text-[11.3px] lg:text-[15px] font-medium">
            Poster Designs
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
