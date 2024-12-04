import { type SchemaTypeDefinition } from "sanity";
import { singletonTypes } from "@/sanity.config";
import { projectType } from "./projectType";
import { projectIndustryType } from "./projectIndustryType";
import { reviewType } from "./reviewType";
import { reviewPlatformType } from "./reviewPlatformType";
import { faqType } from "./faqType";
import { homePageSettingType } from "./homePageSettingType";

export const schema: { types: SchemaTypeDefinition[]; templates: any } = {
  types: [
    projectType,
    projectIndustryType,
    reviewType,
    reviewPlatformType,
    faqType,
    homePageSettingType,
  ],
  // Filter out singleton types from the global “New document” menu options
  templates: (templates: any[]) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
