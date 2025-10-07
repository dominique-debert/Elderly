import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { ProjectDeleteModal } from "./ProjectDeleteModal";
import { ProjectEditModal } from "./ProjectEditModal";
import { TableCell, TableRow } from "../ui/table";
import type { ICategory } from "@/@types";

export default function ProjectTableRow({ project }: { project: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

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
        <ProjectEditModal
          project={project}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {isConfirmDeleteOpen && (
        <ProjectDeleteModal
          category={project}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
