import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteProgramModal } from './ConfirmDeleteProgramModal';
import { ProgramEditModal } from './ProgramEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function ProgramTableRow({ programCategory }: { programCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={programCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {programCategory.categoryName}
        </div>
      </td>
      <td>{programCategory.description}</td>
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
      <ProgramEditModal
        category={programCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteProgramModal
        category={programCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}