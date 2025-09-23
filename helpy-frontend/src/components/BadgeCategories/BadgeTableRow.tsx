import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteBadgeModal } from './ConfirmDeleteBadgeModal';
import { BadgeEditModal } from './BadgeEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function BadgeTableRow({ badgeCategory }: { badgeCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={badgeCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {badgeCategory.categoryName}
        </div>
      </td>
      <td>{badgeCategory.description}</td>
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
      <BadgeEditModal
        badgeCategory={badgeCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteBadgeModal
        category={badgeCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}