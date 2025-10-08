import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";

import { useState } from "react";
import type { ICategory } from "@/types";

import {
  ResourceDeleteModal,
  ResourceEditModal,
  TableCell,
  TableRow,
} from "@/components";

export function ResourceTableRow({ resource }: { resource: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={resource.id}>
        <TableCell>
          <div className="flex gap-4">{resource.categoryName}</div>
        </TableCell>
        <TableCell>{resource.description}</TableCell>
        <TableCell className="text-center w-0">
          <button className="btn btn-ghost" onClick={() => setIsEditOpen(true)}>
            <Icon
              path={mdiPencilOutline}
              size={0.8}
              className="text-gray-500"
            />
          </button>
        </TableCell>
        <TableCell className="text-center w-0">
          <button
            className="btn btn-ghost"
            onClick={() => setIsConfirmDeleteOpen(true)}
          >
            <Icon path={mdiDeleteOutline} size={0.8} className="text-red-500" />
          </button>
        </TableCell>
      </TableRow>

      {isEditOpen && (
        <ResourceEditModal
          resource={resource}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {isConfirmDeleteOpen && (
        <ResourceDeleteModal
          category={resource}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
