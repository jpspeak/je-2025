"use client";

import { Button } from "@/app/(shared)/components/ui/button";
import { getProjects } from "@/sanity/query/project";
import { Loader } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWRInfinite from "swr/infinite";

function Projects({
  initialProjects,
  industrySelector,
}: {
  initialProjects: any[];
  industrySelector: ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const industrySlug = searchParams.get("industry") || undefined;

  const getKey = (pageIndex: number, previousPageData: any) => {
    // reached the end
    if (previousPageData && previousPageData.length === 0) return null;

    // first page, we don't have `previousPageData`
    if (pageIndex === 0)
      return [
        `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
      ];

    // add the cursor to the API endpoint
    const lastCreatedAt =
      previousPageData.length >= 1
        ? previousPageData[previousPageData.length - 1]._createdAt
        : "";

    const lastOrderRank =
      previousPageData.length >= 1
        ? previousPageData[previousPageData.length - 1].orderRank
        : "";

    return [
      `${pathname}?lastOrderRank=${lastOrderRank}&lastCreatedAt=${lastCreatedAt}&${searchParams.toString() ? `${searchParams.toString()}` : ""}`,
      lastCreatedAt,
      lastOrderRank,
    ];
  };

  const PROJECTS_LIMIT = 1;

  const { data, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    ([, lastCreatedAt, lastOrderRank]) => {
      return getProjects({
        industrySlug,
        lastCreatedAt,
        lastOrderRank,
        limit: PROJECTS_LIMIT,
      });
    },
    {
      fallbackData: [initialProjects],
    }
  );

  const hasMore = data && data[data.length - 1]?.length >= PROJECTS_LIMIT;

  const loadMore = async () => {
    setSize(size + 1);
  };

  const render = () => {
    if (data?.[0]?.length === 0)
      return (
        <p className="text-sm lg:text-lg text-center lg:text-left text-muted-foreground mt-[60px] lg:mt-[100px]">
          NO RESULTS FOUND
        </p>
      );

    return (
      <div className="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[35px] mt-[70px]">
        {data?.map((projects: any[]) =>
          projects.map((project) => {
            const src = urlForImage(project.mainImage as any);
            return (
              <Link
                href={`/projects/${project.slug?.current}`}
                key={project._id}
                className="relative w-full pb-[100%] bg-[#f3f4f6] rounded-none overflow-hidden"
              >
                <Image
                  loader={() => src}
                  src={src}
                  fill
                  alt={project.title || ""}
                  className="object-contain"
                  quality={100}
                />
              </Link>
            );
          })
        )}
      </div>
    );
  };
  return (
    <section className="border-y border-[#e9eaec] relative static-background-hard">
      <div className="container mx-auto relative pt-[90px] pb-[118px]">
        <div className="flex justify-between items-end">
          <div className="max-w-[520px]">
            <h1 className="text-[50px] font-gilroy leading-[1.2]">
              Brand Projects
            </h1>

            <p className="text-[17px] font-light mt-[24px] lg:mt-[31px]">
              &quot;Strategic brand transformations that tell powerful stories
              and create lasting connections with your audience.
            </p>
          </div>
          {industrySelector}
        </div>

        {render()}

        {hasMore && (
          <div className="flex justify-center mt-[40px] lg:mt-[65px]">
            {isValidating ? (
              <Loader className="size-4 animate-spin text-muted-foreground" />
            ) : (
              <Button
                className="mx-auto flex items-center gap-[13px] text-white min-w-[250px] h-[71px] text-[20px] font-gilroy font-bold"
                onClick={loadMore}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-[11px]"
                  color="#000"
                  fill="none"
                >
                  <path
                    d="M10.75 13.25V20h2.5v-6.75H20v-2.5h-6.75V4h-2.5v6.75H4v2.5h6.75z"
                    fill="#fff"
                  />
                </svg>
                Show more
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
