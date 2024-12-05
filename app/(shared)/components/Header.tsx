import React from "react";
import Image from "next/image";
import Link from "next/link";
import CalComModalTrigger from "./CalComModalTrigger";
import HeaderTicker from "./HeaderTicker";
const navs = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Results",
    path: "/#results",
  },
  {
    name: "Solutions",
    path: "/#solutions",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Videos",
    path: "/#videos",
  },
  {
    name: "Testimonials",
    path: "/#testimonials",
  },
  {
    name: "FAQ",
    path: "/#faq",
  },
];
function Header({ tickerLink }: { tickerLink?: string }) {
  return (
    <header className="container mx-auto fixed left-1/2 -translate-x-1/2 z-[2]">
      <HeaderTicker link={tickerLink || ""} />
      <nav className="pl-[40px] bg-black h-[90px] flex items-center justify-between">
        <ul className="flex gap-[40px] text-white h-full font-light">
          {navs.map((nav) => {
            return (
              <li
                key={nav.name}
                className="h-full flex items-center text-[15px]"
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
        <CalComModalTrigger
          variant="secondary"
          containerClass="h-full"
          className="flex gap-[11px] h-full pl-[37px] pr-[30px] text-[20px]"
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
      </nav>
    </header>
  );
}

export default Header;
