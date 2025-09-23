import type { ICategory } from '@/@types/ICategory'
import BadgeTableRow from "./BadgeTableRow";

export function BadgeTableView({ badgeCategories }: { badgeCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {badgeCategories?.map((badgeCategory) => (
          <BadgeTableRow key={badgeCategory.id} badgeCategory={badgeCategory}/>
        ))}
      </tbody>
    </table>
  );
}