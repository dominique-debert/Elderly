import Icon from "@mdi/react";
import { mdiPencilOutline, mdiCircle, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";

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
          <button className="btn btn-ghost" onClick={() => setIsEditOpen(true)}>
            <Icon
              path={mdiPencilOutline}
              size={0.8}
              className="text-slate-400"
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
