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
    <div className="drawer drawer-open h-full top-16 left-0 w-56">
      <div className="drawer-content h-screen w-56 flex flex-col items-start bg-white dark:bg-card">
        <div className="flex flex-col px-2 gap-4 mt-2">
          <Link
            to="/dashboard"
            className="w-52 mt-2 p-3 flex gap-4 justify-start rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Home className="text-white/30" />
            Accueil
          </Link>

          <Link
            to="/explore"
            className="w-full p-3 flex gap-4 justify-start rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Search className="text-white/30" />
            Explorer
          </Link>

          <Link
            to={"/activities"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Calendar className="text-white/30" />
            Mes Activités
          </Link>

          <Link
            to={"/wellness"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <HeartHandshake className="text-white/30" />
            Mon Bien-Être
          </Link>

          <Link
            to={"/exercises"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Activity className="text-white/30" />
            Mes Exercices
          </Link>

          <Link
            to={"/objectives"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <LayoutList className="text-white/30" />
            Mes Objectifs
          </Link>

          <Link
            to={"/projects"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <FolderKanban className="text-white/30" />
            Mes Projets
          </Link>

          <Link
            to={"/medications"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Pill className="text-white/30" />
            Mes Traitements
          </Link>

          <Link
            to={"/forum"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <MessagesSquare className="text-white/30" />
            Forum
          </Link>

          <Link
            to={"/messages"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <MessageCircle className="text-white/30" />
            Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
