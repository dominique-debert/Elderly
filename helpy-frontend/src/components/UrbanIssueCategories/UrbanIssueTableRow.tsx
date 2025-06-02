import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteUrbanIssueModal } from './ConfirmDeleteUrbanIssueModal';
import { UrbanIssueEditModal } from './UrbanIssueEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function UrbanIssueTableRow({ urbanIssueCategory }: { urbanIssueCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={urbanIssueCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {urbanIssueCategory.categoryName}
        </div>
      </td>
      <td>{urbanIssueCategory.description}</td>
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
      <UrbanIssueEditModal
        category={urbanIssueCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteUrbanIssueModal
        category={urbanIssueCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}