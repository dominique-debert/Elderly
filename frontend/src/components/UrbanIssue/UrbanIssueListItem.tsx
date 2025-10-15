import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { ICategory } from "@/types";

import { CategoryDeleteModal, CategoryEditModal } from "@/components";

export function UrbanIssueListItem({ urbanIssue }: { urbanIssue: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ["urban-issues"] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ["urban-issues"] });
  };

  return (
    <>
      <li
        key={urbanIssue.id}
        className="p-4 rounded shadow-md flex items-center gap-4 border-b border-slate-800 hover:bg-slate-900/40 cursor-pointer"
      >
        <span className="w-full font-medium">{urbanIssue.categoryName}</span>
        <span className="w-full font-light text-slate-400">
          {urbanIssue.description}
        </span>
        <div className="ml-auto flex gap-2">
          <button
            className="btn btn-sm btn-ghost pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(true);
            }}
          >
            <Icon path={mdiPencilOutline} size={0.8} />
          </button>
          <button
            className="btn btn-sm btn-ghost pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmDeleteOpen(true);
            }}
          >
            <Icon path={mdiDeleteOutline} size={0.8} className="text-red-500" />
          </button>
        </div>
      </li>

      {isEditOpen && (
        <CategoryEditModal
          category={urbanIssue}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <CategoryDeleteModal
          category={urbanIssue}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
