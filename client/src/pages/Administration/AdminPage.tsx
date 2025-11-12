import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { ECategoryType, ETabKey } from "@/types";
import { AdminTabBar, CategoryList, MoodList } from "@/components";

export function AdminPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<ETabKey>(ETabKey.Activity);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Mapping entre ETabKey et ECategoryType
  const tabToCategoryType: Record<ETabKey, ECategoryType> = {
    [ETabKey.Activity]: ECategoryType.ACTIVITY,
    [ETabKey.Badge]: ECategoryType.BADGE,
    [ETabKey.Cognitive]: ECategoryType.COGNITIVE,
    [ETabKey.Forum]: ECategoryType.FORUM,
    [ETabKey.Help]: ECategoryType.HELP,
    [ETabKey.Mood]: ECategoryType.MOOD,
    [ETabKey.Nutrition]: ECategoryType.NUTRITION,
    [ETabKey.Program]: ECategoryType.PROGRAM,
    [ETabKey.Project]: ECategoryType.PROJECT,
    [ETabKey.Resource]: ECategoryType.RESOURCE,
    [ETabKey.Service]: ECategoryType.SERVICE,
    [ETabKey.Skill]: ECategoryType.SKILL,
    [ETabKey.UrbanIssue]: ECategoryType.URBAN_ISSUE,
    [ETabKey.Wellness]: ECategoryType.WELLNESS,
  };

  return (
    <div className="flex flex-col">
      {user && user.isAdmin ? (
        <>
          <div className="p-4 w-full dark:bg-transparent bg-(--root-bg)">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 -mb-4">
              Administration
            </h2>
            <div className="divider expert-blue mb-0"></div>
            <AdminTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div>
            {activeTab === ETabKey.Mood ? (
              <MoodList />
            ) : (
              <CategoryList
                categoryType={tabToCategoryType[activeTab]}
                tabKey={activeTab}
              />
            )}
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
}
