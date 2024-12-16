import React from "react";
import Image from "next/image";
import RecordingModal from "./RecordingModal";

function RecordingCard({
  title,
  description,
  thumbnail,
  video,
}: {
  title: string;
  description: string;
  thumbnail: any;
  video: any;
}) {
  return (
    <div className="relative">
      <div className="relative pb-[56%]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          quality={100}
          className="w-[488px] h-[275px]"
        />
      </div>
      <h3 className="lg:px-[14px] mt-[20px] lg:mt-[22px] font-gilroy font-bold text-[20px] lg:text-[22px]">
        {title}
      </h3>
      <p className="lg:px-[14px] mt-[6px] text-[15px] font-light lg:text-[#555555]">
        {description}
      </p>
      <RecordingModal video={video} />
    </div>
  );
}

export default RecordingCard;
