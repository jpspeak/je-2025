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
