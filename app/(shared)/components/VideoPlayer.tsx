"use client";

import { incrementViews } from "@/sanity/query/recording";
import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  id,
  url,
  thumbnail,
  isPlaying = false,
  showControls = false,
}: {
  id: string;
  url: string;
  thumbnail?: string;
  isPlaying?: boolean;
  showControls?: boolean;
}) {
  const handlePlay = async () => {
    if (!localStorage.getItem(`videoPlayed-${id}`)) {
      try {
        await incrementViews({ id });
        localStorage.setItem(`videoPlayed-${id}`, "true");
      } catch (error) {
        console.error("Failed to increment views:", error);
      }
    }
  };
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ position: "absolute", objectFit: "contain" }}
      url={url}
      controls={showControls}
      light={thumbnail}
      playing={isPlaying}
      onPlay={handlePlay}
    />
  );
}

export default VideoPlayer;
