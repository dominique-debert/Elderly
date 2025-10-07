import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { UrbanIssueDeleteModal } from "./UrbanIssueDeleteModal";
import { UrbanIssueEditModal } from "./UrbanIssueEditModal";
import { TableCell, TableRow } from "../ui/table";
import type { ICategory } from "@/@types";

export default function UrbanIssueTableRow({
  urbanIssue,
}: {
  urbanIssue: ICategory;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  return (
    <>
      <TableRow key={urbanIssue.id}>
        <TableCell>
          <div className="flex gap-4">{urbanIssue.categoryName}</div>
        </TableCell>
        <TableCell>{urbanIssue.description}</TableCell>
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
        <UrbanIssueEditModal
          urbanIssue={urbanIssue}
          onClose={() => setIsEditOpen(false)}
        />
      )}

      {isConfirmDeleteOpen && (
        <UrbanIssueDeleteModal
          category={urbanIssue}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
