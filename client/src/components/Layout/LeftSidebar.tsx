import { Home, Calendar, Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function LeftSidebar() {
  return (
    <div className="drawer drawer-open h-full top-16 left-0 w-56">
      <div className="drawer-content h-screen w-56 flex flex-col items-start bg-white dark:bg-card">
        <nav className="flex-1 px-2 space-y-2 rounded-xl mt-4">
          <Link
            to="/dashboard"
            className="w-52 p-3 flex gap-4 justify-start rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <Home className="text-white/30" />
            Accueil
          </Link>

          <Link
            to=""
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
            to={"/messages"}
            className="w-full p-3 flex gap-4 justify-start items-center align-middle rounded-3xl text-slate-300 hover:bg-primary/50 focus:bg-primary/50 active:focus:bg-primary/50"
          >
            <MessageCircle className="text-white/30" />
            Messages
          </Link>
        </nav>
      </div>
    </div>
  );
}
