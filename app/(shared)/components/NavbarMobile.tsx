"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "../lib/utils";
import CalComModalTrigger from "./CalComModalTrigger";
import { PhoneCall } from "lucide-react";

export default function NavbarMobile() {
  const [{ y }] = useWindowScroll();

  // This will hide navbar when scroll position is at 704px or when it reaches the bottom of the scroll
  let hideNavbar =
    (y ?? 0) <= 704 ||
    (y ?? 0) + window.innerHeight >= document.body.scrollHeight;

  if (typeof window === "undefined") hideNavbar = true;

  return (
    <div
      className={cn(
        "fixed bottom-0 px-[20px] pb-[16px] w-full z-50",
        hideNavbar ? "hidden" : "block lg:hidden"
      )}
    >
      <CalComModalTrigger
        variant="secondary"
        className="size-[60px] rounded-full p-0 shadow-sm"
        containerclass="flex justify-end"
      >
        <PhoneCall className="size-8" />
      </CalComModalTrigger>
    </div>
  );
}
