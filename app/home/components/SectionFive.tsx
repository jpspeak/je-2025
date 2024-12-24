import React from "react";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(shared)/components/ui/accordion";
import Image from "next/image";
import PortableText from "react-portable-text";
import { Plus } from "lucide-react";

async function SectionFive({ faqs }: { faqs: any[] }) {
  return (
    <section id="pricing">
      <div className="container pb-[48px] px-[20px] lg:px-[32px] pt-[50px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[103px]">
        <div className="h-max">
          <Accordion
            defaultValue="ultimate brand sprint"
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem
              value="ultimate brand sprint"
              className="bg-black border-black border"
            >
              <AccordionTrigger className="group border-none px-[26px] lg:px-[38px] relative py-[30px] lg:py-[40px] text-[20px] text-white lg:text-[22px] font-gilroy font-bold !no-underline">
                <div className="flex flex-col">
                  <span>Ultimate Brand Sprint</span>
                  <p className="hidden group-data-[state=open]:block text-[#c7c7c7] text-base mt-[18px] font-normal font-funnel-sans max-w-[380px] []">
                    A complete solution to launch your brand—branding in one
                    package.{" "}
                    <span className="text-white">
                      No surprises, just results.
                    </span>
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="!pb-0">
                <Image
                  src="/assets/images/line-2-copy-3.svg"
                  alt="Line"
                  width={509}
                  height={1}
                  className="w-[509px] h-[1px] object-cover"
                />
                <ul className="flex flex-col gap-[14px] p-[30px] lg:py-[50px] lg:px-[38px]">
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>Business Logo Identity Kit</p>
                    </div>
                    <p className="text-[#7d7d7d] pl-[10px]">
                      Logo, Stationary Designs & Five page style guide
                    </p>
                  </li>
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>1x Vehicle/Trailer Wrap Design</p>
                    </div>
                  </li>
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>Company Shirt Design</p>
                    </div>
                  </li>
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>Digital and Print Accessable Files</p>
                    </div>
                  </li>
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>Dedicated Creative Team</p>
                    </div>
                  </li>
                  <li className="text-[17px] text-white">
                    <div className="flex items-center gap-[1px]">
                      <span className="text-[#fff600] pr-[2px]">•</span>
                      <p>Private Communication Channel</p>
                    </div>
                  </li>
                </ul>
                <Image
                  src="/assets/images/line-2-copy-3.svg"
                  alt="Line"
                  width={509}
                  height={1}
                  className="w-[509px] h-[1px] object-cover"
                />
                <div className="px-0 lg:pl-[38px] lg:pr-[30px] lg:py-[30px] flex flex-col lg:flex-row lg:gap-4 lg:justify-between lg:items-center">
                  <div className="text-white flex items-center justify-center lg:justify-stretch text-[15px] py-[35px] lg:py-0">
                    <span className="font-gilroy font-bold text-[50px] leading-none">
                      $5479
                    </span>
                    <span className="ml-[12px]">/</span>
                    <span className="ml-[2px]">one price</span>
                  </div>
                  <CalComModalTrigger
                    containerclass="w-full lg:max-w-[158px]"
                    className="bg-secondary hover:bg-secondary/80 lg:w-full text-primary"
                  >
                    I&apos;m ready
                  </CalComModalTrigger>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem
              value="Custom Brand Sprint"
              className="mt-[20px] lg:mt-[30px] border-black border"
            >
              <AccordionTrigger className="group border-none px-[30px] lg:px-[38px] relative lg:py-[40px] text-[20px] text-primary lg:text-[22px] font-gilroy font-bold !no-underline">
                <div className="flex flex-col">
                  <span>Custom Brand Sprint</span>
                  <p className="hidden group-data-[state=open]:block text-[#c7c7c7] text-base mt-[18px] font-normal font-funnel-sans max-w-[380px] []">
                    A complete solution to launch your brand—branding in one
                    package.{" "}
                    <span className="text-white">
                      No surprises, just results.
                    </span>
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="!pb-0 ngek"></AccordionContent>
            </AccordionItem> */}
          </Accordion>
          <CalComModalTrigger
            className="h-[60px] lg:h-[90px] px-[26px] lg:px-[38px] bg-white border border-black w-full lg:w-full flex items-center justify-between text-black mt-[30px] hover:bg-white"
            containerclass="w-full"
          >
            <span>Custom Brand Sprint</span>
            <Plus className="!size-[25px] shrink-0 transition-transform duration-200 plus" />
          </CalComModalTrigger>
        </div>
        <div id="faq">
          <h2 className="text-[35px] lg:text-[50px] font-gilroy font-bold leading-none">
            Questions
          </h2>
          <Accordion
            defaultValue="1"
            type="single"
            collapsible
            className="w-full border-t border-[#e9eaec] mt-[30px] lg:mt-[42px]"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={faq._id} value={String(i)}>
                <AccordionTrigger className="text-[20px] items-center px-0 leading-tight lg:text-[22px] !no-underline py-[18px] lg:px-0 lg:py-[31px] font-gilroy font-bold border-b-0">
                  <p className="max-w-[300px] lg:max-w-full">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="px-0 lg:p-0">
                  {faq.answer && (
                    <PortableText
                      content={faq.answer}
                      className="lg:pb-[40px] text-[17px] leading-[1.41] lg:text-[17px] lg:leading-[30px] [&_*_a]:underline"
                    />
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
