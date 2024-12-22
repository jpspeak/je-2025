import React from "react";
import RecordingsCarousel from "./RecordingsCarousel";
import RecordingCard from "./RecordingCard";

function Recordings({ recordings }: { recordings: any[] }) {
  return (
    <section className="static-background-hard relative">
      <div className="pt-[50px] lg:pt-[150px] pb-[60px] lg:pb-[228px] overflow-hidden">
        <h2 className="font-gilroy text-[35px] lg:text-[50px] text-center mb-[30px] lg:mb-[65px]">
          Watch us work
        </h2>
        <div className="hidden lg:block">
          <RecordingsCarousel recordings={recordings} />
        </div>
        <div className="flex flex-col lg:hidden px-[20px] gap-[35px]">
          {recordings
            ?.slice(0, 2)
            .map((recording) => (
              <RecordingCard key={recording._id} recording={recording} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Recordings;
