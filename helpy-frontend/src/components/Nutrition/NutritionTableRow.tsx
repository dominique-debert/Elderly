import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { NutritionDeleteModal } from './NutritionDeleteModal';
import { NutritionEditModal } from './NutritionEditModal';
import { TableCell, TableRow } from '../ui/table';
import type { ICategory } from "@/@types/ICategory";

export default function NutritionTableRow({ nutrition }: { nutrition: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <TableRow key={nutrition.id}>
      <TableCell>
        <div className='flex gap-4'>
          {nutrition.categoryName}
        </div>
      </TableCell>
      <TableCell>{nutrition.description}</TableCell>
      <TableCell className='text-center w-0'>
        <button className='btn btn-ghost' onClick={() => setIsEditOpen(true)}>
          <Icon path={mdiPencilOutline} size={0.8} className='text-gray-500' />
        </button>
      </TableCell>
      <TableCell className='text-center w-0'>
        <button className='btn btn-ghost' onClick={() => setIsConfirmDeleteOpen(true)}>
          <Icon path={mdiDeleteOutline} size={0.8} className='text-red-500' />
        </button>
      </TableCell>
    </TableRow>

    {isEditOpen && (
      <NutritionEditModal
        nutrition={nutrition}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <NutritionDeleteModal
        category={nutrition}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}