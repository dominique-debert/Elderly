import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import CognitionTableRow from "./CognitionTableRow";

export function CognitionTableView({ cognitiveCategories }: { cognitiveCategories: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cognitiveCategories?.map((cognitiveCategory) => (
          <CognitionTableRow key={cognitiveCategory.id} cognitiveCategory={cognitiveCategory}/>
        ))}
      </TableBody>
    </Table>
  );
}