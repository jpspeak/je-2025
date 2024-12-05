import React from "react";
import { Metadata } from "next";
import { blockContentToPlainText } from "react-portable-text";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { VisualArtwork, WithContext } from "schema-dts";
import Script from "next/script";
import { getProject, getProjects } from "@/sanity/query/project";
import ProjectModal from "@/app/projects/[slug]/components/ProjectModal";

export const revalidate = 60;

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjects({
    limit: 100,
  });
  return projects.map((p) => p.slug?.current);
}

// Function to generate metadata dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const project = await getProject({ slug: params.slug });

  if (!project) return;

  return {
    title: project.title,
    description:
      project.description && project.description.length > 0
        ? blockContentToPlainText(project.description as [any])
        : "",
    openGraph: {
      title: project.title,
      description:
        project.description && project.description.length > 0
          ? blockContentToPlainText(project.description as [any])
          : "",
      images: [
        {
          url: urlForImage(project.mainImage as any),
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      url: `https://je.designs.com/projects/${project.slug?.current}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description:
        project.description && project.description.length > 0
          ? blockContentToPlainText(project.description as [any])
          : "",
      images: [urlForImage(project.mainImage as any)],
    },
  };
}

async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await getProject({ slug });

  if (!project) return notFound();

  const structuredData: WithContext<VisualArtwork> = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: project.title,
    url: `https://je.designs.com/projects/${project.slug?.current}`,
    description:
      project.description && project.description.length > 0
        ? blockContentToPlainText(project.description as [any])
        : "",
    image: urlForImage(project.mainImage as any),
    creator: {
      "@type": "Person",
      name: "Jeremy Ellsworth",
    },
    artform: "Graphic Design",
    artMedium: "Digital",
  };

  return (
    <>
      <Script
        id="project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectModal project={project} />
    </>
  );
}

export default ProjectPage;
