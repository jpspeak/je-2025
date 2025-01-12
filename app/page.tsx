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
  title: "Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
};

export const revalidate = 60;

export default async function HomePage({
  searchParams,
}: {
  searchParams: { industry: string; sortBy: string };
}) {
  const industrySlug = searchParams.industry;

  const homePageSetting = await getHomePageSetting();

  const projects = await getProjects({
    limit: 12,
    industrySlug,
  });

  const reviewsMobile = await getReviews({ limit: 2 });
  const reviewsDesktop = await getReviews({ limit: 6 });

  return (
    <>
      <Hero homePageSetting={homePageSetting} industrySlug={industrySlug} />
      <SectionOne homePageSetting={homePageSetting} />
      <SectionTwo homePageSetting={homePageSetting} />
      <BrandSolutions />
      <SectionFour />
      <Projects
        initialProjects={projects}
        industrySelector={
          <IndustrySelector Component={IndustrySelectorClient} />
        }
      />
      <WorkInAction workInActionImages={homePageSetting.workInActionImages} />
      <Reviews
        initialReviewsDesktop={reviewsDesktop}
        initialReviewsMobile={reviewsMobile}
      />
      <SectionFive faqs={homePageSetting.faqs || []} />
      <Footer />
    </>
  );
}
