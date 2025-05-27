import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteActivityModal } from './ConfirmDeleteActivityModal';
import { ActivityEditModal } from './ActivityEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function ActivityTableRow({ activity }: { activity: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={activity.id}>
      <td className="w-1/3">
        {activity.categoryName}
      </td>
      <td className="w-full">
          {activity.description}
      </td>
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
      <ActivityEditModal
        activity={activity}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteActivityModal
        category={activity}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}