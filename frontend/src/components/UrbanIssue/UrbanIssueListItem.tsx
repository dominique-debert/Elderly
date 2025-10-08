import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { UrbanIssueEditModal } from "./UrbanIssueEditModal";
import { UrbanIssueDeleteModal } from "./UrbanIssueDeleteModal";
import { useQueryClient } from "@tanstack/react-query";
import type { ICategory } from "@/types";

export default function UrbanIssueListItem({
  urbanIssue,
}: {
  urbanIssue: ICategory;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ["badges"] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ["badges"] });
  };

  return (
    <>
      <li
        key={urbanIssue.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
      >
        <span className="w-64 font-semibold">{urbanIssue.categoryName}</span>
        <span className="w-full">{urbanIssue.description}</span>
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
        <UrbanIssueEditModal
          urbanIssue={urbanIssue}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <UrbanIssueDeleteModal
          category={urbanIssue}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
