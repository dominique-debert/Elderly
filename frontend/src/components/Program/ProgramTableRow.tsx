import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";

import { useState } from "react";
import { ETabKey, type ICategory } from "@/types";

import {
  CategoryDeleteModal,
  CategoryEditModal,
  TableCell,
  TableRow,
} from "@/components";
import { useQueryClient } from "@tanstack/react-query";

export function ProgramTableRow({ program }: { program: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Program] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Program] });
  };

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
        <CategoryEditModal
          category={program}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <CategoryDeleteModal
          category={program}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
