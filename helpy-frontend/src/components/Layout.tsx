import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuthStore } from '../store/auth';
import Navbar from './Navbar';

const Layout = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="no-scrollbar overflow-x-hidden overflow-y-hidden bg-100">

     <Navbar />
      <main className="min-h-[calc(100vh-64px)] flex flex-direction-column">
        {isAuthenticated && <Sidebar />}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;