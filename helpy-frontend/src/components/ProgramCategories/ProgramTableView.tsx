import type { ICategory } from '@/@types/ICategory'
import ProgramTableRow from "./ProgramTableRow";

export function ProgramTableView({ programCategories }: { programCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {programCategories?.map((programCategory) => (
          <ProgramTableRow key={programCategory.id} programCategory={programCategory}/>
        ))}
      </tbody>
    </table>
  );
}