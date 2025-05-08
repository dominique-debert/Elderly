import { Link } from 'react-router-dom';
import { mdiAccount, mdiBellOutline, mdiBottleTonicPlusOutline, mdiCogOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiViewDashboardOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useAuthStore } from '../stores/auth';

const Navbar = () => {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <header className="header-area">

      <div className="navbar fixed top-0 z-50 h-16 w-full bg-base-100 shadow-sm border-b border-gray-200">
        <div className="flex justify-between w-full items-center">

        <Link to="/" className="btn btn-ghost text-2xl text-primary hover:bg-primary/30 rounded-xl">
          <div className="p-2">
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
          </div>
          Helpy
        </Link>

        <div className='flex space-x-2 xs:block lg:hidden'>
            <Link to={"/"}>
          <button className="btn-active w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiViewDashboardOutline}
                title="Tableau de bord"
                size={1}
                className="text-primary"
              />
          </button>
            </Link>
          
          <Link to="/profile" className="justify-between">
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiAccount}
              title="Profil"
              size={1}
              />
          </button>
          </Link>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiBottleTonicPlusOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiHeartOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiHeadHeartOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiForumOutline}
              title="Profil"
              size={1}
            />
          </button>
        </div>

        <div className='flex space-x-0'>
          {isAuthenticated && (
            <Link to="/profile" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
              <Icon path={mdiBellOutline} size={1} />
            </Link>
          )}
          {user?.isAdmin && (
            <Link to="/admin-page" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
              <Icon path={mdiCogOutline} size={1} />
            </Link>
          )}
        </div>
      </div>
    </div>
    </header>

  );
};

export default Navbar;