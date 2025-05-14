import { useState } from 'react';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router-dom';
import MoodList from '@/components/Mood/MoodList'; 
import AdminTabBar from '@/components/AdminTabBar';
import ActivityList from '@/components/Activity/ActivityList';
import { ITabKey } from '@/@types/ITabKey';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();

  // Utilisation de l'enum pour le state
  const [activeTab, setActiveTab] = useState<ITabKey | null>(ITabKey.Mood);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const renderContent = () => {
    if (!activeTab) return null;
    switch (activeTab) {
      case ITabKey.Mood:
        return <MoodList />;
      case ITabKey.Activity:
        return <ActivityList />;
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
