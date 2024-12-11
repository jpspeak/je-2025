import Image from "next/image";
import React from "react";

function SectionThree() {
  return (
    <section className="relative static-background-hard">
      <div className="container mx-auto pt-[120px] pb-[125px]">
        <h2 className="text-center font-gilroy text-[50px] font-bold">
          Our Expertise, Your Success
        </h2>
        <div className="grid grid-cols-3 gap-[35px] mt-[70px]">
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
            <p className="font-gilroy text-[25px] text-center mt-[30px]">
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
            <p className="font-gilroy text-[25px] text-center mt-[30px]">
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
            <p className="font-gilroy text-[25px] text-center mt-[30px]">
              App Design/Dev.
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] justify-center mt-[60px]">
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Logo Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Vehicle Wrap Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Uniform Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Product Label Design
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Illustration Design
          </div>
        </div>
        <div className="flex gap-[20px] mt-[20px] justify-center">
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Social Media Ads
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Brand Guidelines
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Icons
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Poster Designs
          </div>
          <div className="bg-[#f3f4f6] whitespace-nowrap px-[20px] h-[52px] flex items-center text-[15px] font-medium">
            Landing pages
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
