import { getProjectsIndustries } from "@/sanity/query/project";

export const revalidate = 60;

async function IndustrySelector({
  Component,
}: {
  Component: React.ComponentType<any>;
}) {
  const projectIndustries = await getProjectsIndustries();

  return <Component options={projectIndustries} />;
}

export default IndustrySelector;
