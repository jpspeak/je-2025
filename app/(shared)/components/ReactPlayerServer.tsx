"use client";

import React from "react";
import ReactPlayer from "react-player";

function ReactPlayerServer() {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ position: "absolute", objectFit: "contain" }}
      url="https://www.youtube.com/watch?v=BpuC_iyq0l8&ab_channel=JeremyEllsworthDesignsLLC"
      controls
      light="/assets/images/commercial-thumbnail.webp"
      playing
    />
  );
}

export default ReactPlayerServer;
