import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { LayoutGridIcon, Grid2X2Icon, ListIcon, PlusIcon } from "lucide-react";

type UsersSwitchProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
};

export function UsersSwitchButtons({ mode, setMode }: UsersSwitchProps) {
  const queryClient = useQueryClient();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleCreated = () => {
    setIsCreateOpen(false);
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <>
      <div className="join">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCreateOpen(true);
          }}
          className="btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10"
        >
          <PlusIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("card")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "card" ? "btn-primary" : ""
          }`}
        >
          <LayoutGridIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("list")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "list" ? "btn-primary" : ""
          }`}
        >
          <ListIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("table")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "table" ? "btn-primary" : ""
          }`}
        >
          <Grid2X2Icon className="size-5" />
        </button>
      </div>

      {/* TODO: Add UserCreateModal when ready */}
      {isCreateOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Créer un utilisateur</h3>
            <p className="py-4">
              Modal de création d'utilisateur à implémenter
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setIsCreateOpen(false)}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
