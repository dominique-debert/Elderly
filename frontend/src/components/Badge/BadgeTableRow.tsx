import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { BadgeDeleteModal } from "@/components/Badge/BadgeDeleteModal";
import { BadgeEditModal } from "@/components/Badge/BadgeEditModal";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ICategory } from "@/types";

export default function BadgeTableRow({ badge }: { badge: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={badge.id}>
        <TableCell>
          <div className="flex gap-4">{badge.categoryName}</div>
        </TableCell>
        <TableCell>{badge.description}</TableCell>
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
        <BadgeEditModal badge={badge} onClose={() => setIsEditOpen(false)} />
      )}

      {isConfirmDeleteOpen && (
        <BadgeDeleteModal
          category={badge}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
