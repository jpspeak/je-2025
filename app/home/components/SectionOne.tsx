import React from "react";
import ProjectMarquee from "@/app/(shared)/components/ProjectMarque";
import { cn } from "@/app/(shared)/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

function ProjectTiles({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-2 gap-[10px]">
      {projects.map((project: any, i: number) => {
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
  );
}

function SectionOne({ homePageSetting }: { homePageSetting: any }) {
  return (
    <section className="relative static-background-hard pb-[50px] lg:pb-[118px] ">
      <div className="hidden lg:block relative left-1/2 -translate-x-1/2 max-w-[2560px]">
        <ProjectMarquee projects={homePageSetting.projectMarquee} />
      </div>
      <div className="lg:hidden px-[20px] pt-[20px]">
        <ProjectTiles projects={homePageSetting.projectMarquee} />
      </div>
      <div className="container mx-auto flex flex-col items-center relative mt-[66px] lg:mt-[88px]">
        <Image
          src="/assets/images/twentyyrs.webp"
          width={333}
          height={342}
          alt="20 years"
          className="w-[135px] h-[138px]"
        />
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
          <p className="font-light hidden lg:block text-[15px]">
            je.design now accepts Bitcoin, Litecoin, Solana and XRP -{" "}
            <Link href={homePageSetting.tickerLink || ""}>Learn more</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
