import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ActivityDeleteModal } from './ActivityDeleteModal';
import { ActivityEditModal } from './ActivityEditModal';
import { TableCell, TableRow } from '../ui/table';
import type { ICategory } from "@/@types/ICategory";

export default function ActivityTableRow({ activity }: { activity: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <TableRow key={activity.id}>
      <TableCell>
        <div className='flex gap-4'>
          {activity.categoryName}
        </div>
      </TableCell>
      <TableCell>{activity.description}</TableCell>
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
      <ActivityEditModal
        activity={activity}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ActivityDeleteModal
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