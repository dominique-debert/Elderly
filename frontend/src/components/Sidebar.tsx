import Icon from "@mdi/react";
import {
  mdiBottleTonicPlusOutline,
  mdiForumOutline,
  mdiHeadHeartOutline,
  mdiHeartOutline,
  mdiViewDashboardOutline,
} from "@mdi/js";
import { useAuthStore } from "@/stores/auth";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <aside className="hidden w-20 mr-2 lg:block">
      <div className="fixed z-60 top-16 left-0 w-20 h-[calc(100vh-4rem)] bg-base-100 border-r border-base-300 flex flex-col items-center py-4">
        <div className="flex flex-row gap-2">
          <div className="dropdown dropdown-right">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-24 rounded-full">
                <img
                  alt="avatar"
                  src={
                    useAuthStore.getState().user?.avatarUrl ||
                    `/images/${
                      useAuthStore.getState().user?.avatar ||
                      "default-avatar.svg"
                    }`
                  }
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <a>Tes préférences</a>
              </li>
              <li>
                <Link to="/login" onClick={() => logout(navigate)}>
                  Se déconnecter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav className="flex-1 w-full px-2 space-y-2 mt-6 rounded-xl">
          <Link
            to="/"
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30"
            data-tip="Tableau de bord"
          >
            <Icon
              path={mdiViewDashboardOutline}
              size={1}
              className="text-primary"
            />
          </Link>

          <Link
            to={"/wellness"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30"
            data-tip="Bien-être"
          >
            <Icon path={mdiHeartOutline} title="Suivi du bien-être" size={1} />
          </Link>

          <Link
            to={"/medications"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30"
          >
            <Icon
              path={mdiBottleTonicPlusOutline}
              data-tip="Bien-être"
              title="Suivi du bien-être"
              size={1}
            />
          </Link>

          <Link
            to={"/objectives"}
            className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30"
          >
            <Icon
              path={mdiHeadHeartOutline}
              title="Suivi des objectifs"
              size={1}
            />
          </Link>

          <Link
            to={"/forum"}
            className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30"
          >
            <Icon path={mdiForumOutline} title="Forum" size={1} />
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
