import { type SchemaTypeDefinition } from "sanity";
import { singletonTypes } from "@/sanity.config";
import { projectType } from "./projectType";
import { projectIndustryType } from "./projectIndustryType";
import { reviewType } from "./reviewType";
import { reviewPlatformType } from "./reviewPlatformType";
import { faqType } from "./faqType";
import { departmentType, homePageSettingType } from "./homePageSettingType";
import { recordingType } from "./recordingType";
import { brandSolutionCategoryType } from "./brandSolutionCategoryType";

export const schema: { types: SchemaTypeDefinition[]; templates: any } = {
  types: [
    projectType,
    projectIndustryType,
    reviewType,
    reviewPlatformType,
    faqType,
    homePageSettingType,
    recordingType,
    departmentType,
    brandSolutionCategoryType,
  ],
  // Filter out singleton types from the global “New document” menu options
  templates: (templates: any[]) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
