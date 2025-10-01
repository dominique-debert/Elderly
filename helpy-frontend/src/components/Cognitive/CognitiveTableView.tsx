import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import CognitiveTableRow from "./CognitiveTableRow";

export default function CognitiveTableView({ cognitives }: { cognitives: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cognitives?.map((cognitive) => (
          <CognitiveTableRow key={cognitive.id} cognitive={cognitive}/>
        ))}
      </TableBody>
    </Table>
  );
}