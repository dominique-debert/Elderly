import Icon from '@mdi/react';
import { mdiBottleTonicPlusOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiViewDashboardOutline } from '@mdi/js';
import { useAuthStore } from '../stores/auth'; 
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    
    <aside
      className="w-20 mr-2 lg:block"
      >

      <div className="fixed top-16 left-0 w-20 h-[calc(100vh-4rem)] bg-base-100 border-r shadow-md flex flex-col items-center py-4">

        <div className="flex flex-row gap-2">

          <div className="dropdown dropdown-right">
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
          
          <Link to={"/wellness"}>
            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiHeartOutline}
                title="Suivi du bien-être"
                size={1}
              />
            </button>
          </Link>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiBottleTonicPlusOutline}
              title="Suivi des traitements"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiHeadHeartOutline}
              title="Suivi des objectifs"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiForumOutline}
              title="Forum"
              size={1}
            />
          </button>

        </nav>

      </div>
    </aside>
  );
};

export default Sidebar;