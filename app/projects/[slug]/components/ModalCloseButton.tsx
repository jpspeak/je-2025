"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

function ModalCloseButton() {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="text-white fixed bg-[#464646] size-[40px] rounded-full flex items-center justify-center right-4 top-4 lg:top-[30px] lg:right-[50px] outline-none"
    >
      <X className="size-[24px]" strokeWidth={2} />
    </button>
  );
}

export default ModalCloseButton;
