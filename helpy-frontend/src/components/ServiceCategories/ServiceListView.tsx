import {ICategory} from '@/@types/ICategory'
import ServiceListItem from './ServiceListItem';

type ServiceListViewProps = {
  serviceCategories: ICategory[];
};

export function ServiceListView({ serviceCategories }: ServiceListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {serviceCategories?.map((serviceCategory) => (
        <ServiceListItem key={ serviceCategory.id } serviceCategory={ serviceCategory }/>
      ))}
    </ul>
  );
}
