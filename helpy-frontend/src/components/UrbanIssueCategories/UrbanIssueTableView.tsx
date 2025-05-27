import type { ICategory } from '@/@types/ICategory'
import UrbanTableRow from "./UrbanIssueTableRow";

export function UrbanIssueTableView({ urbanIssueCategories }: { urbanIssueCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {urbanIssueCategories?.map((urbanIssueCategory) => (
          <UrbanTableRow key={urbanIssueCategory.id} urbanIssueCategory={urbanIssueCategory}/>
        ))}
      </tbody>
    </table>
  );
}