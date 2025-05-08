import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuthStore } from '../stores/auth';
import Navbar from './Navbar';

const Layout = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-100 md:overflow-y-auto">

     <Navbar />
      <main className="flex flex-direction-column h-dvh">
        {isAuthenticated && <Sidebar />}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;