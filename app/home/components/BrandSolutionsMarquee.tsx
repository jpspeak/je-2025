"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/(shared)/lib/utils";

function BrandSolutionsMarquee({ solutions }: { solutions: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState(
    solutions[0].category.name || null
  );
  const brandSolutionCategories = [
    ...new Set(solutions.map((solution) => solution.category.name)),
  ];
  const filteredSolutions = solutions.filter(
    (solution) => solution.category.name === selectedCategory
  );

  filteredSolutions.forEach((solution) => {
    while (filteredSolutions.length < 18) {
      filteredSolutions.push(solution);
    }
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className="h-[800px] mx-auto grid place-items-center relative overflow-hidden">
        <div className="size-0 relative grid place-items-center z-10 -top-[1130px] rotate-clockwise-slow">
          {filteredSolutions.map((solution, i) => {
            const degree = -(i * 20);

            return (
              <div
                key={i}
                className={`h-[3000px] w-[350px] absolute flex items-end`}
                style={{ transform: `rotate(${degree}deg)` }}
              >
                <div className="w-full h-[350px] bg-gray relative">
                  <Image
                    src={solution.image}
                    alt="Design solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}

          {/* <div className="rotate-[-20deg] h-[3000px] w-[350px] bg-orange-200 absolute border border-black opacity-40 flex items-end">
        <div className="w-full h-[350px] bg-black"></div>
      </div> */}
        </div>
      </div>

      <ul className="mt-[24px] flex gap-[52px] container overflow-visible">
        {brandSolutionCategories.map((brandSolutionCategory) => {
          const isActive = brandSolutionCategory === selectedCategory;
          return (
            <li
              onClick={() => handleCategoryClick(brandSolutionCategory)}
              key={brandSolutionCategory}
              className={cn(
                "cursor-pointer font-gilroy font-bold text-[40px] py-[36px] border-b border-transparent text-[#d9dadc] whitespace-nowrap",
                isActive && "border-black text-black"
              )}
            >
              {brandSolutionCategory}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BrandSolutionsMarquee;
