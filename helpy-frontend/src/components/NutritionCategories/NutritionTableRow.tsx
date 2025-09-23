import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteNutritionModal } from './ConfirmDeleteNutritionModal';
import { NutritionEditModal } from './NutritionEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function NutritionTableRow({ nutritionCategory }: { nutritionCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={nutritionCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {nutritionCategory.categoryName}
        </div>
      </td>
      <td>{nutritionCategory.description}</td>
      <td className='text-center w-0'>
        <button className='btn btn-ghost' onClick={() => setIsEditOpen(true)}>
          <Icon path={mdiPencilOutline} size={0.8} className='text-gray-500' />
        </button>
      </td>
      <td className='text-center w-0'>
        <button className='btn btn-ghost' onClick={() => setIsConfirmDeleteOpen(true)}>
          <Icon path={mdiDeleteOutline} size={0.8} className='text-red-500' />
        </button>
      </td>
    </tr>

    {isEditOpen && (
      <NutritionEditModal
        nutritionCategory={nutritionCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteNutritionModal
        category={nutritionCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}