import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";

import { type ICategory, type ETabKey } from "@/types";
import {
  CategoryEditModal,
  CategoryDeleteModal,
  TableCell,
  TableRow,
} from "@/components";

type CategoryTableRowProps = {
  category: ICategory;
  tabKey: ETabKey;
};

export function CategoryTableRow({ category, tabKey }: CategoryTableRowProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [tabKey] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [tabKey] });
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{category.categoryName}</TableCell>
        <TableCell>{category.description || "Aucune description"}</TableCell>
        <TableCell>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsEditOpen(true)}
              className="btn btn-sm btn-ghost text-primary bg-primary/10 p-1 h-10 w-10 hover:bg-transparent hover:border-0"
              aria-label="Modifier"
            >
              <Icon path={mdiPencilOutline} size={1} />
            </button>
            <button
              onClick={() => setIsConfirmDeleteOpen(true)}
              className="btn btn-sm btn-ghost text-error bg-error/10 p-1 h-10 w-10 hover:bg-transparent hover:border-0"
              aria-label="Supprimer"
            >
              <Icon path={mdiDeleteOutline} size={1} />
            </button>
          </div>
        </TableCell>
      </TableRow>

      {isEditOpen && (
        <CategoryEditModal
          category={category}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <CategoryDeleteModal
          category={category}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
