import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ETabKey, type ICategory } from "@/types";

import { CategoryDeleteModal, CategoryEditModal } from "@/components";

type ProjectCardProps = {
  project: ICategory;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Project] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: [ETabKey.Project] });
  };

  return (
    <>
      <div className="card rounded-lg pt-0 shadow-lg h-full">
        <div className="card-body">
          <div className="flex items-center justify-between w-full mt-2">
            <p className="text-xl font-semibold mb-2">
              {" "}
              {project.categoryName}
            </p>
          </div>
          <p className="text-sm text-gray-600">
            {project.description && (
              <p className="mt-2">{project.description}</p>
            )}
          </p>
          <div className="divider"></div>
          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditOpen(true);
              }}
            >
              <Icon path={mdiPencilOutline} size={0.8} />
              Modifier
            </button>
            <button
              className="btn btn-outline"
              onClick={(e) => {
                e.stopPropagation();
                setIsConfirmDeleteOpen(true);
              }}
            >
              <Icon
                path={mdiDeleteOutline}
                size={0.8}
                className="text-red-500"
              />
              Supprimer
            </button>
          </div>
        </div>
        {isEditOpen && (
          <CategoryEditModal
            category={project}
            onClose={() => setIsEditOpen(false)}
            onUpdated={handleUpdated}
          />
        )}

        {isConfirmDeleteOpen && (
          <CategoryDeleteModal
            category={project}
            onClose={() => setIsConfirmDeleteOpen(false)}
            onConfirm={handleDeleted}
          />
        )}
      </div>
    </>
  );
}
