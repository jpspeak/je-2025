import { defineField } from "sanity";

export const brandSolutionCategoryType = defineField({
  name: "brandSolutionCategory",
  title: "Brand Solution Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});

export const branSolutionType = defineField({
  name: "brandSolution",
  title: "Brand Solution",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "brandSolutionCategory" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectIndustry",
      title: "Project Industry",
      type: "reference",
      to: { type: "projectIndustry" },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
