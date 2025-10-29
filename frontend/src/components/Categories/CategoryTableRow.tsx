import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";
import { PencilIcon, TrashIcon } from "lucide-react";
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
        <TableCell className="w-full">
          {category.description || "Aucune description"}
        </TableCell>
        <TableCell>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsEditOpen(true)}
              className="btn size-8 text-primary bg-primary/10 p-1 hover:bg-primary/20"
              aria-label="Modifier"
            >
              <PencilIcon className="size-4" />
            </button>
            <button
              onClick={() => setIsConfirmDeleteOpen(true)}
              className="btn size-8 text-error bg-error/10 p-1 hover:bg-error/20"
              aria-label="Supprimer"
            >
              <TrashIcon className="size-4" />
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
