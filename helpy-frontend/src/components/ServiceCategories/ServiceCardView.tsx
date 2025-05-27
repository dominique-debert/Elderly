import type { ICategory } from '@/@types/ICategory';
import { ServiceCard } from './ServiceCard';

type ServiceCardViewProps = {
  serviceCategories: ICategory[];
};

export function ServiceCardView({ serviceCategories }: ServiceCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {serviceCategories.map((serviceCategory) => (
        <ServiceCard key={serviceCategory.id} serviceCategory={serviceCategory} />
      ))}
    </div>
  );
}
