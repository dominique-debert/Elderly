import { useState } from 'react';
import { useAuthStore } from '../stores/auth';
import { Navigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFolderSettingsOutline, mdiHeartSettingsOutline } from '@mdi/js';
import MoodList from '../components/MoodList';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'moods' | 'activities' | 'badges' | 'cognitive' | 'forum' | 'help' | 'nutritional' | 'program' | 'project' | 'resource' | 'service' | 'skill' | 'wellness' | null>('moods');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col p-5 w-full h-full bg-white mr-2">
      {user && user.isAdmin ? (
        <>
            <h2 className='text-2xl bg-white font-semibold text-gray-500 mb-6 border-gray-500 border-b-1 w-full mt-18'>Administration</h2>
            <ul className="menu bg-white lg:menu-horizontal rounded-box w-full pl-0 pt-0 pb-4">
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
                  className={activeTab === 'activities' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('activities')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Activités
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'badges' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('badges')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Badges
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'cognitive' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('cognitive')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Cognition
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'forum' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('forum')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Forum
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'help' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('help')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Aide
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'nutritional' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('nutritional')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Nutrition
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'program' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('program')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Programmes
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'project' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('project')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Projets
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'resource' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('resource')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Ressources
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'service' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('service')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Services
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'skill' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('skill')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Compétences
                </a>
              </li>
              <li>
                <a
                  className={activeTab === 'wellness' ? 'menu-active' : ''}
                  onClick={() => setActiveTab('wellness')}
                >
                  <Icon
                    path={mdiFolderSettingsOutline}
                    size={0.8}
                  />
                  Bien-être
                </a>
              </li>
            </ul>
            {activeTab === 'moods' && <MoodList />}
            {/* {activeTab === 'activities' && <CategoriesPage />} */}
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
};

export default AdminPage;

//  'resource' | 'service' | 'skill' | 'wellness'