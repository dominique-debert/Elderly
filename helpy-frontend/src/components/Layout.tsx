import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuthStore } from '../store/auth';
import { mdiBellOutline, mdiCogOutline } from '@mdi/js';
import Icon from '@mdi/react';

const Layout = () => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="no-scrollbar overflow-x-hidden overflow-y-hidden bg-100">
      <div className="navbar bg-white shadow-lg">
        <div className="flex justify-between w-full items-center">
          <Link to="/" className="btn btn-ghost text-2xl text-primary hover:bg-primary/30 rounded-xl">
            Helpy
          </Link>

          <div className='flex space-x-0'>
            <Link to="/profile" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
              <Icon path={mdiBellOutline} size={1} />
            </Link>

            {user?.isAdmin && (
              <Link to="/profile" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
                <Icon path={mdiCogOutline} size={1} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <main className="min-h-[calc(100vh-64px)] flex flex-direction-column">
        {isAuthenticated && <Sidebar />}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;