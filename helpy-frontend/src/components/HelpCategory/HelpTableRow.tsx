import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteHelpModal } from './ConfirmDeleteHelpModal';
import { HelpEditModal } from './HelpEditModal';
import { TableCell, TableRow } from '../ui/table';
import type { ICategory } from "@/@types/ICategory";

export default function BadgeTableRow({ helpCategory }: { helpCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <TableRow key={helpCategory.id}>
      <TableCell>
        <div className='flex gap-4'>
          {helpCategory.categoryName}
        </div>
      </TableCell>
      <TableCell>{helpCategory.description}</TableCell>
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
      <HelpEditModal
        category={helpCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteHelpModal
        category={helpCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}