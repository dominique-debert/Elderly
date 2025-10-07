import { ServiceCard } from "./ServiceCard";
import type { ICategory } from "@/@types";

type ServiceCardViewProps = {
  services: ICategory[];
};

export function ServiceCardView({ services }: ServiceCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
