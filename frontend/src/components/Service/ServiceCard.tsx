import { mdiDeleteOutline, mdiPencilOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ServiceDeleteModal } from "./ServiceDeleteModal";
import { ServiceEditModal } from "./ServiceEditModal";
import type { ICategory } from "@/types";

type ServiceCardProps = {
  service: ICategory;
};

export function ServiceCard({ service }: ServiceCardProps) {
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
      <div className="card rounded-lg pt-0 shadow-lg h-full">
        <div className="card-body">
          <div className="flex items-center justify-between w-full mt-2">
            <p className="text-xl font-semibold mb-2">
              {" "}
              {service.categoryName}
            </p>
          </div>
          <p className="text-sm text-gray-600">
            {service.description && (
              <p className="mt-2">{service.description}</p>
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
          <ServiceEditModal
            service={service}
            onClose={() => setIsEditOpen(false)}
            onUpdated={handleUpdated}
          />
        )}

        {isConfirmDeleteOpen && (
          <ServiceDeleteModal
            category={service}
            onClose={() => setIsConfirmDeleteOpen(false)}
            onConfirm={handleDeleted}
          />
        )}
      </div>
    </>
  );
}
