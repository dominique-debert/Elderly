import {ICategory} from '@/@types/ICategory'
import ResourceListItem from './ResourceListItem';

type ResourceListViewProps = {
  resourceCategories: ICategory[];
};

export function ResourceListView({ resourceCategories }: ResourceListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {resourceCategories?.map((resourceCategory) => (
        <ResourceListItem key={ resourceCategory.id } resourceCategory={ resourceCategory }/>
      ))}
    </ul>
  );
}
