"use client";

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

function ProjectModal2Container({ children }: ComponentProps<"div">) {
  const router = useRouter();
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };
  return (
    <div className="relative overflow-auto" onClick={handleOnClick}>
      {children}
    </div>
  );
}

export default ProjectModal2Container;
