import type { ICategory } from '@/@types/ICategory'
import ResourceTableRow from "./ResourceTableRow";

export function ResourceTableView({ resourceCategories }: { resourceCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {resourceCategories?.map((resourceCategory) => (
          <ResourceTableRow key={resourceCategory.id} resourceCategory={resourceCategory}/>
        ))}
      </tbody>
    </table>
  );
}