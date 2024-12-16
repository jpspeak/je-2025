import React from "react";
import RecordingsCarousel from "./RecordingsCarousel";
import RecordingCard from "./RecordingCard";
import { urlForImage } from "@/sanity/lib/image";

function Recordings({ recordings }: { recordings: any[] }) {
  console.log(recordings[0].video.asset.url);
  return (
    <section className="static-background-hard relative">
      <div className="pt-[50px] lg:pt-[100px] pb-[228px] overflow-hidden">
        <h2 className="font-gilroy text-[35px] lg:text-[50px] text-center mb-[30px] lg:mb-[65px]">
          Recordings
        </h2>
        <div className="hidden lg:block">
          <RecordingsCarousel recordings={recordings} />
        </div>
        <div className="flex flex-col lg:hidden px-[20px] gap-[35px]">
          {recordings?.slice(0, 2).map((recording) => {
            return (
              <RecordingCard
                key={recording._id}
                title={recording.title}
                description={recording.description}
                thumbnail={urlForImage(recording.thumbnail)}
                video={recording.video.asset.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Recordings;
