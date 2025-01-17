"use client";

import React, { useState } from "react";
import TeamCarousel from "./TeamCarousel";
import TeamCarouselMobile from "./TeamCarouselMobile";
import { cn } from "@/app/(shared)/lib/utils";

function SectionTwo({ homePageSetting }: { homePageSetting: any }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const departments = [
    "All",
    ...new Set(homePageSetting.team.map((team: any) => team.department?.name)),
  ] as string[];
  const team =
    selectedDepartment === "All"
      ? homePageSetting.team
      : homePageSetting.team.filter(
          (team: any) => team.department?.name === selectedDepartment
        );

  return (
    <section className="relative static-background-hard">
      <div className="container px-0 relative lg:hidden">
        <h2 className="font-gilroy text-[36px] font-bold text-center leading-none">
          Team je.design
        </h2>

        <div className="mt-[35px] pb-[40px]">
          <TeamCarouselMobile team={homePageSetting.team} />
        </div>
      </div>

      <div className="container max-w-[2608px] p-0 lg:px-[25px]">
        <div className="top-0 w-full h-full hidden lg:block border-y border-[#e9eaec]">
          <div className="container mx-auto pt-[72px] pb-[132px] relative overflow-y-visible">
            <div className="bg-[#fff600] hidden lg:grid absolute size-[180px] place-items-center rounded-full -top-[15%] -right-[6%]">
              <svg
                className="w-[41px] h-[26px] rotate-[90deg] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                viewBox="0 0 34 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="#1B1B1B"
                  strokeWidth="2.2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path d="m22.557 1 9.85 9.85-9.85 9.848" />
                  <path strokeLinecap="square" d="M31.843 10.85H1.333" />
                </g>
              </svg>

              <svg
                id="rotatingText"
                viewBox="0 0 180 180"
                width="180"
                height="180"
                className="animate-spin-slow"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 90, 90
                  m -65, 0
                  a 65, 65 0 0, 1 130, 0
                  a 65, 65 0 0, 1 -130, 0"
                  ></path>
                </defs>
                <text>
                  <textPath
                    xlinkHref="#circle"
                    startOffset="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-[17px] font-light font-poppins"
                  >
                    Your five-star creative design agency!
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="flex items-center gap-[24px]">
              <h2 className="font-gilroy text-[40px] font-bold block leading-none pb-[6px]">
                Team je.design
              </h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 46"
                  className="w-[16px] h-[22px]"
                >
                  <path
                    stroke="#000"
                    strokeWidth="2"
                    fill="none"
                    d="m2.659 2 29 41.001"
                  />
                </svg>
              </span>
              <ul className="flex items-center text-[17px] gap-[40px] text-[#555555]">
                {departments.map((department: string, i: number) => (
                  <li
                    key={i}
                    className={cn(
                      "cursor-pointer border-b leading-none border-transparent hover:border-black hover:text-black",
                      selectedDepartment === department &&
                        "border-black text-black font-semibold"
                    )}
                    onClick={() => setSelectedDepartment(department)}
                  >
                    {department}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[38px]">
              <TeamCarousel team={team} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
