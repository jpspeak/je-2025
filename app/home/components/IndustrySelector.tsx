import { getProjectsIndustries } from "@/sanity/query/project";
import IndustrySelectorClient from "./IndustrySelectorClient";

export const revalidate = 60;

async function IndustrySelector() {
  const projectIndustries = await getProjectsIndustries();

  return <IndustrySelectorClient options={projectIndustries} />;
}

export default IndustrySelector;
