import React from "react";
import Link from "next/link";
import TickerSelect from "./TickerSelect";

function Ticker({ link }: { link: string }) {
  return (
    <div className="bg-black relative h-[55px]">
      <div className="container h-full text-white justify-center px-3 lg:px-8 relative items-center gap-[12px] overflow-hidden static-background-hard flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49 50"
          className="size-[26px]"
        >
          <path
            fillRule="evenodd"
            fill="#FFAE00"
            d="M48.837 25.134c0 13.376-10.844 24.219-24.219 24.219C11.242 49.353.399 38.51.399 25.134.399 11.758 11.242.915 24.618.915c13.375 0 24.219 10.843 24.219 24.219zm-13.834-3.45c.483-3.223-1.971-4.955-5.327-6.111l1.089-4.365-2.658-.662-1.059 4.25c-.699-.174-1.417-.338-2.13-.501l1.068-4.278-2.656-.663-1.09 4.364a84.266 84.266 0 0 1-1.697-.399l.003-.013-3.665-.915-.706 2.838s1.971.452 1.93.48c1.076.268 1.271.98 1.238 1.545l-1.24 4.973c.074.019.17.046.276.089l-.28-.07-1.738 6.967c-.132.327-.466.817-1.218.631.026.039-1.932-.482-1.932-.482l-1.319 3.042 3.458.862c.644.161 1.274.33 1.895.488l-1.1 4.416 2.654.662 1.09-4.368c.704.19 1.41.373 2.117.549l-1.085 4.348 2.658.662 1.099-4.407c4.532.858 7.94.512 9.374-3.586 1.156-3.3-.058-5.204-2.442-6.445 1.736-.4 3.045-1.542 3.393-3.901zm-6.072 8.513c-.821 3.3-6.377 1.516-8.179 1.069l1.46-5.849c1.801.449 7.578 1.339 6.719 4.78zm.822-8.561c-.749 3.002-5.374 1.477-6.874 1.103l1.323-5.305c1.5.373 6.332 1.071 5.551 4.202z"
          />
        </svg>

        <p className="hidden lg:block text-[15px]">
          je.design now accepts Bitcoin, Litecoin, Solana and XRP -{" "}
          <Link href={link} className="text-[#fff619]">
            Learn more
          </Link>
        </p>
        <p className="lg:hidden font-medium text-[13px]">
          Now accepts Bitcoin, Litecoin, Solana and XRP
        </p>
      </div>
      <div className="absolute right-0 top-0">
        {/* <button className="text-white font-light w-[240px] px-[20px] h-[55px] flex items-center justify-between text-[15px] border-l border-[#606060]">
          <span>Choose your industry</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            className="size-[11px]"
          >
            <path
              fill-rule="evenodd"
              fill="#FFF"
              d="M22 13h-9v9H8.1v-9H0V8.1h8.1V0H13v8.1h9V13z"
            />
          </svg>
        </button> */}
        <TickerSelect
          placeholder="Choose your industry"
          options={[
            { value: "All Industries", label: "All Industries" },
            { value: "Home Service Business", label: "Home Service Business" },
            { value: "Technology", label: "Technology" },
            { value: "Food & Beverage", label: "Food & Beverage" },
            { value: "Fashion", label: "Fashion" },
            { value: "Transportation", label: "Transportation" },
            { value: "Finance and Insurance", label: "Finance and Insurance" },
            {
              value: "Real Estate & Construction",
              label: "Real Estate & Construction",
            },
            { value: "Energy", label: "Energy" },
            {
              value: "Hospitality and Tourism",
              label: "Hospitality and Tourism",
            },
            { value: "Education", label: "Education" },
            { value: "Automotive", label: "Automotive" },
          ]}
        />
      </div>
    </div>
  );
}

export default Ticker;
