"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/app/(shared)/components/ui/dialog";
import ReactPlayer from "react-player";
import Image from "next/image";
import ModalCloseButton from "@/app/(shared)/components/ModalCloseButton";

function RecordingModal({ video }: { video: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className="size-[84px] absolute right-[4px] top-[4px]"
      >
        <Image
          src="/assets/images/yt-play-button.webp"
          width={100}
          height={100}
          alt="Play button"
        />
      </button>

      <DialogContent
        hideCloseButton
        className="!p-0 !rounded-none w-full lg:max-w-[860px] border-0"
      >
        <ModalCloseButton
          className="right-1 top-1 lg:right-[12px] lg:top-[12px] text-white bg-transparent z-[1]"
          onClick={() => setIsOpen(false)}
        />
        <div className="bg-black w-full pb-[75.8%] relative">
          <div className="w-full h-full absolute">
            <ReactPlayer
              width="100%"
              height="100%"
              url={video}
              controls
              playing
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RecordingModal;
