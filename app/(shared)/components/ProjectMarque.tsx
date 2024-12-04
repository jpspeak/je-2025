"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

function ProjectItem({ project }: { project: any }) {
  const src = urlForImage(project.mainImage as any);
  return (
    <Link
      href={`/projects/${project.slug?.current}`}
      className="relative w-full pb-[100%] bg-muted inline-block"
    >
      <Image
        src={src}
        fill
        alt={project.title || ""}
        className="object-cover"
        quality={100}
      />
    </Link>
  );
}

function ProjectMarquee({ projects }: { projects: any[] }) {
  return (
    <Marquee loop={0} pauseOnClick pauseOnHover autoFill>
      {projects?.map((project, i) => (
        <div
          key={project._id + i}
          className="w-[200px] md:w-[350px] xl:w-[350px] shrink-0 mx-[16.5px]"
        >
          <ProjectItem key={project._id} project={project} />
        </div>
      ))}
    </Marquee>
  );
}

export default ProjectMarquee;
