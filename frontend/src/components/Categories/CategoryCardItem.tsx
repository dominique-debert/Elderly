import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";

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
      <Card className="h-full gap-2 p-0">
        <div className="card-body">
          <h3 className="card-title text-primary">{category.categoryName}</h3>
          <p className="text-sm dark:text-gray-400">
            {category.description || "Aucune description"}
          </p>
          <div className="card-actions gap-4 justify-end mt-4">
            <button
              onClick={() => setIsEditOpen(true)}
              className="btn btn-sm btn-ghost p-1 h-10 w-10 text-primary bg-primary/10"
              aria-label="Modifier"
            >
              <Icon path={mdiPencilOutline} size={1} />
            </button>
            <button
              onClick={() => setIsConfirmDeleteOpen(true)}
              className="btn btn-sm btn-ghost text-error p-1 h-10 w-10 bg-error/10"
              aria-label="Supprimer"
            >
              <Icon path={mdiDeleteOutline} size={1} />
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
