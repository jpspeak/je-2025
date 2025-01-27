"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SliderFullScreen } from "@/app/(shared)/components/slider-full-screen/SliderFullScreen";
import { cn } from "@/app/(shared)/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

function ProjectModal2Images({ project }: { project: any }) {
  const [isOpenSliderFullScreen, setIsOpenSliderFullScreen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleImageClick = (slideIndex: number) => {
    setIsOpenSliderFullScreen(true);
    setCurrentSlideIndex(slideIndex);
  };

  let projectImages =
    project.images?.map((image: any) => image.image).flat() || [];
  projectImages = [...projectImages, project.mainImage];

  return (
    <>
      <div className="grid grid-cols-1 gap-2 lg:gap-[20px]">
        <Image
          src={urlForImage(project.mainImage as any)}
          width={900}
          height={900}
          alt={project.mainImage?.alt || ""}
          className="w-full cursor-zoom-in"
          quality={100}
          onClick={() => handleImageClick(1)}
        />
        {project.images?.map((image: any, i: number) => {
          let gridColClass = "grid-cols-1";
          switch (image._type) {
            case "twoImages":
              gridColClass = "grid-cols-2";
              break;
            case "threeImages":
              gridColClass = "lg:grid-cols-3";
              break;
            case "fourImages":
              gridColClass = "lg:grid-cols-4";
              break;
          }
          return (
            <div
              key={i}
              className={cn(
                "grid gap-2 lg:gap-[20px] grid-cols-2",
                gridColClass
              )}
            >
              {image.image?.map((image: any, i: number) => (
                <Image
                  key={i}
                  src={urlForImage(image as any)}
                  width={900}
                  height={900}
                  alt={image?.alt || ""}
                  className="w-full object-cover cursor-zoom-in"
                  quality={100}
                  onClick={() => handleImageClick(i + 1)}
                />
              ))}
            </div>
          );
        })}
      </div>
      <SliderFullScreen
        isOpen={isOpenSliderFullScreen}
        setIsOpen={setIsOpenSliderFullScreen}
        images={projectImages}
        currentIndex={currentSlideIndex}
      />
    </>
  );
}

export default ProjectModal2Images;
