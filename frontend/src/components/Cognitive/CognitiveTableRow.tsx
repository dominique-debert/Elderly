import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";

import { useState } from "react";
import { ETabKey, type ICategory } from "@/types";

import {
  CognitiveDeleteModal,
  CognitiveEditModal,
  TableCell,
  TableRow,
} from "@/components";
import { useQueryClient } from "@tanstack/react-query";

export function CognitiveTableRow({ cognitive }: { cognitive: ICategory }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Cognitive] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Cognitive] });
  };

  return (
    <>
      <TableRow key={cognitive.id}>
        <TableCell>
          <div className="flex gap-4">{cognitive.categoryName}</div>
        </TableCell>
        <TableCell>{cognitive.description}</TableCell>
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
