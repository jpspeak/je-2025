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
  metadataBase: new URL("https://je.design"),
  title: {
    template: "%s | Jeremy Ellsworth Designs LLC",
    default:
      "Jeremy Ellsworth Designs LLC | Premium Brand & Vehicle Wrap Design Services",
  },
  description:
    "Transform your business with Jeremy Ellsworth Designs LLC's expert branding services. Specializing in custom logo design, vehicle wraps, and comprehensive brand identity solutions. Based in USA, serving clients worldwide. Visit je.design for innovative design solutions that make your brand stand out.",
  keywords: [
    "brand design",
    "logo design",
    "vehicle wraps",
    "Jeremy Ellsworth Designs",
    "brand identity",
    "graphic design services",
    "professional logo designer",
    "custom vehicle wraps",
    "business branding",
    "creative design agency",
  ],
  alternates: {
    canonical: "https://je.design",
  },
  openGraph: {
    title:
      "Jeremy Ellsworth Designs LLC | Premium Brand & Vehicle Wrap Design Services",
    description:
      "Transform your business with expert branding services. Specializing in custom logo design, vehicle wraps, and comprehensive brand identity solutions.",
    url: "https://je.design",
    siteName: "Jeremy Ellsworth Designs LLC",
    locale: "en_US",
    type: "website",
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

  const homePageSetting = await getHomePageSetting();

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
      <BrandSolutions brandSolutions={homePageSetting?.brandSolutions || []} />
      <SectionFour />
      <Projects
        initialProjects={projects}
        industrySelector={
          <IndustrySelector Component={IndustrySelectorClient} />
        }
      />
      <WorkInAction
        workInActionImages={homePageSetting?.workInActionImages || []}
      />
      <Reviews
        initialReviewsDesktop={reviewsDesktop}
        initialReviewsMobile={reviewsMobile}
      />
      <SectionFive faqs={homePageSetting?.faqs || []} />
      <Footer />
    </main>
  );
}
