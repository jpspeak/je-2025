import { ComponentProps, ReactNode } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { cn } from "../lib/utils";

// const Star = (
//   <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
// );

function StarRating({
  value,
  text,
  ratingClass,
}: {
  value: number;
  text?: ReactNode;
  ratingClass?: string;
}) {
  // const customStyles = {
  //   itemShapes: Star,
  //   activeBoxColor: "#FFCD00",
  //   inactiveBoxColor: "#C7C7C7",
  //   inactiveFillColor: "white",
  //   activeFillColor: "white",
  // };
  const customStyles = {
    itemShapes: RoundedStar,
    // activeBoxColor: "#000000",
    // inactiveBoxColor: "#ffffff",
    inactiveFillColor: "#8f8f8f",
    activeFillColor: "#000000",
  };
  return (
    <Link href="reviews" className="flex items-center gap-1 lg:gap-2">
      {text}
      <div className="flex gap-[2.5px] items-center">
        <Rating
          className={cn("max-w-[80px] lg:max-w-[90px]", ratingClass)}
          // radius="large"
          // spaceInside="large"
          spaceBetween="none"
          // halfFillMode="box"
          itemStyles={customStyles}
          value={value}
          readOnly
        />
      </div>
    </Link>
  );
}

function Text(props: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "grow text-base mt-[3px] lg:text-[17.5px] font-medium lg:leading-none leading-none",
        props.className
      )}
    >
      {props.children}
    </p>
  );
}

StarRating.Text = Text;

export default StarRating;
