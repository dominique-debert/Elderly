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
              `p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Home className="dark:text-accent text-primary size-4" />
            Accueil
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Search className="dark:text-accent text-primary size-4" />
            Explorer
          </NavLink>

          <div className="divider expert-blue m-0"></div>

          <NavLink
            to={"/activities"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Calendar className="dark:text-accent text-primary size-4" />
            Mes Activités
          </NavLink>

          <NavLink
            to={"/wellness"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <HeartHandshake className="dark:text-accent text-primary size-4" />
            Mon Bien-Être
          </NavLink>

          <NavLink
            to={"/exercises"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Activity className="dark:text-accent text-primary size-4" />
            Mes Exercices
          </NavLink>

          <NavLink
            to={"/objectives"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <LayoutList className="dark:text-accent text-primary size-4" />
            Mes Objectifs
          </NavLink>

          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <FolderKanban className="dark:text-accent text-primary size-4" />
            Mes Projets
          </NavLink>

          <NavLink
            to={"/medications"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Pill className="dark:text-accent text-primary size-4" />
            Mes Traitements
          </NavLink>

          <div className="divider expert-blue m-0"></div>

          <NavLink
            to={"/forum"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <MessagesSquare className="dark:text-accent text-primary size-4" />
            Forum
          </NavLink>

          <NavLink
            to={"/messages"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <MessageCircle className="dark:text-accent text-primary size-4" />
            Messages
          </NavLink>
        </div>
      </div>
    </div>
  );
}
