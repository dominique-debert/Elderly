import { useAuth } from "@/stores";
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
  ChevronRight,
  LayoutDashboard,
  Hash,
  Bookmark,
  Bell,
  ChartColumnStacked,
  Telescope,
  Siren,
} from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function LeftSidebar() {
  const location = useLocation();
  const [forumOpen, setForumOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // auto-open if current route is under /forum
    setForumOpen(location.pathname.startsWith("/forum"));
  }, [location.pathname]);

  return (
    <div className="fixed z-40 drawer drawer-open h-[calc(100vh-6.3rem)] top-20 left-4 w-60 rounded-2xl shadow-lg border border-base-200 overflow-y-auto overflow-visible overflow-x-hidden">
      <div className="drawer-content pb-4 w-60 h-full flex flex-col items-start bg-white dark:bg-card rounded-2xl shadow-lg pr-2">
        <div className="flex flex-col px-2 gap-3 mt-4 w-59">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <LayoutDashboard className="dark:text-accent text-primary size-4" />
            Tableau de Bord
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Search className="dark:text-accent text-primary size-4" />
            Explorer
          </NavLink>

          <div className="w-55 divider expert-blue m-0"></div>

          <NavLink
            to={"/activities"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                isActive ? "bg-primary/10" : ""
              }`
            }
          >
            <Pill className="dark:text-accent text-primary size-4" />
            Mes Traitements
          </NavLink>

          <div className="w-55 divider expert-blue m-0"></div>

          <ul className="border-l-0 pl-0 w-full">
            <li className="w-full">
              <button
                type="button"
                onClick={() => setForumOpen((s) => !s)}
                aria-expanded={forumOpen}
                className={`w-55 p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  forumOpen ? "bg-primary/10" : ""
                }`}
              >
                <MessagesSquare className="dark:text-accent text-primary size-4" />
                <span className="flex-1 w-full text-left">Forum</span>
                <span
                  className={`transition-transform ${forumOpen ? "rotate-90" : ""}`}
                >
                  <ChevronRight className="size-4 text-slate-400" />
                </span>
              </button>

              {forumOpen && (
                <ul className="ml-4 mt-2 space-y-1 w-full">
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/home"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <Home className="size-4 text-orange-400" />
                      Accueil
                    </NavLink>
                  </li>
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/discover"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <Telescope className="size-4 text-orange-400" />
                      Découvrir
                    </NavLink>
                  </li>
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/discussions"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <Hash className="size-4 text-orange-400" />
                      Discussions
                    </NavLink>
                  </li>
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/categories"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <ChartColumnStacked className="size-4 text-orange-400" />
                      Catégories
                    </NavLink>
                  </li>
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/bookmarks"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <Bookmark className="size-4 text-orange-400" />
                      Mes Favoris
                    </NavLink>
                  </li>
                  <li className="w-54 pr-3 mt-4">
                    <NavLink
                      to="/forum/notifications"
                      className={({ isActive }) =>
                        `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                          isActive ? "bg-primary/10" : ""
                        }`
                      }
                    >
                      <Bell className="size-4 text-orange-400" />
                      Notifications
                    </NavLink>
                  </li>

                  {user?.isAdmin && (
                    <li className="w-54 pr-3 mt-4">
                      <NavLink
                        to="/forum/moderation"
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Siren className="size-4 text-orange-400" />
                        Moderation
                      </NavLink>
                    </li>
                  )}
                </ul>
              )}
            </li>
          </ul>

          <NavLink
            to={"/messages"}
            className={({ isActive }) =>
              `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
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
