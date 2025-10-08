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

export function MoodTableRow({ mood }: { mood: IMood }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

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
        <MoodEditModal mood={mood} onClose={() => setIsEditOpen(false)} />
      )}

      {isConfirmDeleteOpen && (
        <MoodDeleteModal
          mood={mood}
          onClose={() => setIsConfirmDeleteOpen(false)}
          onConfirm={() => {
            setIsConfirmDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}
