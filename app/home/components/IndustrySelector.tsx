import { getProjectsIndustries } from "@/sanity/query/project";

export const revalidate = 60;

async function IndustrySelector({
  Component,
  ...props
}: {
  Component: React.ComponentType<any>;
  [key: string]: any;
}) {
  const projectIndustries = await getProjectsIndustries();

  return <Component options={projectIndustries} {...props} />;
}

export default IndustrySelector;
