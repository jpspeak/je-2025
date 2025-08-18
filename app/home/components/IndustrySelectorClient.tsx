"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function IndustrySelectorClient({
  className,
  options,
  ...props
}: {
  className?: string;
  options: any[];
  [key: string]: any;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleIndustryChange = (industry: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("industry", industry);

    router.replace(`/?${params.toString()}`, { scroll: false });
  };
  const gtmProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-gtm"))
  );
  return (
    <Select
      onValueChange={handleIndustryChange}
      value={searchParams.get("industry") || ""}
    >
      <SelectTrigger
        aria-label="Open industry options"
        className={cn(
          "w-full lg:w-[250px] bg-transparent rounded-none",
          className
        )}
        {...gtmProps}
      >
        <SelectValue placeholder="Choose Industry" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
      >
        <SelectItem value="all" className="p-3 text-sm lg:text-lg">
          All
        </SelectItem>
        {options.map((projectIndustry) => (
          <SelectItem
            key={projectIndustry._id}
            value={projectIndustry.slug?.current || ""}
            className="p-3 text-sm lg:text-lg lg:w-[240px]"
          >
            {projectIndustry.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default IndustrySelectorClient;
