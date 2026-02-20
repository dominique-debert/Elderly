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
      className={`fixed invisible md:visible z-40 drawer drawer-open h-[calc(100vh-5.8rem)] top-20 left-4 rounded-2xl shadow-lg border border-base-200 overflow-y-auto overflow-hidden scrollbar-hide ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      <div
        className={`drawer-content h-full flex flex-col items-start bg-white dark:bg-transparent rounded-2xl shadow-lg ${
          collapsed ? "px-2" : "px-2 w-60"
        }`}
        style={{
          backdropFilter: "blur(2rem)",
          WebkitBackdropFilter: "blur(2rem)",
        }}
      >
        <button
          onClick={handleToggle}
          className="p-3 m-2 hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? (
            <ChevronRight className="size-4 text-primary dark:text-accent" />
          ) : (
            <ChevronLeft className="size-4 text-primary dark:text-accent" />
          )}
        </button>

        <div
          className={`flex flex-col w-full h-full justify-between ${collapsed ? "items-center" : ""}`}
        >
          <div
            className={`flex flex-col gap-2 px-2 h-full w-full ${collapsed ? "items-center" : ""}`}
          >
            <div className="hover-3d">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "w-full pl-3 justify-center gap-0" : "w-full"}`
                }
                title={collapsed ? "Tableau de Bord" : ""}
                aria-label="Tableau de Bord"
              >
                <LayoutDashboard className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Tableau de Bord</span>}
              </NavLink>
            </div>
            <div className="hover-3d">
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Explorer" : ""}
                aria-label="Explorer"
              >
                <Search className="dark:text-accent size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Explorer</span>}
              </NavLink>
            </div>
            {!collapsed && <div className="w-55 divider m-0"></div>}
            <div className="hover-3d">
              <NavLink
                to={"/activities"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mes Activités" : ""}
                aria-label="Mes Activités"
              >
                <Calendar className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mes Activités</span>}
              </NavLink>
            </div>
            <div className="hover-3d">
              <NavLink
                to={"/wellness"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mon Bien-Être" : ""}
                aria-label="Mon Bien-Être"
              >
                <HeartHandshake className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mon Bien-Être</span>}
              </NavLink>
            </div>
            <div className="hover-3d">
              <NavLink
                to={"/exercises"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mes Exercices" : ""}
                aria-label="Mes Exercices"
              >
                <Activity className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mes Exercices</span>}
              </NavLink>
            </div>

            <div className="hover-3d">
              <NavLink
                to={"/objectives"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mes Objectifs" : ""}
                aria-label="Mes Objectifs"
              >
                <LayoutList className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mes Objectifs</span>}
              </NavLink>
            </div>
            <div className="hover-3d">
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mes Projets" : ""}
                aria-label="Mes Projets"
              >
                <FolderKanban className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mes Projets</span>}
              </NavLink>
            </div>
            <div className="hover-3d">
              <NavLink
                to={"/medications"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Mes Traitements" : ""}
                aria-label="Mes Traitements"
              >
                <Pill className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Mes Traitements</span>}
              </NavLink>
            </div>
            {!collapsed && <div className="w-55 divider expert-blue m-0"></div>}
            <div className="hover-3d">
              <NavLink
                to={"/messages"}
                className={({ isActive }) =>
                  `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? "Messages" : ""}
                aria-label="Messages"
              >
                <MessageCircle className="dark:text-accent text-primary size-4 shrink-0" />
                {!collapsed && <span className="text-sm">Messages</span>}
              </NavLink>
            </div>
            <ul className="border-l-0 pl-0 w-full">
              <li className="w-full">
                <button
                  type="button"
                  onClick={() => setForumOpen((s) => !s)}
                  aria-expanded={forumOpen}
                  className={`w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    forumOpen ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`}
                  title={collapsed ? "Forum" : ""}
                  aria-label="Forum"
                >
                  <MessagesSquare className="dark:text-accent text-primary size-4 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left text-sm">Forum</span>
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
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/home"
                          className={({ isActive }) =>
                            `w-full p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Accueil du Forum"
                        >
                          <Home className="size-4 text-secondary" />
                          <span className="text-sm">Accueil</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="w-48">
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/discover"
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Découvrir"
                        >
                          <Telescope className="size-4 text-secondary" />
                          <span className="text-sm">Découvrir</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="w-48">
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/discussions"
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Discussions"
                        >
                          <Hash className="size-4 text-secondary" />
                          <span className="text-sm">Discussions</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="w-48">
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/categories"
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Catégories"
                        >
                          <ChartColumnStacked className="size-4 text-secondary" />
                          <span className="text-sm">Catégories</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="w-48">
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/bookmarks"
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Mes Favoris"
                        >
                          <Bookmark className="size-4 text-secondary" />
                          <span className="text-sm">Mes Favoris</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="w-48">
                      <div className="hover-3d w-full">
                        <NavLink
                          to="/forum/notifications"
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                          aria-label="Notifications"
                        >
                          <Bell className="size-4 text-secondary" />
                          <span className="text-sm">Notifications</span>
                        </NavLink>
                      </div>
                    </li>

                    {user?.isAdmin && (
                      <li className="w-48">
                        <div className="hover-3d w-full">
                          <NavLink
                            to="/forum/moderation"
                            className={({ isActive }) =>
                              `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 ${
                                isActive ? "bg-primary/10" : ""
                              }`
                            }
                            aria-label="Modération"
                          >
                            <Siren className="size-4 text-secondary" />
                            <span className="text-sm">Modération</span>
                          </NavLink>
                        </div>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div
            className={`flex flex-col h-full justify-end mb-2 ${collapsed ? "items-center" : ""}`}
          >
            {!collapsed && <div className="w-55 divider m-0"></div>}
            <div className="hover-3d w-full">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `p-3 flex gap-3 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    isActive ? "bg-primary/10" : ""
                  } ${collapsed ? "pl-3 justify-center gap-0" : ""}`
                }
                title={collapsed ? `${user?.firstName} ${user?.lastName}` : ""}
                aria-label="Mon Profil"
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
                  <span className="truncate text-sm">
                    {user?.firstName} {user?.lastName}
                  </span>
                )}
              </NavLink>
            </div>
            {user?.isAdmin && (
              <>
                {!collapsed && <div className="w-55 divider m-0"></div>}
                <div className="hover-3d w-full">
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `p-3 flex gap-4 pl-4 justify-start items-center rounded-3xl text-primary dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                        isActive ? "bg-primary/10" : ""
                      } ${collapsed ? "pl-5 justify-center gap-0 items-center" : ""}`
                    }
                    title={collapsed ? "Administration" : ""}
                    aria-label="Espace administration"
                  >
                    <Settings className="dark:text-accent text-primary size-4 shrink-0" />
                    {!collapsed && (
                      <span className="text-sm">Administration</span>
                    )}
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
