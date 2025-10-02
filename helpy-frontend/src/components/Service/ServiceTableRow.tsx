import Icon from '@mdi/react';
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import { useState } from 'react';
import { ServiceDeleteModal } from './ServiceDeleteModal';
import { ServiceEditModal } from './ServiceEditModal';
import { TableCell, TableRow } from '../ui/table';
import type { ICategory } from "@/@types/ICategory";

export default function ServiceTableRow({ service }: { service: ICategory }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
    <TableRow key={service.id}>
      <TableCell>
        <div className='flex gap-4'>
          {service.categoryName}
        </div>
      </TableCell>
      <TableCell>{service.description}</TableCell>
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
      <ServiceEditModal
        service={service}
        onClose={() => setIsEditOpen(false)}
      />
    )}

    {isConfirmDeleteOpen && (
      <ServiceDeleteModal
        category={service}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={() => {
          setIsConfirmDeleteOpen(false);
        }}
        />
      )}
    </>
  );
}