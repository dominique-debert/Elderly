import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteForumModal } from '../ForumCategories/ConfirmDeleteForumModal';
import { ForumEditModal } from './ForumEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function ForumTableRow({ forumCategory }: { forumCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={forumCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {forumCategory.categoryName}
        </div>
      </td>
      <td>{forumCategory.description}</td>
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
      <ForumEditModal
        forumCategory={forumCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteForumModal
        category={forumCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}