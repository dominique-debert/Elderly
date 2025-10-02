import {ICategory} from '@/@types/ICategory'
import ServiceListItem from './ServiceListItem';

type ServiceListViewProps = {
  services: ICategory[];
};

export function ServiceListView({ services }: ServiceListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {services?.map((service) => (
        <ServiceListItem key={service.id} service={service}/>
      ))}
    </ul>
  );
}
