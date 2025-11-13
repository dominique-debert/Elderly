import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PencilIcon, TrashIcon } from "lucide-react";
import { type ICategory, type ETabKey } from "@/types";
import { Card, CategoryDeleteModal, CategoryEditModal } from "@/components";

type CategoryCardItemProps = {
  category: ICategory;
  tabKey: ETabKey;
};

export function CategoryCardItem({ category, tabKey }: CategoryCardItemProps) {
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
      <Card className="h-full gap-2 p-0 shadow-none">
        <div className="card-body">
          <h3 className="card-title text-primary">{category.categoryName}</h3>
          <p className="text-sm dark:text-gray-400">
            {category.description || "Aucune description"}
          </p>
          <div className="card-actions gap-4 justify-end mt-4">
            <button
              onClick={() => setIsEditOpen(true)}
              className="btn p-1 size-8 text-primary bg-primary/10 hover:bg-primary/20"
              aria-label="Modifier"
            >
              <PencilIcon className="size-4" />
            </button>
            <button
              onClick={() => setIsConfirmDeleteOpen(true)}
              className="btn text-error p-1 size-8 bg-error/10 hover:bg-error/20"
              aria-label="Supprimer"
            >
              <TrashIcon className="size-4" />
            </button>
          </div>
        </div>
      </Card>

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
