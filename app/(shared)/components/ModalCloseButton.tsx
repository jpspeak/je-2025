"use client";

import { cn } from "@/app/(shared)/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if document.referrer belongs to the same origin
    const isSameOrigin = document.referrer.startsWith(window.location.origin);
    setCanGoBack(isSameOrigin);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/"); // Redirect to homepage if no internal history
    }
  };

  return (
    <button
      onClick={onClick || handleBack}
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
