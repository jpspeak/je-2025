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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
