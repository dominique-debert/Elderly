import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { SkillDeleteModal } from "./SkillDeleteModal";
import { SkillEditModal } from "./SkillEditModal";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ICategory } from "@/types";

export default function SkillTableRow({ skill }: { skill: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={skill.id}>
        <TableCell>
          <div className="flex gap-4">{skill.categoryName}</div>
        </TableCell>
        <TableCell>{skill.description}</TableCell>
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
        <SkillEditModal skill={skill} onClose={() => setIsEditOpen(false)} />
      )}

      {isConfirmDeleteOpen && (
        <SkillDeleteModal
          category={skill}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
