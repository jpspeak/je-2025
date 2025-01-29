import React from "react";
import CalComModalTrigger from "./CalComModalTrigger";
import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative static-background-hard">
      <div className="container max-w-[2608px] lg:p-[25px] p-0">
        <div className="pt-[103px] relative bg-black static-background-light">
          <div className="container">
            <Image
              src="/assets/images/logo-white.webp"
              alt="je.design logo"
              width={600}
              height={600}
              className="size-[81px] mx-auto"
            />
            <h1 className="text-[50px] leading-[1.1] mt-[40px] text-center lg:text-[80px] text-white font-gilroy relative z-[1]">
              Ready to amplify your brand?
            </h1>
            <CalComModalTrigger
              variant="secondary"
              containerclass="h-full bg-black relative left-1/2 -translate-x-1/2 -rotate-[8deg] -top-[10px] w-max relative z-[1]"
              className="flex gap-[11px] h-[60px] pl-[37px] pr-[30px] text-[20px]"
            >
              <span>Let&apos;s talk</span>
              <span className="relative pb-[10px]">
                <Image
                  src="/assets/images/lets-talk-icon.webp"
                  width={34}
                  height={32}
                  alt="Lets talk icon"
                  quality={100}
                />
              </span>
            </CalComModalTrigger>
            <p className="leading-[1.53] font-light text-base lg:text-[17px] max-w-[500px] text-center text-white mt-[55px] lg:mt-[40px] mx-auto">
              je.design is a full-service design agency catering to businesses
              and individuals, with a focus on delivering high-quality,
              professional design solutions.
            </p>

            <div className="w-max mx-auto pt-[100px] lg:pt-[77px] relative">
              <div className="absolute w-max top-[26px] left-[13px] lg:-right-[130px] lg:left-auto">
                <Image
                  src="/assets/images/get-with-us@3x.webp"
                  alt="get with us"
                  width={252}
                  height={71}
                  className="object-contain w-[84px] h-[23px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 57 57"
                  className="-rotate-[104deg] lg:rotate-[12deg] size-[50px] absolute -right-[8px] lg:right-[48px]"
                  fill="none"
                >
                  <g
                    fill="gray"
                    fillRule="evenodd"
                    clipPath="url(#7av10iu75a)"
                    clipRule="evenodd"
                  >
                    <path d="M54.531 2.808c-3.846 26.33-27.472 39.12-52.136 42.028a.774.774 0 0 0 .181 1.536C27.931 43.384 52.107 30.1 56.062 3.03a.773.773 0 1 0-1.53-.222z" />
                    <path d="M2.947 45.55c1.097-.803 2.484-1.794 2.639-1.911 4.178-3.174 7.64-6.825 10.69-11.11a.775.775 0 0 0-1.261-.897c-2.955 4.155-6.312 7.697-10.366 10.775-.236.18-3.357 2.407-3.954 2.904-.246.203-.322.395-.336.441a.748.748 0 0 0 .033.58c.076.158.265.389.632.506.385.12 1.24.175 1.454.207 3.238.48 6.894.733 10.222 1.655 3.173.878 6.052 2.365 7.898 5.345a.775.775 0 0 0 1.316-.815c-2.065-3.332-5.254-5.04-8.8-6.021-3.309-.916-6.931-1.193-10.167-1.66z" />
                  </g>
                  <defs>
                    <clipPath id="7av10iu75a">
                      <path fill="#fff" d="M.29.289h56v56h-56z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center gap-[32px]">
                <a
                  href="https://web.facebook.com/jnellsworth"
                  aria-label="Visit us on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 37"
                    className="w-[10px] h-[18px]"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#FFF"
                      d="m18.125 21.252 1.5-6.75h-6.75l.105-4.462c0-1.817.79-3.788 3.645-3.788h3v-6s-2.632.095-5.147.095c-5.248 0-8.353 3.145-8.353 8.905v5.25h-6v6.75h5.25v15.75h7.5v-15.75h5.25z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/jnellsworth"
                  aria-label="Visit us on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 37 37"
                    className="size-[18px]"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#FFF"
                      d="M18.364 9.194a9.404 9.404 0 0 0-9.419 9.419 9.404 9.404 0 0 0 9.419 9.419 9.404 9.404 0 0 0 9.419-9.419 9.404 9.404 0 0 0-9.419-9.419zm0 15.542c-3.369 0-6.123-2.745-6.123-6.123a6.13 6.13 0 0 1 6.123-6.124 6.13 6.13 0 0 1 6.123 6.124c0 3.378-2.754 6.123-6.123 6.123zM30.365 8.809a2.192 2.192 0 0 1-2.197 2.197 2.197 2.197 0 1 1 2.197-2.197zm6.238 2.23c-.139-2.944-.812-5.55-2.967-7.698-2.148-2.147-4.755-2.82-7.698-2.967-3.033-.173-12.123-.173-15.156 0-2.935.14-5.542.811-7.698 2.96C.928 5.481.264 8.088.117 11.03c-.172 3.033-.172 12.124 0 15.157.139 2.943.811 5.549 2.967 7.698 2.156 2.147 4.755 2.82 7.698 2.967 3.033.172 12.123.172 15.156 0 2.943-.139 5.55-.812 7.698-2.967 2.147-2.149 2.819-4.755 2.967-7.698.172-3.033.172-12.115 0-15.148zm-3.918 18.403a6.2 6.2 0 0 1-3.492 3.491c-2.419.96-8.157.739-10.829.739-2.672 0-8.419.213-10.829-.739a6.202 6.202 0 0 1-3.492-3.491c-.959-2.418-.737-8.156-.737-10.829s-.213-8.418.737-10.829a6.202 6.202 0 0 1 3.492-3.491c2.419-.959 8.157-.739 10.829-.739 2.672 0 8.419-.213 10.829.739a6.2 6.2 0 0 1 3.492 3.491c.959 2.419.737 8.156.737 10.829s.222 8.419-.737 10.829z"
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
                    className="w-[18px] h-[16px]"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#FFF"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
                    />
                  </svg>
                </a>
                <a
                  href="https://g.co/kgs/E6KKgsQ"
                  aria-label="Visit us on Google"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-[20px]"
                    color="#000"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM8 12a4 4 0 0 1 6.828-2.828l1.415-1.415A6 6 0 1 0 18 12v-1h-6v2h3.874A4.002 4.002 0 0 1 8 12z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:hidden">
              <div className="flex items-center gap-[20px] w-full mt-[46px]">
                <div className="border-t border-[#222222] h-[1px] w-full" />
                <Link
                  href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/"
                  aria-label="Visit us on 99designs"
                  className="relative z-[2] shrink-0"
                >
                  <Image
                    src="/assets/images/layer-54@3x.webp"
                    alt=""
                    width={144}
                    height={144}
                    className="size-[48px]"
                  />
                </Link>
                <div className="border-t border-[#222222] h-[1px] w-full" />
              </div>

              <div className="flex flex-row mt-[30px] gap-[20px] items-center justify-center">
                <StarRating
                  activeFillColor="#fff600"
                  value={5}
                  text={
                    <StarRating.Text className="mr-[6px] text-[18px] text-white">
                      5.0
                    </StarRating.Text>
                  }
                />

                <Image
                  src="/assets/images/google-colored-icon.webp"
                  width={185}
                  height={62}
                  alt="Google logo"
                  className="w-[62px] h-[21px] mt-1"
                />
                <Image
                  src="/assets/images/fb-colored-icon.webp"
                  width={251}
                  height={48}
                  alt="Facebook logo"
                  className="w-[83.5px] h-[16px]"
                />
              </div>

              <p className="mt-[28px] text-[15px] font-light text-center lg:max-w-[270px] max-w-[210px] text-white mx-auto">
                Trusted by over 8,000 Startups across the United States
              </p>

              <div className="pt-[50px] pb-[48px] flex items-center gap-[18px] justify-center">
                <p className="font-gilroy text-[22px] font-bold text-white pb-[4px]">
                  Featured on
                </p>
                <Link
                  href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/"
                  aria-label="Visit us on 99designs"
                  className="relative z-[2]"
                >
                  <Image
                    src="/assets/images/99designs.webp"
                    alt="99designs logo"
                    width={338}
                    height={80}
                    className="w-[112px] h-[26px]"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border-t border-[#222222] h-[1px] w-full mt-[53px]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[18px]">
                  <Link
                    href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/"
                    aria-label="Visit us on 99designs"
                    className="relative z-[2] shrink-0"
                  >
                    <Image
                      src="/assets/images/layer-54@3x.webp"
                      alt=""
                      width={144}
                      height={144}
                      className="size-[48px]"
                    />
                  </Link>
                  <div className="pb-[4px]">
                    <div className="flex flex-row gap-[20px] items-center">
                      <StarRating
                        activeFillColor="#fff600"
                        value={5}
                        text={
                          <StarRating.Text className="mr-[6px] text-[18px] text-white">
                            1,800+
                          </StarRating.Text>
                        }
                      />

                      <Image
                        src="/assets/images/google-colored-icon.webp"
                        width={185}
                        height={62}
                        alt="Google logo"
                        className="w-[62px] h-[21px] mt-1"
                      />
                      <Image
                        src="/assets/images/fb-colored-icon.webp"
                        width={251}
                        height={48}
                        alt="Facebook logo"
                        className="w-[83.5px] h-[16px]"
                      />
                    </div>
                    <p className="mt-[8px] text-[15px] font-light text-center text-white leading-none">
                      Trusted by over 8,000 Startups across the United States
                    </p>
                  </div>
                </div>
                <div className="pt-[50px] pb-[48px] flex items-center gap-[18px] justify-center">
                  <p className="font-gilroy text-[22px] font-bold text-white pb-[4px]">
                    Featured on
                  </p>
                  <Link
                    href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/"
                    aria-label="Visit us on 99designs"
                    className="relative z-[2]"
                  >
                    <Image
                      src="/assets/images/99designs.webp"
                      alt="99designs logo"
                      width={338}
                      height={80}
                      className="w-[112px] h-[26px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
