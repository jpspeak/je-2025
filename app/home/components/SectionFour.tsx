import React from "react";
import ReactPlayerServer from "@/app/(shared)/components/ReactPlayerServer";

function SectionFour() {
  return (
    <section className="border-y border-[#e9eaec] relative static-background-hard">
      <div className="container mx-auto relative py-[110px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-[calc(25%+16px)] border-r h-full absolute z-0">
          <div className="absolute -right-[8px] -top-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 2"
              className="w-[15px] h-[1px]"
            >
              <path fillRule="evenodd" d="M0 2V0h30v2H0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2 15"
              className="w-[1px] h-[8px] top-0 absolute left-1/2 -translate-x-1/2"
            >
              <path fillRule="evenodd" d="M0 0h2v15H0V0z" />
            </svg>
          </div>

          <div className="absolute -right-[8px] -bottom-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 2"
              className="w-[15px] h-[1px]"
            >
              <path fillRule="evenodd" d="M0 2V0h30v2H0z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2 15"
              className="w-[1px] h-[8px] absolute left-1/2 -translate-x-1/2 -top-[7px]"
            >
              <path fillRule="evenodd" d="M2 15H0V0h2v15z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="w-full h-0 pb-[65.17%] relative rounded-none bg-black">
            <div className="w-full pb-[65.17%] absolute top-1/2 -translate-y-1/2">
              <ReactPlayerServer />
            </div>
          </div>
        </div>
        <div className="lg:pl-[86px] mt-[28px] lg:mt-0 flex flex-col justify-center">
          <h1 className="text-[50px] font-gilroy leading-[1.2]">
            Innovating Beyond Boundaries
          </h1>

          <p className="text-[17px] font-light mt-[24px] lg:mt-[31px]">
            Watch as we transform brands through bold design, bringing visionary
            ideas to life through strategic creativity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
