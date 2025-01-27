"use client";

import React, { useEffect } from "react";

function Comments({ identifier }: { identifier: string }) {
  useEffect(() => {
    // if ((window as any).replybox.site) return;

    (window as any).replybox = {
      // UPDATE SITE HERE
      site: process.env.NEXT_PUBLIC_REPLYBOX_SITE_ID || "4dnkP06BxX",
      identifier,
    };

    const script = document.createElement("script");
    script.src = "https://cdn.getreplybox.com/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [identifier]);

  return <div id="replybox"></div>;
}

export default Comments;
// "use client";

// import React, { useEffect } from "react";

// function Comments({ identifier }: { identifier: string }) {
//   useEffect(() => {
//     if ((window as any).replybox?.site) {
//       const scripts = document.querySelectorAll("script");
//       scripts.forEach((script) => {
//         if (script.src === "https://cdn.getreplybox.com/js/embed.js") {
//           script.remove(); // Removes the script element
//         }
//       });
//       (window as any).replyBox = null;
//     }

//     (window as any).replybox = {
//       // UPDATE SITE HERE
//       site: "4dnkP06BxX",
//       identifier,
//     };

//     const script = document.createElement("script");
//     script.src = "https://cdn.getreplybox.com/js/embed.js";
//     script.async = true;

//     document.body.appendChild(script);
//     console.log("Append---");
//     return () => {
//       console.log("use less");
//     };
//   }, [identifier]);

//   return <div id="replybox"></div>;
// }

// export default Comments;
