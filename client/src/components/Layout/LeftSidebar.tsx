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
import { Link } from "react-router-dom";

export function LeftSidebar() {
  return (
    <div className="fixed z-40 drawer drawer-open h-[calc(100vh-6.3rem)] top-20 left-4 w-56 rounded-2xl shadow-lg border border-base-200">
      <div className="drawer-content w-56 flex flex-col items-start bg-white dark:bg-card rounded-2xl shadow-lg">
        <div className="flex flex-col px-2 gap-4 mt-4 w-55">
          <Link
            to="/dashboard"
            className="p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Home className="text-slate-400 dark:text-white/30" />
            Accueil
          </Link>

          <Link
            to="/explore"
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Search className="text-slate-400 dark:text-white/30" />
            Explorer
          </Link>

          <div className="divider expert-blue m-0"></div>

          <Link
            to={"/activities"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Calendar className="text-slate-400 dark:text-white/30" />
            Mes Activités
          </Link>

          <Link
            to={"/wellness"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <HeartHandshake className="text-slate-400 dark:text-white/30" />
            Mon Bien-Être
          </Link>

          <Link
            to={"/exercises"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Activity className="text-slate-400 dark:text-white/30" />
            Mes Exercices
          </Link>

          <Link
            to={"/objectives"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <LayoutList className="text-slate-400 dark:text-white/30" />
            Mes Objectifs
          </Link>

          <Link
            to={"/projects"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <FolderKanban className="text-slate-400 dark:text-white/30" />
            Mes Projets
          </Link>

          <Link
            to={"/medications"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Pill className="text-slate-400 dark:text-white/30" />
            Mes Traitements
          </Link>

          <div className="divider expert-blue m-0"></div>

          <Link
            to={"/forum"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <MessagesSquare className="text-slate-400 dark:text-white/30" />
            Forum
          </Link>

          <Link
            to={"/messages"}
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <MessageCircle className="text-slate-400 dark:text-white/30" />
            Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
