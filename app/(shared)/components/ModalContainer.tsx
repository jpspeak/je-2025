"use client";

import React, { ComponentProps } from "react";
import { useRouter } from "next/navigation";

function ModalContainer({ children }: ComponentProps<"div">) {
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

export default ModalContainer;
