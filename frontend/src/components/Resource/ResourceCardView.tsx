import { ResourceCard } from "./ResourceCard";
import type { ICategory } from "@/@types";

type ResourceCardViewProps = {
  resources: ICategory[];
};

export function ResourceCardView({ resources }: ResourceCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
