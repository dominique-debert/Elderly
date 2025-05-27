import type { ICategory } from '@/@types/ICategory';
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ActivityEditModal } from './ActivityEditModal';
import { ConfirmDeleteActivityModal } from './ConfirmDeleteActivityModal';
import { useQueryClient } from '@tanstack/react-query';

export default function ActivityListItem({ activity }: { activity: ICategory }) {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['activities'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['activities'] });
  };

  return (
    <>
      <li
        key={activity.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
      >
        <span className="w-1/2 font-semibold">{activity.categoryName}</span>
        <span className="ml-[32px] w-full">{activity.description}</span>
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
        <ActivityEditModal
          activity={activity}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <ConfirmDeleteActivityModal
          category={activity}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
