import type { ICategory } from '@/@types/ICategory'
import ServiceTableRow from "./ServiceTableRow";

export function ServiceTableView({ serviceCategories }: { serviceCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {serviceCategories?.map((serviceCategory) => (
          <ServiceTableRow key={serviceCategory.id} serviceCategory={serviceCategory}/>
        ))}
      </tbody>
    </table>
  );
}