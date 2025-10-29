import Icon from "@mdi/react";
import { mdiCircle } from "@mdi/js";
import { useState } from "react";
import { PencilIcon, TrashIcon } from "lucide-react";
import type { IMood } from "@/types/IMood";

import {
  MoodDeleteModal,
  MoodEditModal,
  TableCell,
  TableRow,
} from "@/components";
import { ETabKey } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export function MoodTableRow({ mood }: { mood: IMood }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Mood] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Mood] });
  };

  return (
    <>
      <TableRow key={mood.id}>
        <TableCell>
          <div className="flex gap-4">
            <Icon path={mdiCircle} size={0.8} style={{ color: mood.color }} />
            {mood.name}
          </div>
        </TableCell>
        <TableCell>{mood.description}</TableCell>
        <TableCell>{mood.valence}</TableCell>
        <TableCell className="text-center">{mood.intensity}/5</TableCell>
        <TableCell className="text-center">
          {new Date(mood.createdAt).toLocaleDateString()}
        </TableCell>
        <TableCell className="text-center w-0">
          <div className="flex gap-4 justify-center">
            <button
              className="btn text-primary bg-primary/20 hover:bg-primary/30 size-8 p-0"
              onClick={() => setIsEditOpen(true)}
            >
              <PencilIcon className="size-4" />
            </button>
            <button
              className="btn text-red-400 bg-red-600/20 hover:bg-red-600/30 size-8 p-0"
              onClick={() => setIsConfirmDeleteOpen(true)}
            >
              <TrashIcon className="size-4" />
            </button>
          </div>
        </TableCell>
      </TableRow>

      {isEditOpen && (
        <MoodEditModal
          mood={mood}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleUpdated}
        />
      )}

      {isConfirmDeleteOpen && (
        <MoodDeleteModal
          mood={mood}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
