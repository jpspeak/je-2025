import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

function TeamCarouselItem({ team }: { team: any }) {
  // const [isOpenQr, setIsOpenQr] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full pb-[100%] relative  border border-[#e9eaeb]">
        <Image
          src={urlForImage(team.image)}
          fill
          alt={team.name}
          className="object-cover"
        />
      </div>
      {/* {isOpenQr && (
        <div className="w-full pb-[100%] border border-[#e9eaeb] absolute bg-white z-[1]">
          <button
            onClick={() => setIsOpenQr(false)}
            className="absolute z-[1] right-[16px] top-[16px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-[28px]"
              color="#000"
              fill="none"
            >
              <path
                d="m18 6-6 6m0 0-6 6m6-6 6 6m-6-6L6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="bg-white p-[48px] w-full h-full absolute">
            <QRCode
              value={`http://localhost:3000/${team.name}`}
              className="w-full h-full"
            />
          </div>
        </div>
      )} */}
      <p className="text-[20px] font-gilroy font-bold mt-[20px]">{team.name}</p>
      <p className="text-[13px] text-[#7c7c7c]">{team.info}</p>
    </div>
  );
}

export default TeamCarouselItem;
