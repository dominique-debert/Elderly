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

export function ProjectTableRow({ project }: { project: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Project] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Project] });
  };
  return (
    <>
      <TableRow key={project.id}>
        <TableCell>
          <div className="flex gap-4">{project.categoryName}</div>
        </TableCell>
        <TableCell>{project.description}</TableCell>
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
          category={project}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <CategoryDeleteModal
          category={project}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
