"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ModalContainer({ children }: ComponentProps<"div">) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const storedPrevPath = sessionStorage.getItem("prevPath");
    setCanGoBack(!!storedPrevPath);
  }, []);

  const handleBack = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (canGoBack) {
        router.back();
      } else {
        router.push("/"); // Redirect to homepage if no internal history
      }
    }
  };
  return (
    <div className="relative overflow-auto" onClick={handleBack}>
      {children}
    </div>
  );
}

export default ModalContainer;
