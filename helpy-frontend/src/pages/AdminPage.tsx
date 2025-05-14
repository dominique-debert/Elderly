import { useState } from 'react';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router-dom';
import MoodList from '@/components/Mood/MoodList'; 
import AdminTabBar from '@/components/AdminTabBar';

// Composants pour chaque section de la page
// import ActivityList from '@/components/Activity/ActivityList';
// import BadgeList from '@/components/Badge/BadgeList';
// import CognitiveList from '@/components/Cognitive/CognitiveList';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'mood' | 'activity' | 'badge' | 'cognitive' | 'forum' | 'help' | 'nutritional' | 'program' | 'project' | 'resource' | 'service' | 'skill' | 'wellness' | null>('mood');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

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

          {/* Contenu dynamique basé sur l'onglet actif */}
          <div className="pt-2">
            {activeTab === 'mood' && <MoodList />}
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
};

export default AdminPage;
