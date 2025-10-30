import {
  Home,
  Calendar,
  Search,
  MessageCircle,
  MessagesSquare,
  FolderKanban,
  Activity,
  Pill,
  LayoutList,
  HeartHandshake,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export function LeftSidebar() {
  return (
    <div className="fixed z-40 drawer drawer-open h-[calc(100vh-6.3rem)] top-20 left-4 w-56 rounded-2xl shadow-lg border border-base-200">
      <div className="drawer-content w-56 flex flex-col items-start bg-white dark:bg-card rounded-2xl shadow-lg">
        <div className="flex flex-col px-2 gap-4 mt-4 w-55">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <Home className="text-base dark:text-white/40" />
            Accueil
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <Search className="text-base dark:text-white/40" />
            Explorer
          </NavLink>

          <div className="divider expert-blue m-0"></div>

          <NavLink
            to={"/activities"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <Calendar className="text-base dark:text-white/40" />
            Mes Activités
          </NavLink>

          <NavLink
            to={"/wellness"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <HeartHandshake className="text-base dark:text-white/40" />
            Mon Bien-Être
          </NavLink>

          <NavLink
            to={"/exercises"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <Activity className="text-base dark:text-white/40" />
            Mes Exercices
          </NavLink>

          <NavLink
            to={"/objectives"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <LayoutList className="text-base dark:text-white/40" />
            Mes Objectifs
          </NavLink>

          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <FolderKanban className="text-base dark:text-white/40" />
            Mes Projets
          </NavLink>

          <NavLink
            to={"/medications"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <Pill className="text-base dark:text-white/40" />
            Mes Traitements
          </NavLink>

          <div className="divider expert-blue m-0"></div>

          <NavLink
            to={"/forum"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <MessagesSquare className="text-base dark:text-white/40" />
            Forum
          </NavLink>

          <NavLink
            to={"/messages"}
            className={({ isActive }) =>
              `w-full p-3 pl-5 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/50" : ""
              }`
            }
          >
            <MessageCircle className="text-base dark:text-white/40" />
            Messages
          </NavLink>
        </div>
      </div>
    </div>
  );
}
