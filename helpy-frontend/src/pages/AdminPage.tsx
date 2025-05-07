import { useState } from 'react';
import { useAuthStore } from '../stores/auth';
import { Navigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFolderSettingsOutline, mdiHeartSettingsOutline } from '@mdi/js';
import MoodList from '../components/MoodList';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'moods' | 'categories' | null>('moods');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col p-5 w-full h-full">
      {user && user.isAdmin ? (
        <>
          <h2 className='text-2xl text-primary mb-4 border-primary border-b-1'>Administration</h2>
          <ul className="menu bg-base-100 lg:menu-horizontal rounded-box w-full p-0">
            <li>
              <a
                className={activeTab === 'moods' ? 'menu-active' : ''}
                onClick={() => setActiveTab('moods')}
              >
                <Icon
                  path={mdiHeartSettingsOutline}
                  size={0.8}
                  className="text-white-400"
                />
                Humeurs
              </a>
            </li>
            <li>
              <a
                className={activeTab === 'categories' ? 'menu-active' : ''}
                onClick={() => setActiveTab('categories')}
              >
                <Icon
                  path={mdiFolderSettingsOutline}
                  size={0.8}
                  className="text-gray-400"
                />
                Catégories
              </a>
            </li>
          </ul>

          {activeTab === 'moods' && <MoodList />}
          {/* Tu peux afficher d'autres composants si besoin */}
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
};

export default AdminPage;
