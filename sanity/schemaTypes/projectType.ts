import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "body",
    //   title: "Body",
    //   type: "array",
    //   of: [
    //     {
    //       type: "block",
    //       styles: [
    //         { title: "Normal", value: "normal" },
    //         { title: "Heading 1", value: "h1" },
    //         { title: "Heading 2", value: "h2" },
    //         { title: "Heading 3", value: "h3" },
    //         { title: "Quote", value: "blockquote" },
    //       ],
    //       lists: [
    //         { title: "Bullet", value: "bullet" },
    //         { title: "Numbered", value: "number" },
    //       ],
    //       marks: {
    //         decorators: [
    //           { title: "Bold", value: "strong" },
    //           { title: "Italic", value: "em" },
    //           { title: "Underline", value: "underline" },
    //         ],
    //         annotations: [
    //           {
    //             name: "link",
    //             type: "object",
    //             title: "URL",
    //             fields: [
    //               {
    //                 name: "href",
    //                 type: "url",
    //                 title: "URL",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       type: "image",
    //       options: { hotspot: true },
    //       fields: [
    //         {
    //           name: "alt",
    //           type: "string",
    //           title: "Alternative text",
    //           options: { isHighlighted: true },
    //         },
    //       ],
    //     },
    //   ],
    // }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [
              {
                title: "Bold",
                value: "strong",
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "sliderImages",
      title: "Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    // defineField({
    //   name: "secondaryImage",
    //   title: "Secondary image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative Text",
    //     },
    //   ],
    // }),
    defineField({
      name: "projectIndustry",
      title: "Product Industry",
      type: "reference",
      to: { type: "projectIndustry" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "reference", to: { type: "review" } }],
    }),
    orderRankField({ type: "project" }),
  ],

  //   preview: {
  //     select: {
  //       title: 'title',
  //       author: 'author.name',
  //       media: 'mainImage',
  //     },
  //     prepare(selection) {
  //       const {author} = selection
  //       return {...selection, subtitle: author && `by ${author}`}
  //     },
  //   },
});
