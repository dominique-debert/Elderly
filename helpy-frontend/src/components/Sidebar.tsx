import Icon from '@mdi/react';
import { mdiAccount, mdiBottleTonicPlusOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiViewDashboardOutline } from '@mdi/js';
import { useAuthStore } from '../stores/auth'; 
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <aside className="w-20 mb-4 m-4 hidden lg:block">
      <div className="h-full flex flex-col items-center py-4 rounded-xl shadow-xl border border-gray-200 bg-base-100">

        <div className="p-2">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
        </div>

        <nav className="flex-1 w-full px-2 space-y-2 mt-6 rounded-xl">
          <button className="btn-active w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Link to={"/"}>
              <Icon path={mdiViewDashboardOutline}
                title="Tableau de bord"
                size={1}
                className="text-primary"
              />
            </Link>
          </button>
          
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

        </nav>

        <div className="flex flex-row gap-2">

          <div className="dropdown dropdown-right dropdown-top">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-24 rounded-full">
                <img
                  alt="avatar"
                  src={`/images/${useAuthStore.getState().user?.avatar || 'default-avatar.svg'}`}
                  />
              </div>
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-md">
              <li><a>Tes préférences</a></li>
              <li><hr /></li>
              <li>
                <Link to="/login" onClick={() => logout(navigate)}>Se déconnecter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;