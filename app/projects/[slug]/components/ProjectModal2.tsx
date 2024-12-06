import { urlForImage } from "@/sanity/lib/image";
import { Dialog, DialogContent } from "@/app/(shared)/components/ui/dialog";
import Image from "next/image";
import PortableText from "react-portable-text";
import ShareModal from "@/app/(shared)/components/ShareModal";
import ReviewCard from "@/app/(shared)/components/ReviewCard";
import ModalCloseButton from "./ModalCloseButton";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import ReplyBox from "@/app/(shared)/components/ReplyBox";
import { cn, formatDate } from "@/app/(shared)/lib/utils";

function ProjectModal2({
  project,
  sameIndustryProjects,
}: {
  project: any;
  sameIndustryProjects: any[];
}) {
  const firstReview = project?.reviews?.[0];

  return (
    <Dialog open={true}>
      <DialogContent
        hideCloseButton
        className="max-w-full h-svh  max-h-full bg-transparent border-none p-0 !rounded-none"
      >
        <div className="relative overflow-auto">
          <ModalCloseButton />

          <div className="hidden xl:flex fixed left-[calc(50%+435px+28px)] top-[112px] flex-col gap-[24px]">
            <div className="flex flex-col items-center">
              <ShareModal pathname={`projects/${project.slug?.current}`} />
              <p className="mt-[10px] text-sm font-semibold text-white">
                Share
              </p>
            </div>

            <div className="flex flex-col items-center">
              <CalComModalTrigger className="flex lg:w-[70px] hover:bg-current bg-white items-center justify-center size-[70px] border-[1px] rounded-full border-muted">
                <Image
                  src="/assets/images/telephone-stroke-rounded.svg"
                  height="22"
                  width="22"
                  alt="telephone-stroke-rounded"
                  className="invert"
                />
              </CalComModalTrigger>

              <p className="mt-[10px] text-sm font-semibold text-white">
                Quote
              </p>
            </div>
          </div>

          <div className="container px-0 max-w-[870px] lg:my-[70px] bg-white">
            <div className="grid grid-cols-1 gap-2 lg:gap-[20px]">
              <Image
                src={urlForImage(project.mainImage as any)}
                width={900}
                height={900}
                alt={project.mainImage?.alt || ""}
                className="w-full"
                quality={100}
              />
              {project.images?.map((image: any, i: number) => {
                let gridColClass = "grid-cols-1";
                switch (image._type) {
                  case "twoImages":
                    gridColClass = "grid-cols-2";
                    break;
                  case "threeImages":
                    gridColClass = "grid-cols-3";
                    break;
                  case "fourImages":
                    gridColClass = "grid-cols-4";
                    break;
                }
                return (
                  <div
                    key={i}
                    className={cn("grid gap-2 lg:gap-[20px]", gridColClass)}
                  >
                    {image.image?.map((image: any, i: number) => (
                      <Image
                        key={i}
                        src={urlForImage(image as any)}
                        width={900}
                        height={900}
                        alt={image?.alt || ""}
                        className="w-full object-cover"
                        quality={100}
                      />
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="bg-black text-white px-6 py-8 lg:px-[75px] lg:py-[70px]">
              <div className="text-[11px] px-[11px] py-[6px] w-max font-light bg-white leading-[.8] text-[#141423]">
                {project.projectIndustry.title}
              </div>

              <h1 className="text-3xl lg:text-[40px] leading-none font-gilroy bold mt-[20px]">
                {project.title}
              </h1>
              <p className="mt-[14px] text-[11px] lg:text-[13px] font-light text-[#787878]">
                Published: {formatDate(project.publishedAt)}
              </p>
              {project.description && (
                <PortableText
                  className="mt-4 lg:mt-[30px] text-[15px] font-light lg:text-[17px] lg:leading-[1.65]  text-[#f6f6f8] [&_a]:underline"
                  content={project.description as any}
                />
              )}
            </div>
            {firstReview && (
              <div className="bg-[#f6f6f8] px-6 py-8 lg:px-[75px] lg:py-[40px]">
                <h2 className="text-[25px] lg:text-[30px] font-gilroy mb-[24px]">
                  Testimonial
                </h2>
                <ReviewCard
                  key={firstReview._id}
                  avatar={urlForImage(firstReview.avatar as any)}
                  reviewerName={firstReview.reviewerName || ""}
                  reviewerInfo={firstReview.reviewerInfo || ""}
                  rating={firstReview.rating || 5}
                  text={firstReview.reviewText}
                  platformLogoUrl={urlForImage(firstReview.reviewPlatformLogo)}
                  platformName={firstReview.reviewPlatformName}
                  images={firstReview.images}
                />
              </div>
            )}

            {sameIndustryProjects?.length > 0 && (
              <div className="border-t border-[#e9eaec] px-6 py-8 lg:px-[75px] lg:py-[40px]">
                <h2 className="text-[25px] lg:text-[30px] font-gilroy mb-[24px]">
                  Semilar industries
                </h2>
                <div className="grid grid-cols-3 gap-4 lg:gap-[25px]">
                  {sameIndustryProjects.map((project, i) => (
                    <Image
                      key={i}
                      src={urlForImage(project.mainImage as any)}
                      width={900}
                      height={900}
                      alt={project.image?.alt || ""}
                      className="w-full object-cover"
                      quality={100}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="px-6 pb-8 pt-4 lg:px-[75px] lg:pt-[20px] lg:pb-[40px]">
              <ReplyBox />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectModal2;
