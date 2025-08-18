import React from "react";
import BrandSolutions from "@/app/home/components/BrandSolutions";
import Hero from "@/app/home/components/Hero";
import IndustrySelector from "@/app/home/components/IndustrySelector";
import IndustrySelectorClient from "@/app/home/components/IndustrySelectorClient";
import Projects from "@/app/home/components/Projects";
import Reviews from "@/app/home/components/Reviews";
import SectionFive from "@/app/home/components/SectionFive";
import SectionFour from "@/app/home/components/SectionFour";
import SectionOne from "@/app/home/components/SectionOne";
import SectionTwo from "@/app/home/components/SectionTwo";
import WorkInAction from "@/app/home/components/WorkInAction";
import Footer from "./Footer";

async function Home({
  industrySlug,
  homePageSetting,
  projects,
  reviewsMobile,
  reviewsDesktop,
}: {
  industrySlug?: string;
  homePageSetting: any;
  projects: any[];
  reviewsMobile: any[];
  reviewsDesktop: any[];
}) {
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
          <IndustrySelector
            Component={IndustrySelectorClient}
            data-gtm-id="industry-selector"
            data-gtm-type="filter"
            data-gtm-placement="brand-projects"
          />
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

export default Home;
