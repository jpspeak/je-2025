"use server";

import { client } from "../lib/client";

export async function getFaqs(): Promise<any[]> {
  const query = `*[_type == "faq"] | order(dateTime(date) desc){
    _id,
    question,
    answer
  }`;
  return client.fetch(query);
}
