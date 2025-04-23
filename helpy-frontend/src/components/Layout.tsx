import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../hooks/useAuth';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-base-200">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 align-middle items-center">
          <Link to="/" className="btn btn-ghost text-2xl text-primary">
            Helpy
          </Link>
        </div>
        
      </div>

      <main className="min-h-[calc(100vh-64px)] flex flex-direction-column">
        {isAuthenticated && (
          <Sidebar />
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;