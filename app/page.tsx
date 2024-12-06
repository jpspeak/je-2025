import Image from "next/image";
import Header from "./(shared)/components/Header";
import ProjectMarquee from "./(shared)/components/ProjectMarque";
import { getHomePageSetting } from "@/sanity/query/homePageSetting";
import { Metadata } from "next";
import StarRating from "./(shared)/components/StarRating";

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
      <section className="relative static-background-hard">
        <div className="container mx-auto flex flex-col items-center relative">
          <Image
            src="/assets/images/hero-image.webp"
            width={1542}
            height={1542}
            alt="JE design logo sketch"
            className="w-[514px] pt-[28px] lg:pt-[48px] absolute"
          />
          {/* <h1 className="hidden lg:block max-w-[804px] text-center leading-[1.18] text-[68px] font-gilroy font-bold pt-[436px]">
            Igniting creativity, fueling brands since 2004
          </h1> */}
          <h1 className="max-w-[848px] text-center leading-[1.05] text-[55px] lg:text-[68px] font-gilroy font-bold pt-[318px] lg:pt-[450px]">
            Building brands that break the mold <br className="lg:hidden" />
            since &apos;04
          </h1>
          <p className="hidden lg:block font-light text-[17px] leading-[1.65] max-w-[560px] text-center mt-[38px]">
            We craft bold digital experiences that transform brands. Turning
            visionary ideas into powerful visual stories that make businesses
            stand out.
          </p>
          <p className="lg:hidden font-light text-[17px] leading-[1.65] max-w-[560px] text-center mt-[38px]">
            je.design We craft bold digital experiences that transform brands.
            Turning visionary ideas into powerful visual stories that make
            businesses stand out.
          </p>
          <div className="lg:hidden flex items-center gap-[30px] mt-[50px]">
            <a
              href="https://web.facebook.com/jnellsworth"
              aria-label="Visit us on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 38"
                className="w-[11px] h-[16px] mr-[4px]"
              >
                <path
                  fillRule="evenodd"
                  d="m19.611 21.384 1.088-6.878h-6.804v-4.462c0-1.882.95-3.716 3.998-3.716h3.093V.473S18.179.009 15.495.009c-5.604 0-9.266 3.293-9.266 9.256v5.241H0v6.878h6.229v16.625h7.666V21.384h5.716z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jnellsworth"
              aria-label="Visit us on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                className="size-[17.5px]"
              >
                <path
                  fillRule="evenodd"
                  d="M17.485 8.493a8.96 8.96 0 0 0-8.969 8.977 8.96 8.96 0 0 0 8.969 8.977 8.96 8.96 0 0 0 8.969-8.977 8.96 8.96 0 0 0-8.969-8.977zm0 14.813c-3.208 0-5.831-2.617-5.831-5.836a5.839 5.839 0 0 1 5.831-5.836 5.839 5.839 0 0 1 5.831 5.836c0 3.219-2.623 5.836-5.831 5.836zm11.427-15.18a2.088 2.088 0 0 1-2.092 2.094 2.088 2.088 0 0 1-2.091-2.094 2.093 2.093 0 1 1 4.183 0zm5.94 2.125c-.132-2.804-.772-5.289-2.825-7.336C29.982.868 27.499.228 24.697.087c-2.888-.164-11.544-.164-14.432 0-2.795.133-5.277.774-7.33 2.82C.883 4.954.25 7.439.11 10.243c-.164 2.891-.164 11.555 0 14.446.133 2.804.773 5.289 2.825 7.336 2.053 2.047 4.528 2.687 7.33 2.828 2.888.164 11.544.164 14.432 0 2.802-.133 5.285-.774 7.33-2.828 2.045-2.047 2.685-4.532 2.825-7.336.164-2.891.164-11.547 0-14.438zM31.121 27.79a5.902 5.902 0 0 1-3.325 3.328c-2.303.914-7.766.704-10.311.704s-8.016.203-10.311-.704a5.902 5.902 0 0 1-3.325-3.328c-.914-2.304-.703-7.773-.703-10.32 0-2.547-.203-8.023.703-10.32a5.902 5.902 0 0 1 3.325-3.328c2.303-.915 7.766-.704 10.311-.704s8.016-.203 10.311.704a5.902 5.902 0 0 1 3.325 3.328c.913 2.304.703 7.773.703 10.32 0 2.547.21 8.023-.703 10.32z"
                />
              </svg>
            </a>
            <a
              href="https://www.x.com/jnellsworth_"
              aria-label="Visit us on X/Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[20px] h-[18px]"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
              </svg>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-[19px] mt-[50px]">
            <StarRating
              value={5}
              text={<StarRating.Text>5.0</StarRating.Text>}
            />
            <Image
              src="/assets/images/google-black-icon.webp"
              width={185}
              height={62}
              alt="Google logo"
              className="w-[62px] h-[21px] mt-1"
            />
            <Image
              src="/assets/images/facebook-black-icon.webp"
              width={251}
              height={48}
              alt="Facebook logo"
              className="w-[83.5px] h-[16px]"
            />
          </div>
          <p className="hidden lg:block font-delicious-handrawn absolute bottom-0 z-[1] text-[20.8px] leading-none right-[4%] -rotate-[10deg] max-w-[137px] text-[#808080]">
            Have a look at some of our recent work!
            <Image
              src="/assets/images/arrow-down-gray.webp"
              width={81}
              height={176}
              alt="Arrow down"
              className="absolute -right-[16%] w-[27px] h-[59px] rotate-[10deg] scale-x-[-1]"
            />
          </p>
        </div>
        <div className="mt-[62px] lg:mt-[94px] relative">
          <ProjectMarquee projects={homePageSetting.projectMarquee} />
        </div>
        <div className="container mx-auto flex flex-col items-center relative mt-[66px] lg:mt-[120px]">
          <Image
            src="/assets/images/twentyyrs.webp"
            width={333}
            height={342}
            alt="20 years"
            className="w-[111px] h-[114px]"
          />
          <p className="font-gilroy text-[23px] lg:text-[25px] font-bold mt-[20px] text-center">
            Over 20 years of experience
          </p>
          <p className="mt-[8px] text-[15px] font-light text-center max-w-[300px]">
            Trusted by over 8,000 businesses across the United States
          </p>
          <p className="hidden lg:block relative max-w-[770px] mt-[40px] text-[50px] font-bold font-gilroy text-center leading-tight">
            When you want your project done right the first time, consider a
            companies experience.
            <Image
              src="/assets/images/experience-underline.webp"
              width={722}
              height={33}
              alt="Underline"
              className="w-[240px] h-[11px] absolute right-[15%] bottom-[-3%]"
            />
          </p>
        </div>
      </section>
    </>
  );
}
