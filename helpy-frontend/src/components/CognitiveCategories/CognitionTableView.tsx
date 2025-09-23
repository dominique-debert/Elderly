import type { ICategory } from '@/@types/ICategory'
import CognitionTableRow from "./CognitionTableRow";

export function CognitionTableView({ cognitiveCategories }: { cognitiveCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {cognitiveCategories?.map((cognitiveCategory) => (
          <CognitionTableRow key={cognitiveCategory.id} cognitiveCategory={cognitiveCategory}/>
        ))}
      </tbody>
    </table>
  );
}