import { useState } from 'react';
import { useAuthStore } from '../stores/auth';
import { Navigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHeartSettingsOutline } from '@mdi/js';
import MoodList from '../components/MoodList';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'moods' | 'activities' | 'badges' | 'cognitive' | 'forum' | 'help' | 'nutritional' | 'program' | 'project' | 'resource' | 'service' | 'skill' | 'wellness' | null>('moods');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-auto">
      {user && user.isAdmin ? (
        <>
          {/* Sticky header + menu */}
          <div className="bg-white sticky top-0 z-30 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-gray-500 border-b border-gray-200 mb-4">
              Administration
            </h2>
            <ul className="menu bg-white lg:menu-horizontal rounded-box p-0">
              {[
                { id: 'moods', label: 'Humeurs', icon: mdiHeartSettingsOutline },
                { id: 'activities', label: 'Activités' },
                { id: 'badges', label: 'Badges' },
                { id: 'cognitive', label: 'Cognition' },
                { id: 'forum', label: 'Forum' },
                { id: 'help', label: 'Aide' },
                { id: 'nutritional', label: 'Nutrition' },
                { id: 'program', label: 'Programmes' },
                { id: 'project', label: 'Projets' },
                { id: 'resource', label: 'Ressources' },
                { id: 'service', label: 'Services' },
                { id: 'skill', label: 'Compétences' },
                { id: 'wellness', label: 'Bien-être' },
              ].map(({ id, label, icon }) => (
                <li key={id}>
                  <a
                    className={activeTab === id ? 'menu-active' : ''}
                    onClick={() => setActiveTab(id as typeof activeTab)}
                  >
                    {icon && <Icon path={icon} size={0.8} className="text-white-400" />}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="pt-2">
            {activeTab === 'moods' && <MoodList />}
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
};

export default AdminPage;
