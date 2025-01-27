import React from "react";
import WorkInActionMarquee from "@/app/(shared)/components/WorkInActionMarquee";

function WorkInAction({ workInActionImages }: { workInActionImages: any[] }) {
  return (
    <section id="work-in-action" className="static-background-hard relative">
      <div className="container max-w-[2608px] lg:px-[25px] p-0">
        <div className="pt-[50px] lg:pt-[150px] overflow-hidden relative -bottom-[4px]">
          <h2 className="font-gilroy text-[36px] lg:text-[50px] text-center mb-[30px] lg:mb-[65px]">
            Our Work in Action
          </h2>
          <WorkInActionMarquee workInActionImages={workInActionImages} />
        </div>
      </div>
    </section>
  );
}

export default WorkInAction;
