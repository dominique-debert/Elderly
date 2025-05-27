import type { ICategory } from '@/@types/ICategory';
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { BadgeEditModal } from './BadgeEditModal';
import { ConfirmDeleteBadgeModal } from './ConfirmDeleteBadgeModal';
import { useQueryClient } from '@tanstack/react-query';

export default function BadgeListItem({ badgeCategory }: { badgeCategory: ICategory }) {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['badges'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['badges'] });
  };

  return (
    <>
      <li
        key={badgeCategory.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
      >
        <span className="w-1/2 font-semibold">{badgeCategory.categoryName}</span>
        <span className="ml-[32px] w-full">{badgeCategory.description}</span>
        <div className="ml-auto flex gap-2">
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
        <BadgeEditModal
          badgeCategory={badgeCategory}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <ConfirmDeleteBadgeModal
          category={badgeCategory}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
