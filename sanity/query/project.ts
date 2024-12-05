"use server";

import { client } from "../lib/client";

export async function getProjects({
  industrySlug = "",
  lastOrderRank = "",
  lastCreatedAt = "",
  limit = 9,
  sortBy = "",
} = {}): Promise<any[]> {
  let sortByValue = "";
  let operator = "";

  switch (sortBy) {
    case "Most Recent":
      sortByValue = "desc";
      operator = "<";
      break;
    case "Oldest First":
      sortByValue = "asc";
      operator = ">";
      break;
  }
  let query = `*[_type == "project" ${lastOrderRank ? `&& orderRank > $lastOrderRank` : ""}] | order(orderRank) [0...$limit]{
    ...
  }`;
  if (industrySlug && industrySlug !== "all") {
    query = `*[_type == "project" && projectIndustry->slug.current == $industrySlug ${lastOrderRank ? `&& orderRank > $lastOrderRank` : ""}] | order(orderRank) [0...$limit]{
        ...
      }`;
  }

  if (sortByValue !== "") {
    query = `*[_type == "project" ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
      ...
    }`;
    if (industrySlug && industrySlug !== "all") {
      query = `*[_type == "project" && projectIndustry->slug.current == $industrySlug ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
          ...
        }`;
    }
  }

  return client.fetch(query, {
    lastOrderRank,
    lastCreatedAt,
    limit,
    industrySlug,
  });
}

export async function getProject({ slug }: { slug: string }): Promise<any> {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    ...,
    projectIndustry->,
    reviews[]->{
      ...,
      "reviewPlatformLogo": reviewPlatform->logo,
      "reviewPlatformName": reviewPlatform->name
    }
  }`;
  return client.fetch(query, { slug });
}

export async function getProjectsIndustries(): Promise<any[]> {
  const query = `*[_type == "industry"] | order(title asc){
      ...
    }`;

  return client.fetch(query);
}

export async function getProjectsIndustry(id: string): Promise<any> {
  const query = `*[_type == "industry" && _id == $id][0]{
      ...
    }`;

  return client.fetch(query, { id });
}
