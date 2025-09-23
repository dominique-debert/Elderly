import type { ICategory } from '@/@types/ICategory'
import HelpTableRow from "./HelpTableRow";

export function HelpTableView({ helpCategories }: { helpCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {helpCategories?.map((helpCategory) => (
          <HelpTableRow key={helpCategory.id} helpCategory={helpCategory}/>
        ))}
      </tbody>
    </table>
  );
}