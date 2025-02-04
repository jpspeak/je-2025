import { getHomePageSetting } from "@/sanity/query/homePageSetting";
import { Metadata } from "next";
import { getProjects } from "@/sanity/query/project";
import { getReviews } from "@/sanity/query/review";
import Home from "./(shared)/components/Home";

export const metadata: Metadata = {
  title: {
    absolute:
      "Jeremy Ellsworth Designs LLC | Premium Brand & Vehicle Wrap Design Services",
  },
};

// Reduce revalidation time for fresher content
export const revalidate = 30;

export default async function HomePage({
  searchParams,
}: {
  searchParams: { industry: string };
}) {
  const industrySlug = searchParams.industry;

  const homePageSetting = await getHomePageSetting(industrySlug);

  const projects = await getProjects({
    limit: 12,
    industrySlug,
  });

  const reviewsMobile = await getReviews({ limit: 2 });
  const reviewsDesktop = await getReviews({ limit: 6 });

  return (
    <Home
      homePageSetting={homePageSetting}
      projects={projects}
      reviewsMobile={reviewsMobile}
      reviewsDesktop={reviewsDesktop}
      industrySlug={industrySlug}
    />
  );
}
