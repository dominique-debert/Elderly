import Icon from "@mdi/react";
import { mdiViewGrid, mdiViewList, mdiTable, mdiPlus } from "@mdi/js";
import { useState } from "react";
import { WellnessCreateModal } from "../Wellness/WellnessCreateModal";
import { useQueryClient } from "@tanstack/react-query";
import { ETabKey } from "@/types/ETabKey";

type SwitchProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
  activeTab: ETabKey;
};

export function SwitchButtons({ mode, setMode, activeTab }: SwitchProps) {
  const queryClient = useQueryClient();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const handleCreated = () => {
    setIsCreateOpen(false);
    queryClient.invalidateQueries({ queryKey: [activeTab] });
  };

  return (
    <>
      <div className="join">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCreateOpen(true);
          }}
          className="btn btn-sm border-slate-700 join-item h-10"
        >
          <Icon path={mdiPlus} size={1} />
        </button>
        <button
          onClick={() => setMode("card")}
          className={`btn btn-sm border-slate-700 join-item h-10 ${
            mode === "card" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiViewGrid} size={1} />
        </button>
        <button
          onClick={() => setMode("list")}
          className={`btn btn-sm border-slate-700 join-item h-10 ${
            mode === "list" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiViewList} size={1} />
        </button>
        <button
          onClick={() => setMode("table")}
          className={`btn btn-sm border-slate-700 join-item h-10 ${
            mode === "table" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiTable} size={1} />
        </button>
      </div>

      {isCreateOpen && (
        <WellnessCreateModal
          onClose={() => setIsCreateOpen(false)}
          onCreated={handleCreated}
        />
      )}
    </>
  );
}
