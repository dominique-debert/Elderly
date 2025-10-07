import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import ProgramTableRow from "./ProgramTableRow";

export function ProgramTableView({ programs }: { programs: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {programs?.map((program) => (
          <ProgramTableRow key={program.id} program={program}/>
        ))}
      </TableBody>
    </Table>
  );
}