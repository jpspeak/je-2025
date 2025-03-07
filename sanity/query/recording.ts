"use server";

import { client } from "../lib/client";

export async function getRecordings(): Promise<any[]> {
  const query = `*[_type == "recording"]{
      ...,
      video {
        asset -> {
          url
        }
      },
    }`;

  return client.fetch(query);
}

export async function getRecording({ slug }: { slug: string }): Promise<any> {
  const query = `*[_type == "recording" && slug.current == $slug][0]{
    ...,
    publishedAt,
    video {
      asset -> {
        url
      }
    },
  }`;
  return client.fetch(query, { slug });
}

export async function incrementViews({ id }: { id: string }): Promise<void> {
  await client.patch(id).setIfMissing({ views: 0 }).inc({ views: 1 }).commit();
}
