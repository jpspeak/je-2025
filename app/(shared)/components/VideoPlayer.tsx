"use client";

import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  url,
  thumbnail,
  isPlaying = false,
  showControls = false,
}: {
  url: string;
  thumbnail?: string;
  isPlaying?: boolean;
  showControls?: boolean;
}) {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ position: "absolute", objectFit: "contain" }}
      url={url}
      controls={showControls}
      light={thumbnail}
      playing={isPlaying}
    />
  );
}

export default VideoPlayer;
