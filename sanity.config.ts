"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
export const singletonTypes = new Set(["homePageSetting"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Regular document types
            // S.documentTypeListItem("project").title("Projects"),
            orderableDocumentListDeskItem({
              type: "project",
              title: "Projects",
              S,
              context,
            }),
            S.documentTypeListItem("projectIndustry").title(
              "Project Industries"
            ),
            S.documentTypeListItem("review").title("Reviews"),
            S.documentTypeListItem("reviewPlatform").title("Review Platforms"),
            // S.documentTypeListItem("article").title("Articles"),
            // S.documentTypeListItem("articleCategory").title(
            //   "Article Categories"
            // ),
            S.documentTypeListItem("faq").title("FAQs"),
            // Our singleton type has a list item with a custom child
            // S.listItem().title("Home Page Setting").id("homePageSetting").child(
            //   // Instead of rendering a list of documents, we render a single
            //   // document, specifying the `documentId` manually to ensure
            //   // that we're editing the single instance of the document
            //   S.document()
            //     .schemaType("homePageSetting")
            //     .documentId("homePageSetting")
            // ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin

    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
