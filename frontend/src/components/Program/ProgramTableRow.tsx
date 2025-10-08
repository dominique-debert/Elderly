import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";

import { useState } from "react";
import type { ICategory } from "@/types";

import {
  ProgramDeleteModal,
  ProgramEditModal,
  TableCell,
  TableRow,
} from "@/components";

export function ProgramTableRow({ program }: { program: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={program.id}>
        <TableCell>
          <div className="flex gap-4">{program.categoryName}</div>
        </TableCell>
        <TableCell>{program.description}</TableCell>
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
        <ProgramEditModal
          program={program}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {isConfirmDeleteOpen && (
        <ProgramDeleteModal
          category={program}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
