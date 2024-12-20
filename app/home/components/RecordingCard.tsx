import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

function RecordingCard({ recording }: { recording: any }) {
  return (
    <div className="relative">
      <div className="relative pb-[56%]">
        <Image
          src={urlForImage(recording.thumbnail)}
          alt={recording.title}
          fill
          quality={100}
          className="w-[488px] h-[275px]"
        />
      </div>
      <h3 className="lg:px-[14px] mt-[20px] lg:mt-[22px] font-gilroy font-bold text-[20px] lg:text-[22px]">
        {recording.title}
      </h3>
      <p className="lg:px-[14px] mt-[6px] text-[15px] font-light lg:text-[#555555]">
        {recording.description}
      </p>

      <Link
        href={`/recordings/${recording.slug?.current}`}
        className="size-[84px] absolute right-[4px] top-[4px]"
      >
        <Image
          src="/assets/images/yt-play-button.webp"
          width={100}
          height={100}
          alt="Play button"
        />
      </Link>
    </div>
  );
}

export default RecordingCard;
