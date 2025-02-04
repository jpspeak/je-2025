"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function PathTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const storedCurrentPath = sessionStorage.getItem("currentPath");
    if (storedCurrentPath) {
      sessionStorage.setItem("prevPath", storedCurrentPath);
    }

    sessionStorage.setItem("currentPath", pathname);
  }, [pathname]);
  return <div></div>;
}

export default PathTracker;
