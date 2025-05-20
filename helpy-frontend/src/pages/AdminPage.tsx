import { useState } from 'react';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router-dom';

import { AdminTabBar } from '@/components/AdminTabBar';
import { ETabKey } from '@/@types/ETabKey';

import { ActivityList } from '@/components/ActivityCategories/ActivityList';
import { BadgeList } from "@/components/BadgeCategories/BadgeList";
import { CognitiveList } from '@/components/CognitiveCategory/CognitionList';
import { ForumList } from '@/components/Forum/ForumList';
import { HelpList } from "@/components/HelpCategory/HelpList";
import { MoodList } from '@/components/MoodCategories/MoodList'; 
import { NutritionalList } from '@/components/Nutrition/NutritionalList';
import { ProgramList } from '@/components/Program/ProgramList';
import { ProjectList } from '@/components/Project/ProjectList';
import { ResourceList } from '@/components/Resource/ResourceList';
import { ServiceList } from '@/components/Service/ServiceList';
import { SkillList } from '@/components/Skill/SkillList';
import { UrbanIssueList } from '@/components/UrbanIssue/UrbanIssueList';
import { WellnessList } from '@/components/WellnessCategories/WellnessList';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<ETabKey | null>(ETabKey.Mood);

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
      case ETabKey.Nutritional:
        return <NutritionalList />;
      case ETabKey.Program:
        return <ProgramList />;
      case ETabKey.Project:
        return <ProjectList />;
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
    <div className="w-full h-full px-4 pb-4 overflow-y-auto no-scrollbar">
      {user && user.isAdmin ? (
        <>
          <div className="bg-base-100 sticky top-0 z-30 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-primary border-b border-base-200 mb-4">
              Administration
            </h2>
            <AdminTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="pt-2">
            {renderContent()}
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
};

export default AdminPage;
