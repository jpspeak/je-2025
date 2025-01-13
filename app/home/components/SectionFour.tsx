import React from "react";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import { Button } from "@/app/(shared)/components/ui/button";
import VideoPlayer from "@/app/(shared)/components/VideoPlayer";
import Link from "next/link";

function SectionFour() {
  return (
    <section className="relative static-background-hard">
      <div className="container max-w-[2608px] p-0 lg:px-[25px]">
        <div className="border-y border-[#e9eaec]">
          <div className="container px-0 lg:px-[32px] mx-auto relative pt-[40px] lg:py-[110px] grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="w-full h-0 pb-[65.17%] relative rounded-none bg-black">
                <div className="w-full pb-[65.17%] absolute top-1/2 -translate-y-1/2">
                  <VideoPlayer
                    thumbnail="/assets/images/commercial-thumbnail.webp"
                    isPlaying
                    showControls
                    url="https://www.youtube.com/watch?v=BpuC_iyq0l8&ab_channel=JeremyEllsworthDesignsLLC"
                  />
                </div>
              </div>
            </div>
            <div className="lg:pl-[86px] pb-[44px] lg:pb-0 mt-[38px] lg:mt-0 flex flex-col justify-center">
              <h2 className="text-[35px] lg:text-[50px] max-w-[224px] lg:max-w-full font-gilroy px-[20px] lg:px-0 leading-[1.14] lg:leading-[1.2]">
                Innovating Beyond Boundaries
              </h2>

              <p className="max-w-[396px] text-base lg:text-[17px] leading-[1.63] px-[20px] lg:px-0 font-light mt-[24px] lg:mt-[20px]">
                Watch as we transform brands through bold design, bringing
                visionary ideas to life through strategic creativity.
              </p>
              <div className="flex items-center gap-[20px] mt-[40px] px-[20px] lg:px-0">
                <CalComModalTrigger
                  variant="outline"
                  containerclass="w-1/2 lg:w-[172px]"
                  className="lg:w-full"
                >
                  Book a call
                </CalComModalTrigger>
                <Link href="/#pricing" className="w-1/2 lg:w-[172px]">
                  <Button className="w-full">See pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
