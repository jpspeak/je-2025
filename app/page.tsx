import Header from "./(shared)/components/Header";
import { getHomePageSetting } from "@/sanity/query/homePageSetting";
import { Metadata } from "next";
import SectionOne from "./home/components/SectionOne";
import SectionTwo from "./home/components/SectionTwo";
import SectionThree from "./home/components/SectionThree";
import SectionFour from "./home/components/SectionFour";

export const metadata: Metadata = {
  title: "Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
};

export default async function Home() {
  const homePageSetting = await getHomePageSetting();
  // console.log(homePageSetting);
  return (
    <>
      <Header tickerLink={homePageSetting.tickerLink} />
      <SectionOne homePageSetting={homePageSetting} />
      <SectionTwo homePageSetting={homePageSetting} />
      <SectionThree />
      <SectionFour />
    </>
  );
}
