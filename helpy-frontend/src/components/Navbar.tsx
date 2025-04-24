import { Link } from 'react-router-dom';
import { mdiBellOutline, mdiCogOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useAuthStore } from '../store/auth';

const Navbar = () => {
  const { user } = useAuthStore();

  return (
    <div className="navbar bg-white border border-b-gray-200 border-r-0 border-l-0 border-t-0">
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
  );
};

export default Navbar;