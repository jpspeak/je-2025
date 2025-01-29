"use server";

import { client } from "../lib/client";
// _id,
// articleLink,
// featuredStories[]->{
//   ...,
//   "reviewPlatformLogo": reviewPlatform->logo,
//   "reviewPlatformName": reviewPlatform->name
// },
// ourSolutions[]{
//   name,
//   description,
//   images,
//   content,
//   button
// },
// projects[]->{
//   title,
//   slug,
//   mainImage
// },
// sketchConcept{
//   sketchBefore,
//   sketchAfter
// }
export async function getHomePageSetting(
  projectIndustrySlug?: string
): Promise<any> {
  const filterBySlug = projectIndustrySlug && projectIndustrySlug !== "all";
  const projectMarqueeQuery = filterBySlug
    ? `projectMarquee[@->projectIndustry->slug.current == "${projectIndustrySlug}"]->{
        ...,
        projectIndustry->
      }`
    : `projectMarquee[]->{
        ...,
        projectIndustry->
      }`;
  const brandSolutionsQuery = filterBySlug
    ? `brandSolutions[projectIndustry->slug.current == "${projectIndustrySlug}"]{
        ...,
        image,
        category->,
        projectIndustry->
      }`
    : `brandSolutions[]{
        ...,
        image,
        category->,
        projectIndustry->
      }`;
  const workInActionImagesQuery = filterBySlug
    ? `workInActionImages[projectIndustry->slug.current == "${projectIndustrySlug}"]{
        image,
        projectIndustry->
      }`
    : `workInActionImages[]{
        image,
        projectIndustry->
      }`;

  const query = `*[_type == "homePageSetting"][0]{
    ...,
    heroImages[]{
      ...,
      projectIndustry->
    },
    'projectMarquee': ${projectMarqueeQuery},
    brandProjects[]->,
    team[]{
      ...,
      department->
    },
    'brandSolutions': ${brandSolutionsQuery},
    'workInActionImages': ${workInActionImagesQuery},
    faqs[]->
  }`;
  const result = await client.fetch(query);

  return result;
}
