"use client";

import React from "react";
import { DiscussionEmbed } from "disqus-react";

function DisqusEmbed({
  url,
  identifier,
  title,
}: {
  url: string;
  identifier: string;
  title: string;
}) {
  return (
    <DiscussionEmbed
      shortname="jedesign"
      config={{
        url,
        identifier,
        title,
        language: "en_US",
      }}
    />
  );
}

export default DisqusEmbed;
