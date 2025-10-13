import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useQueryClient } from "@tanstack/react-query";
import type { ICategory } from "@/types";
import { CognitiveEditModal, CognitiveDeleteModal } from "@/components";

export function CognitiveListItem({ cognitive }: { cognitive: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ["activities"] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ["activities"] });
  };

  return (
    <>
      <li
        key={cognitive.id}
        className="p-4 rounded shadow-md flex items-center gap-4 border-b border-slate-800 hover:bg-slate-900/40 cursor-pointer"
      >
        <span className="w-full font-medium">{cognitive.categoryName}</span>
        <span className="w-full font-light text-slate-400">
          {cognitive.description}
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
        <CognitiveEditModal
          cognitive={cognitive}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <CognitiveDeleteModal
          category={cognitive}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
