import type { ICategory } from '@/@types/ICategory';
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { NutritionEditModal } from './NutritionEditModal';
import { ConfirmDeleteNutritionModal } from './ConfirmDeleteNutritionModal';
import { useQueryClient } from '@tanstack/react-query';

export default function NutritionListItem({ nutritionCategory }: { nutritionCategory: ICategory }) {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['nutrition'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['nutrition'] });
  };

  return (
    <>
      <li
        key={nutritionCategory.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
      >
        <span className="w-1/2 font-semibold">{nutritionCategory.categoryName}</span>
        <span className="ml-[32px] w-full">{nutritionCategory.description}</span>
        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-ghost pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(true);
            }}
          >
            <Icon path={mdiPencilOutline} size={0.8} />
          </button>
          <button
            className="btn btn-sm btn-ghost pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmDeleteOpen(true);
            }}
          >
            <Icon path={mdiDeleteOutline} size={0.8} className="text-red-500" />
          </button>
        </div>
      </li>

      {isEditOpen && (
        <NutritionEditModal
          nutritionCategory={nutritionCategory}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <ConfirmDeleteNutritionModal
          category={nutritionCategory}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
