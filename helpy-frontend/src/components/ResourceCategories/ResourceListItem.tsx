import type { ICategory } from '@/@types/ICategory';
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ResourceEditModal } from './ResourceEditModal';
import { ConfirmDeleteResourceModal } from "./ConfirmDeleteResourceModal";
import { useQueryClient } from '@tanstack/react-query';

export default function ResourceListItem({ resourceCategory }: { resourceCategory: ICategory }) {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['resource'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['resource'] });
  };

  return (
    <>
      <li
        key={resourceCategory.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
      >
        <span className="w-1/2 font-semibold">{resourceCategory.categoryName}</span>
        <span className="w-full">{resourceCategory.description}</span>
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
        <ResourceEditModal
          category={resourceCategory}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <ConfirmDeleteResourceModal
          category={resourceCategory}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
