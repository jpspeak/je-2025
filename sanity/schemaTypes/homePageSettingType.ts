import { defineField, defineType } from "sanity";

export const departmentType = defineType({
  name: "department",
  title: "Department",
  type: "document",
  fields: [{ name: "name", title: "Name", type: "string" }],
});

export const homePageSettingType = defineType({
  name: "homePageSetting",
  title: "Home Page Setting",
  type: "document",
  groups: [
    {
      name: "ticker",
      title: "Ticker",
    },
    {
      name: "projectMarquee",
      title: "Project Marquee",
    },
    {
      name: "team",
      title: "Team",
    },
    {
      name: "brandProjects",
      title: "Brand Projects",
    },
    {
      name: "recordedProjects",
      title: "Recorded Projects",
    },
  ],
  fields: [
    defineField({
      name: "tickerLink",
      title: "Ticker Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      group: "ticker",
    }),
    // defineField({
    //   name: "featuredStories",
    //   title: "Featured Stories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "review" } }],
    //   validation: (Rule) => Rule.max(3),
    //   group: "featuredStories",
    // }),
    // defineField({
    //   name: "ourSolutions",
    //   title: "Our Solutions",
    //   type: "array",
    //   of: [
    //     defineField({
    //       type: "object",
    //       title: "Solution",
    //       name: "solution",
    //       fields: [
    //         defineField({
    //           name: "name",
    //           title: "Name",
    //           type: "string",
    //         }),
    //         defineField({
    //           name: "description",
    //           title: "Description",
    //           type: "array",
    //           of: [
    //             {
    //               type: "block",
    //               styles: [],
    //               lists: [],
    //               marks: {
    //                 decorators: [
    //                   {
    //                     title: "Bold",
    //                     value: "strong",
    //                   },
    //                 ],
    //               },
    //             },
    //           ],
    //         }),
    //         defineField({
    //           name: "images",
    //           title: "Images",
    //           type: "array",
    //           of: [{ type: "image" }],
    //         }),
    //         defineField({
    //           name: "content",
    //           title: "Content",
    //           type: "array",
    //           of: [
    //             {
    //               type: "block",
    //               styles: [],
    //               lists: [],
    //               marks: {
    //                 decorators: [
    //                   {
    //                     title: "Bold",
    //                     value: "strong",
    //                   },
    //                 ],
    //               },
    //             },
    //           ],
    //         }),
    //         defineField({
    //           name: "button",
    //           type: "object",
    //           title: "Button",
    //           fields: [
    //             defineField({
    //               name: "text",
    //               title: "Text",
    //               type: "string",
    //             }),
    //             defineField({
    //               name: "isCalCom",
    //               title: "Show Cal.com modal on click",
    //               type: "boolean",
    //             }),
    //             defineField({
    //               name: "link",
    //               title: "Link",
    //               type: "url",
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    //   group: "ourSolutions",
    // }),
    defineField({
      name: "projectMarquee",
      title: "Project Marquee",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      group: "projectMarquee",
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          type: "object",
          title: "Team",
          name: "team",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "info",
              title: "Info",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "department",
              type: "reference",
              to: { type: "department" },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      group: "team",
    }),
    defineField({
      name: "brandProjects",
      title: "Brand Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      group: "brandProjects",
    }),
    // defineField({
    //   name: "sketchConcept",
    //   title: "Sketch Concept",
    //   type: "object",
    //   fields: [
    //     defineField({
    //       name: "sketchBefore",
    //       title: "Image Before",
    //       type: "image",
    //       options: {
    //         hotspot: true,
    //       },
    //       validation: (Rule) => Rule.required(),
    //     }),
    //     defineField({
    //       name: "sketchAfter",
    //       title: "Image After",
    //       type: "image",
    //       options: {
    //         hotspot: true,
    //       },
    //       validation: (Rule) => Rule.required(),
    //     }),
    //   ],
    //   group: "sketchConcept",
    // }),
  ],
});
