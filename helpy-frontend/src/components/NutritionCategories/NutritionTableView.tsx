import type { ICategory } from '@/@types/ICategory'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import NutritionTableRow from "./NutritionTableRow";

export function NutritionTableView({ nutritionCategories }: { nutritionCategories: ICategory[] }) {   
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nutritionCategories?.map((nutritionCategory) => (
          <NutritionTableRow key={nutritionCategory.id} nutritionCategory={nutritionCategory}/>
        ))}
      </TableBody>
    </Table>
  );
}