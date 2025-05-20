import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import HelpTableRow from "./HelpTableRow";

export function HelpTableView({ helpCategories }: { helpCategories: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {helpCategories?.map((helpCategory) => (
          <HelpTableRow key={helpCategory.id} helpCategory={helpCategory}/>
        ))}
      </TableBody>
    </Table>
  );
}