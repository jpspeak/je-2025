"use client";

import React, { useState } from "react";
import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { Dialog, DialogContent } from "@/app/(shared)/components/ui/dialog";
import { urlForImage } from "@/sanity/lib/image";
import ModalCloseButton from "@/app/(shared)/components/ModalCloseButton";

function ReviewModal({ review }: { review: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className="size-[45px] grid place-items-center absolute rounded-full bg-white right-[20px] top-[20px] lg:bottom-[20px]"
        data-gtm-id="review-modal-open"
        data-gtm-type="modal"
        data-gtm-placement="brand-projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[18px] h-[15px]"
          color="#000"
          fill="none"
        >
          <path
            d="M5.948 12.75c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.243.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08h.104c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v.104c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.725 1.65-.456.456-1.023.642-1.65.726-.595.08-1.345.08-2.243.08h-.104z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.795 20.047a1 1 0 0 1 .657-1.252c3.108-.969 5.298-3.72 5.298-6.908V7.75a1 1 0 0 1 2 0v4.137c0 4.146-2.842 7.614-6.702 8.817a1 1 0 0 1-1.253-.657z"
            fill="currentColor"
          />
          <path
            d="M17.948 12.75c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.243.084-.627.27-1.194.726-1.65.455-.455 1.022-.64 1.65-.725.594-.08 1.343-.08 2.242-.08h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v.104c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08h-.104z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.795 20.047a1 1 0 0 1 .658-1.252c3.107-.969 5.297-3.72 5.297-6.908V7.75a1 1 0 1 1 2 0v4.137c0 4.146-2.842 7.614-6.703 8.817a1 1 0 0 1-1.252-.657z"
            fill="currentColor"
          />
        </svg>
      </button>

      <DialogContent hideCloseButton className="!p-0 !rounded-none w-[90%]">
        <ModalCloseButton
          className="-right-[15px] -top-[17px] lg:-right-[15px] lg:-top-[16px] bg-[rgba(0,0,0,0.5)] lg:bg-[rgba(0,0,0,0.5)]  size-[30px]"
          iconClassName="size-[20px]"
          onClick={() => setIsOpen(false)}
        />
        <ReviewCard
          avatar={urlForImage(review.avatar as any)}
          reviewerName={review.reviewerName || ""}
          reviewerInfo={review.reviewerInfo || ""}
          rating={review.rating || 5}
          text={review.reviewText}
          platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
          platformName={review.reviewPlatformName}
          images={review.images}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ReviewModal;
