import Icon from "@mdi/react";
import {
  mdiBottleTonicPlusOutline,
  mdiForumOutline,
  mdiHeadHeartOutline,
  mdiHeartOutline,
  mdiViewDashboardOutline,
} from "@mdi/js";
import { Link } from "react-router-dom";

export function LeftSidebar() {
  return (
    <aside className="hidden w-20 mr-2 lg:block">
      <div className="fixed bg-white dark:bg-card z-60 top-16 left-0 w-20 h-[calc(100vh-4rem)] border-r border-base-300 flex flex-col items-center py-4">
        <nav className="flex-1 w-full px-2 space-y-2 rounded-xl">
          <Link
            to="/dashboard"
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30 tooltip-accent focus:bg-primary/30 active:focus:bg-primary/30"
            data-tip="Tableau de bord"
          >
            <Icon path={mdiViewDashboardOutline} size={1} />
          </Link>

          <Link
            to={"/wellness"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30 tooltip-accent focus:bg-primary/30 active:focus:bg-primary/30"
            data-tip="Bien-être"
          >
            <Icon path={mdiHeartOutline} size={1} />
          </Link>

          <Link
            to={"/medications"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30 tooltip-accent focus:bg-primary/30 active:focus:bg-primary/30"
            data-tip="Traitements"
          >
            <Icon path={mdiBottleTonicPlusOutline} size={1} />
          </Link>

          <Link
            to={"/objectives"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30 tooltip-accent focus:bg-primary/30 active:focus:bg-primary/30"
            data-tip="Objectifs"
          >
            <Icon path={mdiHeadHeartOutline} size={1} />
          </Link>

          <Link
            to={"/forum"}
            className="tooltip tooltip-right w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30 tooltip-accent focus:bg-primary/30 active:focus:bg-primary/30"
            data-tip="Forum"
          >
            <Icon path={mdiForumOutline} size={1} />
          </Link>
        </nav>
      </div>
    </aside>
  );
}
