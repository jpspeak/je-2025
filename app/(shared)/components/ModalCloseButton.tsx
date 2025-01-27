"use client";

import { cn } from "@/app/(shared)/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

function ModalCloseButton({
  onClick,
  className,
  iconClassName,
}: {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={onClick || router.back}
      className={cn(
        "text-white fixed bg-transparent lg:bg-[#464646] size-[40px] rounded-full flex items-center justify-center right-4 top-4 lg:top-[30px] lg:right-[50px] outline-none",
        className
      )}
    >
      <X className={cn("size-[24px]", iconClassName)} strokeWidth={2} />
    </button>
  );
}

export default ModalCloseButton;
