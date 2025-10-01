import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import HelpTableRow from './HelpTableRow';

export function HelpTableView({ helps }: { helps: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {helps?.map((help) => (
          <HelpTableRow key={help.id} help={help}/>
        ))}
      </TableBody>
    </Table>
  );
}