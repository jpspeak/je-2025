"use client";

import React, { useState } from "react";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import TeamCarousel from "./TeamCarousel";

function SectionTwo({ homePageSetting }: { homePageSetting: any }) {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const handleTeamImageClick = (id: number) => {
    setSelectedTeamIndex(id);
  };
  const [isOpenTeamCarousel, setIsOpenTeamCarousel] = useState(false);
  const selectedTeam = homePageSetting.team?.find(
    (team: any, i: number) => i === selectedTeamIndex
  );
  return (
    <section className="border-y border-[#e9eaec] relative static-background-hard mb-10">
      <div className="container mx-auto grid grid-cols-2">
        <div className="border-r border-[#e9eaec] pt-[80px] pb-[54px] pr-[100px] relative">
          <h2 className="font-gilroy text-[45px] font-bold">Introduction</h2>
          <p className="text-[17px] font-light lg:leading-[28px] mt-2 lg:max-w-[370px]">
            Our team provides personalized assistance at every step.
          </p>
          <div className="grid grid-cols-4 mt-[36px] bg-[#e9eaec] border border-[#e9eaec] gap-[1px]">
            {homePageSetting.team?.slice(0, 7).map((team: any, i: number) => {
              return (
                <div
                  key={team._id}
                  onClick={() => handleTeamImageClick(i)}
                  className="pb-[100%] bg-[#f6f6f8] relative cursor-pointer"
                >
                  <Image
                    src={urlForImage(team.image as any)}
                    alt="Team image"
                    fill
                  />
                </div>
              );
            })}

            <div
              onClick={() => setIsOpenTeamCarousel(true)}
              className="pb-[100%] bg-[#f6f6f8] relative cursor-pointer"
            >
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <p className="text-[20px] font-medium">+11</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-[22px]">
            <p className="text-[20px] font-gilroy font-bold leading-none">
              {selectedTeam.name}
            </p>
            <span className="text-[13px] leading-none">
              {selectedTeam.info}
            </span>
          </div>
          {!isOpenTeamCarousel && (
            <>
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
            </>
          )}
        </div>
        <div className="pt-[80px] pb-[54px] pl-[100px] relative">
          <h2 className="font-gilroy text-[45px] font-bold">Our Process</h2>
          <div className="text-[17px] font-light lg:leading-[28px] mt-2 lg:max-w-[400px]">
            Seamless, reliable service to keep your projects on track. Schedule
            your{" "}
            <CalComModalTrigger
              containerclass="inline-block"
              className="relative h-0 px-0 bg-transparent hover:bg-transparent py-0 text-black font-poppins font-light text-[17px]"
            >
              <span className="border-b border-dashed border-black">
                discovery call
              </span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 227.5 2.5"
                className="absolute bottom-0 !w-full"
              >
                <path
                  stroke="#000"
                  strokeDasharray="4, 2"
                  fill="none"
                  d="M.5 1.5v-1h226v1H.5z"
                />
              </svg> */}
            </CalComModalTrigger>
          </div>
          <div className="mt-[36px] w-[417px] relative">
            <div className="pl-[68px]">
              <div className="flex items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-[24px]"
                  color="#000"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.312 1.93c-1.343-.18-3.064-.18-5.255-.18h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43zM12.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8zm-3 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4zm6 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4zm-9 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm12 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z"
                    fill="#0977ff"
                  />
                </svg>
                <p className="text-[20px] font-gilroy font-bold">Discovery</p>
              </div>
              <p className="max-w-[300px] text-[13px] leading-[20px] pl-[2px]">
                Conduct a discovery call to understand your needs and provide a
                tailored quote.
              </p>
            </div>

            <div className="size-[30px] bg-black rounded-full flex items-center justify-center absolute top-[46px] -right-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-[12px]"
                color="#000"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 1.5a1 1 0 0 1 1 1v1.112c1.23.186 2.354.598 3.26 1.19 1.254.818 2.198 2.065 2.198 3.587a1 1 0 1 1-2 0c0-.626-.389-1.324-1.291-1.913C14.773 5.893 13.48 5.5 12 5.5s-2.773.393-3.667.976c-.902.59-1.291 1.287-1.291 1.913 0 .41.077.718.204.957.124.233.326.456.662.656.71.424 1.977.72 4.092.72 2.212 0 4.056.276 5.375 1.037.679.392 1.226.917 1.596 1.592.367.672.529 1.435.529 2.26 0 1.827-.997 3.105-2.435 3.87-1.007.535-2.244.831-3.565.953V21.5a1 1 0 1 1-2 0v-1.01c-1.753-.073-3.37-.53-4.61-1.27-1.335-.8-2.39-2.044-2.39-3.609a1 1 0 1 1 2 0c0 .583.4 1.284 1.417 1.892.997.596 2.438.997 4.083.997 1.718 0 3.156-.27 4.127-.786.914-.486 1.373-1.152 1.373-2.103 0-.564-.11-.981-.283-1.3-.172-.313-.438-.587-.842-.82-.848-.49-2.253-.769-4.375-.769-2.219 0-3.931-.296-5.116-1.002-.612-.365-1.088-.841-1.403-1.434-.313-.588-.44-1.234-.44-1.897 0-1.522.945-2.769 2.2-3.587 1.145-.748 2.64-1.21 4.259-1.29V2.5a1 1 0 0 1 1-1z"
                  fill="#fff"
                />
              </svg>
            </div>

            <div className="mt-[25px] pl-[187px]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-[24px]"
                  color="#000"
                  fill="none"
                >
                  <path
                    d="M12 2.25a.75.75 0 0 1 .75.75c0 2.006 1.01 4.075 2.593 5.657 1.582 1.582 3.65 2.593 5.657 2.593a.75.75 0 0 1 0 1.5c-2.006 0-4.075 1.01-5.657 2.593-1.582 1.582-2.593 3.65-2.593 5.657a.75.75 0 0 1-1.5 0c0-2.006-1.01-4.075-2.593-5.657C7.075 13.76 5.007 12.75 3 12.75a.75.75 0 0 1 0-1.5c2.006 0 4.075-1.01 5.657-2.593C10.24 7.075 11.25 5.007 11.25 3a.75.75 0 0 1 .75-.75zM19.25 1.25c.213 0 .398.148.445.356l.235 1.04c.16.71.714 1.264 1.424 1.424l1.04.235a.456.456 0 0 1 0 .89l-1.04.235c-.71.16-1.264.714-1.424 1.424l-.235 1.04a.457.457 0 0 1-.89 0l-.235-1.04a1.885 1.885 0 0 0-1.424-1.424l-1.04-.235a.456.456 0 0 1 0-.89l1.04-.235a1.885 1.885 0 0 0 1.424-1.424l.235-1.04a.457.457 0 0 1 .445-.356zM4.75 15.75c.213 0 .398.148.445.356l.235 1.04c.16.71.714 1.264 1.424 1.424l1.04.235a.457.457 0 0 1 0 .89l-1.04.235c-.71.16-1.264.714-1.424 1.424l-.235 1.04a.456.456 0 0 1-.89 0l-.235-1.04a1.885 1.885 0 0 0-1.424-1.424l-1.04-.235a.457.457 0 0 1 0-.89l1.04-.235a1.885 1.885 0 0 0 1.424-1.424l.235-1.04a.456.456 0 0 1 .445-.356z"
                    fill="#ffc809"
                  />
                </svg>

                <p className="text-[20px] font-gilroy font-bold">Design</p>
              </div>
              <p className="max-w-[200px] text-[13px] leading-[20px] pl-[2px]">
                Begin project, craft and refine designsto your vision.
              </p>
            </div>

            <div className="size-[30px] bg-black rounded-full flex items-center justify-center absolute bottom-[95px] -left-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-[12px]"
                color="#000"
                fill="none"
              >
                <path
                  d="M9 13.5 18.5 4 22 7.5 9.059 20 2 13.353 5 10l4 3.5z"
                  fill="#fff"
                />
              </svg>
            </div>

            <div className="mt-[25px] pl-[68px]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-[24px]"
                  color="#000"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm2.25 4.957a.75.75 0 0 0-.5-1.414c-.483.171-.93.49-1.309.823-.386.339-.745.73-1.046 1.091-.146.175-.282.346-.402.505a2.057 2.057 0 0 0-.264-.21l-.055-.038A1.019 1.019 0 0 0 15 6.75a.75.75 0 0 0-.116 1.491.271.271 0 0 1 .012.008c.056.037.228.176.433.587a.75.75 0 0 0 1.304.066c.163-.23.643-.91.914-1.234.271-.326.575-.654.883-.924.316-.277.597-.458.82-.537z"
                    fill="#72d622"
                  />
                  <path
                    d="M9.748 1.25h-.055c-1.541 0-2.774 0-3.756.103-1.01.105-1.871.328-2.616.855-.39.276-.739.605-1.034.977-.57.72-.813 1.557-.927 2.53-.11.938-.11 2.11-.11 3.559v2.583c0 1.418 0 2.531.06 3.432.06.917.184 1.682.465 2.393.843 2.137 2.617 3.8 4.837 4.581 1.383.487 3.07.487 5.909.487h.44c1.554 0 2.587 0 3.446-.302 1.376-.485 2.485-1.519 3.014-2.858.183-.465.259-.95.294-1.495.035-.528.035-1.176.035-1.975v-.7a.976.976 0 0 0-.974-.977.976.976 0 0 0-.973.977v.667c0 .84 0 1.423-.03 1.88-.03.448-.085.706-.163.903-.31.785-.976 1.427-1.848 1.734-.504.177-1.17.191-3.005.191-.604 0-1.141 0-1.622-.004-.4-.002-.806-.114-1.07-.414a2.574 2.574 0 0 1-.648-1.71l.037-1.04c.007-.38-.005-.824-.12-1.252a2.416 2.416 0 0 0-1.708-1.71c-.428-.114-.872-.126-1.252-.118l-1.04.036a2.574 2.574 0 0 1-1.731-.666c-.296-.266-.404-.67-.405-1.068V9.335c0-1.524 0-2.581.096-3.39.092-.788.262-1.22.517-1.543.178-.224.39-.425.632-.596.358-.253.841-.42 1.695-.51.87-.09 2.001-.091 3.61-.091a.975.975 0 0 0 .973-.978.975.975 0 0 0-.973-.977z"
                    fill="#72d622"
                  />
                </svg>

                <p className="text-[20px] font-gilroy font-bold">Delivery</p>
              </div>
              <p className="max-w-[268px] text-[13px] leading-[20px] pl-[2px]">
                Share approved design files and provide ongoing expert support.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpenTeamCarousel && (
        <div className="bg-[#f3f4f6] absolute top-0 w-full h-full overflow-hidden">
          <div className="container mx-auto py-[60px]">
            <button
              onClick={() => setIsOpenTeamCarousel(false)}
              className="mx-auto font-gilroy text-[25px] font-bold block"
            >
              Close
            </button>
            <div className="mt-[50px]">
              <TeamCarousel team={homePageSetting.team} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SectionTwo;
