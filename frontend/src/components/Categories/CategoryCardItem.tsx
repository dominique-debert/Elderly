import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";

import { type ICategory, type ETabKey } from "@/types";
import { CategoryDeleteModal, CategoryEditModal } from "@/components";

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
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
        <div className="card-body">
          <h3 className="card-title text-primary">{category.categoryName}</h3>
          <p className="text-sm text-gray-400">
            {category.description || "Aucune description"}
          </p>
          <div className="card-actions justify-end mt-4 gap-2">
            <button
              onClick={() => setIsEditOpen(true)}
              className="btn btn-sm btn-ghost"
              aria-label="Modifier"
            >
              <Icon path={mdiPencilOutline} size={0.8} />
            </button>
            <button
              onClick={() => setIsConfirmDeleteOpen(true)}
              className="btn btn-sm btn-ghost text-error"
              aria-label="Supprimer"
            >
              <Icon path={mdiDeleteOutline} size={0.8} />
            </button>
          </div>
        </div>
      </div>

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
