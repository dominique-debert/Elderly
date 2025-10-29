import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PencilIcon, TrashIcon } from "lucide-react";
import { type ICategory, type ETabKey } from "@/types";
import { CategoryEditModal, CategoryDeleteModal } from "@/components";

type CategoryListItemProps = {
  category: ICategory;
  tabKey: ETabKey;
};

export function CategoryListItem({ category, tabKey }: CategoryListItemProps) {
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
      <li className="bg-white dark:bg-transparent p-4 rounded flex items-center gap-4 dark:border-b dark:border-slate-800 dark:hover:bg-slate-900/40 transition-colors">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary">
            {category.categoryName}
          </h3>
          <p className="text-sm dark:text-gray-400">
            {category.description || "Aucune description"}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsEditOpen(true)}
            className="btn btn-sm size-8 p-1 text-primary bg-primary/10 hover:bg-primary/20"
            aria-label="Modifier"
          >
            <PencilIcon className="size-4" />
          </button>
          <button
            onClick={() => setIsConfirmDeleteOpen(true)}
            className="btn btn-sm size-8 p-1 text-error bg-error/10 hover:bg-error/20"
            aria-label="Supprimer"
          >
            <TrashIcon className="size-4" />
          </button>
        </div>
      </li>

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
