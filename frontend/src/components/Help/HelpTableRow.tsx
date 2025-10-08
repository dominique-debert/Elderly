import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";

import type { ICategory } from "@/types";

import {
  HelpDeleteModal,
  HelpEditModal,
  TableCell,
  TableRow,
} from "@/components";

export function HelpTableRow({ help }: { help: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={help.id}>
        <TableCell>
          <div className="flex gap-4">{help.categoryName}</div>
        </TableCell>
        <TableCell>{help.description}</TableCell>
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
        <HelpEditModal help={help} onClose={() => setIsEditOpen(false)} />
      )}

      {isConfirmDeleteOpen && (
        <HelpDeleteModal
          category={help}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
