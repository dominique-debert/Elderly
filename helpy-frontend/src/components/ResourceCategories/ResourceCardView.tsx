import type { ICategory } from '@/@types/ICategory';
import { ResourceCard } from './ResourceCard';

type ResourceCardViewProps = {
  resourceCategories: ICategory[];
};

export function ResourceCardView({ resourceCategories }: ResourceCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {resourceCategories.map((resourceCategory) => (
        <ResourceCard key={resourceCategory.id} resourceCategory={resourceCategory} />
      ))}
    </div>
  );
}
