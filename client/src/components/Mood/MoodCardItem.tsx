import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { ETabKey, IMood } from "@/types";

import { MoodDeleteModal, MoodEditModal } from "@/components";

type MoodCardProps = {
  mood: IMood;
};

export function MoodCard({ mood }: MoodCardProps) {
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
      <div
        className="rounded-lg p-4 pt-0 border border-gray-200 dark:border-gray-800"
        style={{ borderLeft: `5px solid ${mood.color}` }}
      >
        <div className="flex items-center justify-between w-full mt-2">
          <p className="text-xl font-semibold mb-2"> {mood.name}</p>
        </div>
        <p className="text-sm text-gray-600 capitalize">
          {mood.valence} · intensité {mood.intensity}/5
        </p>
        {mood.description && (
          <p className="mt-2 h-8 text-sm">{mood.description}</p>
        )}
        <div className="divider mb-2"></div>
        <div className="justify-end card-actions gap-2">
          <button
            className="btn bg-primary/10 hover:bg-primary/30 text-primary size-8 p-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(true);
            }}
          >
            <Pencil className="size-3.5" />
          </button>
          <button
            className="btn bg-red-600/10 text-red-400 hover:bg-red-600/30 size-8 p-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmDeleteOpen(true);
            }}
          >
            <Trash className="size-3.5" />
          </button>
        </div>
      </div>
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
