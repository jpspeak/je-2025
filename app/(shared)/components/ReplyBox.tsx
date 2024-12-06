"use client";

import React, { useEffect } from "react";

function ReplyBox() {
  useEffect(() => {
    if ((window as any).replybox?.site) return;

    (window as any).replybox = {
      // UPDATE SITE HERE
      site: process.env.NEXT_PUBLIC_REPLYBOX_SITE_ID || "",
    };

    const script = document.createElement("script");
    script.src = "https://cdn.getreplybox.com/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="replybox"></div>;
}

export default ReplyBox;
