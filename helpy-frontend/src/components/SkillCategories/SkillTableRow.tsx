import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ConfirmDeleteSkillModal } from './ConfirmDeleteSkillModal';
import { SkillEditModal } from './SkillEditModal';
import type { ICategory } from "@/@types/ICategory";

export default function SkillTableRow({ skillCategory }: { skillCategory: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <tr key={skillCategory.id}>
      <td className="w-1/3">
        <div className='flex gap-4'>
          {skillCategory.categoryName}
        </div>
      </td>
      <td>{skillCategory.description}</td>
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
      <SkillEditModal
        category={skillCategory}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteSkillModal
        category={skillCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}