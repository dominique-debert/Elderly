import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ETabKey } from "@/types/ETabKey";
import { CategoryCreateModal } from "@/components";
import { LayoutGridIcon, Grid2X2Icon, ListIcon, PlusIcon } from "lucide-react";

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
          className="btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-card h-10"
        >
          <PlusIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("card")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-card h-10 ${
            mode === "card" ? "btn-primary" : ""
          }`}
        >
          <LayoutGridIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("list")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-card h-10 ${
            mode === "list" ? "btn-primary" : ""
          }`}
        >
          <ListIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("table")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-card h-10 ${
            mode === "table" ? "btn-primary" : ""
          }`}
        >
          <Grid2X2Icon className="size-5" />
        </button>
      </div>

      {isCreateOpen && (
        <CategoryCreateModal
          onClose={() => setIsCreateOpen(false)}
          onCreated={handleCreated}
          selectedTab={activeTab}
          tabToTypeName={{
            [ETabKey.Activity]: "Activités",
            [ETabKey.Badge]: "Badges",
            [ETabKey.Cognitive]: "Cognition",
            [ETabKey.Forum]: "Forum",
            [ETabKey.Help]: "Aide",
            [ETabKey.Mood]: "Humeurs",
            [ETabKey.Nutrition]: "Nutrition",
            [ETabKey.Program]: "Programmes",
            [ETabKey.Project]: "Projets",
            [ETabKey.Resource]: "Ressources",
            [ETabKey.Service]: "Services",
            [ETabKey.Skill]: "Compétences",
            [ETabKey.UrbanIssue]: "Problèmes urbains",
            [ETabKey.Wellness]: "Bien-être",
          }}
        />
      )}
    </>
  );
}
