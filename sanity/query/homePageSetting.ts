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
export async function getHomePageSetting(): Promise<any> {
  const query = `*[_type == "homePageSetting"][0]{
    ...,
    projectMarquee[]->,
    brandProjects[]->,
    team[]{
    ...,
    department->
    }
  }`;
  return client.fetch(query);
}
