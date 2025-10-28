import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { ETabKey, type IMood } from "@/types";

import { MoodDeleteModal, MoodEditModal } from "@/components";

export function MoodListItem({ mood }: { mood: IMood }) {
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
      <li
        key={mood.id}
        className="p-4 rounded shadow-md flex items-center gap-4"
        style={{ borderLeft: `4px solid ${mood.color}` }}
      >
        <span className="w-48">{mood.name}</span>
        <span className="w-80 text-slate-400 font-light">
          {mood.description}
        </span>
        <span className="w-48 text-center">{mood.valence}</span>
        <span className="w-24 text-slate-500 font-light">
          {mood.intensity}/5
        </span>
        <div className="ml-auto flex gap-4">
          <button
            className="btn p-0 bg-primary/20 text-primary hover:bg-primary/30 size-8"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(true);
            }}
          >
            <Icon path={mdiPencilOutline} size={0.8} />
          </button>
          <button
            className="btn p-0 bg-error/10 text-error hover:bg-error/20 size-8"
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
