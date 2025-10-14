import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { ETabKey } from "@/types";

import {
  AdminTabBar,
  ActivityList,
  BadgeList,
  CognitiveList,
  ForumList,
  HelpList,
  MoodList,
  NutritionList,
  ProgramList,
  ProjectList,
  ResourceList,
  ServiceList,
  SkillList,
  UrbanIssueList,
  WellnessList,
} from "@/components";

export function AdminPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<ETabKey | null>(ETabKey.Activity);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const renderContent = () => {
    if (!activeTab) return null;
    switch (activeTab) {
      case ETabKey.Activity:
        return <ActivityList />;
      case ETabKey.Badge:
        return <BadgeList />;
      case ETabKey.Cognitive:
        return <CognitiveList />;
      case ETabKey.Forum:
        return <ForumList />;
      case ETabKey.Help:
        return <HelpList />;
      case ETabKey.Mood:
        return <MoodList />;
      case ETabKey.Nutrition:
        return <NutritionList />;
      case ETabKey.Project:
        return <ProjectList />;
      case ETabKey.Program:
        return <ProgramList />;
      case ETabKey.Resource:
        return <ResourceList />;
      case ETabKey.Service:
        return <ServiceList />;
      case ETabKey.Skill:
        return <SkillList />;
      case ETabKey.UrbanIssue:
        return <UrbanIssueList />;
      case ETabKey.Wellness:
        return <WellnessList />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-auto no-scrollbar mt-20">
      {user && user.isAdmin ? (
        <>
          <div className="sticky top-0 z-30 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-primary border-b border-slate-800 mb-4">
              Administration
            </h2>
            <AdminTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="pt-2">{renderContent()}</div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
}
