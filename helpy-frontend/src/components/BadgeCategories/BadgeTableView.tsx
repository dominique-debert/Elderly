import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import BadgeTableRow from "./BadgeTableRow";

export function BadgeTableView({ badgeCategories }: { badgeCategories: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {badgeCategories?.map((badgeCategory) => (
          <BadgeTableRow key={badgeCategory.id} badgeCategory={badgeCategory}/>
        ))}
      </TableBody>
    </Table>
  );
}