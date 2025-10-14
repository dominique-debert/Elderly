import Icon from "@mdi/react";
import { mdiViewGrid, mdiViewList, mdiTable, mdiPlus } from "@mdi/js";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ETabKey } from "@/types/ETabKey";
import { CategoryCreateModal } from "@/components";

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
    switch (activeTab) {
      case ETabKey.Activity:
        queryClient.invalidateQueries({ queryKey: ["activities"] });
        break;
      case ETabKey.Badge:
        queryClient.invalidateQueries({ queryKey: ["badges"] });
        break;
      case ETabKey.Cognitive:
        queryClient.invalidateQueries({ queryKey: ["cognitives"] });
        break;
      case ETabKey.Forum:
        queryClient.invalidateQueries({ queryKey: ["forum-categories"] });
        break;
      case ETabKey.Help:
        queryClient.invalidateQueries({ queryKey: ["helps"] });
        break;
      case ETabKey.Mood:
        queryClient.invalidateQueries({ queryKey: ["moods"] });
        break;
      case ETabKey.Nutrition:
        queryClient.invalidateQueries({ queryKey: ["nutritions"] });
        break;
      case ETabKey.Program:
        queryClient.invalidateQueries({ queryKey: ["programs"] });
        break;
      case ETabKey.Project:
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        break;
      case ETabKey.Resource:
        queryClient.invalidateQueries({ queryKey: ["resources"] });
        break;
      case ETabKey.Service:
        queryClient.invalidateQueries({ queryKey: ["services"] });
        break;
      case ETabKey.Skill:
        queryClient.invalidateQueries({ queryKey: ["skills"] });
        break;
      case ETabKey.UrbanIssue:
        queryClient.invalidateQueries({ queryKey: ["urban-issues"] });
        break;
      case ETabKey.Wellness:
        queryClient.invalidateQueries({ queryKey: ["wellness"] });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="join">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCreateOpen(true);
          }}
          className="btn btn-sm border-slate-700 join-item dark:bg-card h-10"
        >
          <Icon path={mdiPlus} size={1} />
        </button>
        <button
          onClick={() => setMode("card")}
          className={`btn btn-sm border-slate-700 join-item dark:bg-card h-10 ${
            mode === "card" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiViewGrid} size={1} />
        </button>
        <button
          onClick={() => setMode("list")}
          className={`btn btn-sm border-slate-700 join-item dark:bg-card h-10 ${
            mode === "list" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiViewList} size={1} />
        </button>
        <button
          onClick={() => setMode("table")}
          className={`btn btn-sm border-slate-700 join-item dark:bg-card h-10 ${
            mode === "table" ? "btn-primary" : ""
          }`}
        >
          <Icon path={mdiTable} size={1} />
        </button>
      </div>
      {isCreateOpen && (
        <CategoryCreateModal
          onClose={() => setIsCreateOpen(false)}
          onCreated={handleCreated}
          selectedTab={activeTab}
          tabToTypeName={{
            [ETabKey.Activity]: "Activités",
          }}
        />
      )}
    </>
  );
}
