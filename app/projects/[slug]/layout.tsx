import React, { Suspense } from "react";
import Home from "@/app/(shared)/components/Home";
import { getHomePageSetting } from "@/sanity/query/homePageSetting";
import { getProjects } from "@/sanity/query/project";
import { getReviews } from "@/sanity/query/review";

export const revalidate = 30;

async function ProjectLayout({ children }: { children: React.ReactNode }) {
  const homePageSetting = await getHomePageSetting();
  const projects = await getProjects({
    limit: 12,
  });
  const reviewsMobile = await getReviews({ limit: 2 });
  const reviewsDesktop = await getReviews({ limit: 6 });
  return (
    <Suspense>
      <Home
        homePageSetting={homePageSetting}
        projects={projects}
        reviewsMobile={reviewsMobile}
        reviewsDesktop={reviewsDesktop}
      />
      {children}
    </Suspense>
  );
}

export default ProjectLayout;
