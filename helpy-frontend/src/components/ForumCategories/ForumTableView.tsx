import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import ForumTableRow from "./ForumTableRow";

export function ForumTableView({ forumCategories }: { forumCategories: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {forumCategories?.map((forumCategory) => (
          <ForumTableRow key={forumCategory.id} forumCategory={forumCategory}/>
        ))}
      </TableBody>
    </Table>
  );
}