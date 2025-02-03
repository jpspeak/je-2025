import { getHomePageSetting } from "@/sanity/query/homePageSetting";
import { Metadata } from "next";
import { getProjects } from "@/sanity/query/project";
import { getReviews } from "@/sanity/query/review";
import SectionOne from "./home/components/SectionOne";
import SectionTwo from "./home/components/SectionTwo";
import SectionFour from "./home/components/SectionFour";
import Projects from "./home/components/Projects";
import IndustrySelector from "./home/components/IndustrySelector";
import Reviews from "./home/components/Reviews";
import SectionFive from "./home/components/SectionFive";
import Footer from "./(shared)/components/Footer";
import Hero from "./home/components/Hero";
import WorkInAction from "./home/components/WorkInAction";
import IndustrySelectorClient from "./home/components/IndustrySelectorClient";
import BrandSolutions from "./home/components/BrandSolutions";

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
  searchParams: { industry: string; sortBy: string };
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
    <main>
      <Hero homePageSetting={homePageSetting} industrySlug={industrySlug} />

      <SectionOne
        projectMarquee={homePageSetting?.projectMarquee || []}
        tickerLink={homePageSetting?.tickerLink || ""}
      />
      <SectionTwo team={homePageSetting?.team || []} />

      {homePageSetting?.brandSolutions &&
        homePageSetting?.brandSolutions.length > 0 && (
          <BrandSolutions brandSolutions={homePageSetting?.brandSolutions} />
        )}

      <SectionFour />

      <Projects
        initialProjects={projects}
        industrySelector={
          <IndustrySelector Component={IndustrySelectorClient} />
        }
      />
      {homePageSetting?.workInActionImages &&
        homePageSetting?.workInActionImages.length > 0 && (
          <WorkInAction
            workInActionImages={homePageSetting?.workInActionImages}
          />
        )}

      <Reviews
        initialReviewsDesktop={reviewsDesktop}
        initialReviewsMobile={reviewsMobile}
      />
      <SectionFive faqs={homePageSetting?.faqs || []} />

      <Footer />
    </main>
  );
}
