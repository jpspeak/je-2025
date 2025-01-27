import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(shared)/components/ui/accordion";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { cn } from "@/app/(shared)/lib/utils";

function BrandSolutionTiles({ solutions }: { solutions: any[] }) {
  return (
    <div className="grid grid-cols-2 gap-[10px]">
      {solutions.map((solution: any, i: number) => {
        const gridClasses = (index: number) => {
          const position = index % 3; // Pattern repeats every 3 items
          if (position === 0) return "col-span-2"; // Full width
          return "col-span-1"; // Single column
        };
        return (
          <div
            key={i}
            className={cn("w-full relative pb-[100%]", gridClasses(i))}
          >
            <Image
              src={urlForImage(solution.image)}
              alt={solution.name || "Brand solution"}
              fill
            />
          </div>
        );
      })}
    </div>
  );
}

async function BrandSolutionsAccordion({ solutions }: { solutions: any[] }) {
  const brandSolutionCategories = [
    ...new Set(
      solutions
        .sort((a, b) => a.category.position - b.category.position)
        .map((solution) => solution.category.name)
    ),
  ];

  const filterSolutionByCategory = (category: string) =>
    solutions.filter((solution) => solution.category.name === category);
  return (
    <Accordion
      type="multiple"
      className="w-full border-t border-[#e9eaec] mt-[30px] lg:mt-[42px]"
    >
      {brandSolutionCategories.map((brandSolutionCategory, i) => (
        <AccordionItem key={i} value={String(i)}>
          <AccordionTrigger className="text-[20px] items-center px-0 leading-tight lg:text-[22px] !no-underline py-[20px] lg:px-0 lg:py-[31px] font-gilroy font-bold border-b-0">
            <p className="max-w-[300px] lg:max-w-full">
              {brandSolutionCategory}
            </p>
          </AccordionTrigger>
          <AccordionContent className="px-0 pt-[10px] pb-[20px] lg:p-0">
            <BrandSolutionTiles
              solutions={filterSolutionByCategory(brandSolutionCategory)}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default BrandSolutionsAccordion;
