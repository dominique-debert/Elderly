import { useAuth } from "@/stores";
import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarContext } from "@/context/SidebarContext";
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
  ChevronLeft,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

export function LeftSidebar() {
  const location = useLocation();
  const [forumOpen, setForumOpen] = useState(false);
  const { collapsed, setCollapsed } = useContext(SidebarContext);
  const { user } = useAuth();

  useEffect(() => {
    // Auto-open forum submenu if on a forum route and sidebar is not collapsed
    const isForumRoute = location.pathname.startsWith("/forum");

    if (isForumRoute && !collapsed) {
      setForumOpen(true);
    } else if (collapsed) {
      setForumOpen(false);
    } else if (!isForumRoute) {
      setForumOpen(false);
    }
  }, [location.pathname, collapsed]);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`fixed z-40 drawer drawer-open h-[calc(100vh-6.3rem)] top-20 left-4 rounded-2xl shadow-lg border border-base-200 overflow-y-auto overflow-visible overflow-x-hidden ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      <div
        className={`drawer-content h-full flex flex-col items-start bg-white dark:bg-card rounded-2xl shadow-lg ${
          collapsed ? "px-2" : "px-2 w-60"
        }`}
      >
        <button
          onClick={handleToggle}
          className="p-3 ml-2 mt-4 hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? (
            <ChevronRight className="size-5 text-primary dark:text-accent" />
          ) : (
            <ChevronLeft className="size-5 text-primary dark:text-accent" />
          )}
        </button>

        <div
          className={`flex flex-col w-full h-full justify-between ${collapsed ? "items-center" : ""}`}
        >
          <div
            className={`flex flex-col px-2 mt-4 h-full w-full ${collapsed ? "items-center" : ""}`}
          >
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "w-full pl-3 justify-center gap-0" : "w-full"}`
              }
              title={collapsed ? "Tableau de Bord" : ""}
            >
              <LayoutDashboard className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Tableau de Bord</span>}
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Explorer" : ""}
            >
              <Search className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Explorer</span>}
            </NavLink>
            {!collapsed && <div className="w-55 divider m-0"></div>}
            <NavLink
              to={"/activities"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mes Activités" : ""}
            >
              <Calendar className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mes Activités</span>}
            </NavLink>
            <NavLink
              to={"/wellness"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mon Bien-Être" : ""}
            >
              <HeartHandshake className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mon Bien-Être</span>}
            </NavLink>
            <NavLink
              to={"/exercises"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mes Exercices" : ""}
            >
              <Activity className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mes Exercices</span>}
            </NavLink>
            <NavLink
              to={"/objectives"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mes Objectifs" : ""}
            >
              <LayoutList className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mes Objectifs</span>}
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mes Projets" : ""}
            >
              <FolderKanban className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mes Projets</span>}
            </NavLink>
            <NavLink
              to={"/medications"}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Mes Traitements" : ""}
            >
              <Pill className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Mes Traitements</span>}
            </NavLink>
            {!collapsed && <div className="w-55 divider expert-blue m-0"></div>}
            <ul className="border-l-0 pl-0 w-full">
              <li className="w-full">
                <button
                  type="button"
                  onClick={() => setForumOpen((s) => !s)}
                  aria-expanded={forumOpen}
                  className={`w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    forumOpen ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`}
                  title={collapsed ? "Forum" : ""}
                >
                  <MessagesSquare className="dark:text-accent text-primary size-4 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">Forum</span>
                      <span
                        className={`transition-transform ${forumOpen ? "rotate-90" : ""}`}
                      >
                        <ChevronRight className="size-4 text-slate-400" />
                      </span>
                    </>
                  )}
                </button>

                {forumOpen && !collapsed && (
                  <ul className="ml-4 mt-2 space-y-1 w-full">
                    <li className="w-48">
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
                    <li className="w-48">
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
                    <li className="w-48">
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
                    <li className="w-48">
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
                    <li className="w-48">
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
                    <li className="w-48">
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
                      <li className="w-48">
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
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? "Messages" : ""}
            >
              <MessageCircle className="dark:text-accent text-primary size-4 shrink-0" />
              {!collapsed && <span>Messages</span>}
            </NavLink>
          </div>

          <div
            className={`flex flex-col h-full justify-end mb-2 ${collapsed ? "items-center" : ""}`}
          >
            {!collapsed && <div className="w-55 divider m-0"></div>}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `p-3 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
              }
              title={collapsed ? `${user?.firstName} ${user?.lastName}` : ""}
            >
              <div className="rounded-full border-2 border-slate-400 size-8 shrink-0 overflow-hidden">
                <img
                  alt="avatar"
                  src={
                    user?.avatarUrl ||
                    `/images/${user?.avatarUrl || "default-avatar.svg"}`
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              {!collapsed && (
                <span className="truncate">
                  {user?.firstName} {user?.lastName}
                </span>
              )}
            </NavLink>
            {user?.isAdmin && (
              <>
                {!collapsed && <div className="w-55 divider m-0"></div>}
                <NavLink
                  to="/admin-page"
                  className={({ isActive }) =>
                    `p-3 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                      isActive ? "bg-primary/10" : ""
                    } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                  }
                  title={collapsed ? "Administration" : ""}
                  data-tip="Espace administration"
                >
                  <Settings className="dark:text-accent text-primary size-4 shrink-0" />
                  {!collapsed && <span>Administration</span>}
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
