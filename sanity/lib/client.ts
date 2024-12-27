import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:
    "skABAg166WHVnslxdFe9dkHQx4uiEfYZ2NtPuSEbuJAVEruyFFAaYVryZgUHKx2rJ8Qbhdtoax0Qf4OcVHISLzVBBtuy5qiUytDMViNNiHYw1IKScBeCLVUNrdc99rW13FrbktzCTkkxpeROCG2qfUJDvM3gwNu6CXSv8q47KLOuStGgoD59",
});
