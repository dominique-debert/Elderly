import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import NutritionTableRow from "./NutritionTableRow";

export function NutritionTableView({ nutritions }: { nutritions: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nutritions?.map((nutrition) => (
          <NutritionTableRow key={nutrition.id} nutrition={nutrition}/>
        ))}
      </TableBody>
    </Table>
  );
}