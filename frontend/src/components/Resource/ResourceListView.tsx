import {ICategory} from '@/@types/ICategory'
import ResourceListItem from './ResourceListItem';

type ResourceListViewProps = {
  resources: ICategory[];
};

export function ResourceListView({ resources }: ResourceListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {resources?.map((resource) => (
        <ResourceListItem key={resource.id} resource={resource}/>
      ))}
    </ul>
  );
}
