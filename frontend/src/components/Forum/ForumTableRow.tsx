import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";

import type { ICategory } from "@/types";

import {
  ForumDeleteModal,
  ForumEditModal,
  TableCell,
  TableRow,
} from "@/components";

export function ForumTableRow({ forum }: { forum: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={forum.id}>
        <TableCell>
          <div className="flex gap-4">{forum.categoryName}</div>
        </TableCell>
        <TableCell>{forum.description}</TableCell>
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
        <ForumEditModal forum={forum} onClose={() => setIsEditOpen(false)} />
      )}

      {isConfirmDeleteOpen && (
        <ForumDeleteModal
          category={forum}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
