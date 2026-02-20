import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useTheme } from "@/context";
import { useAuth } from "@/stores";

import { getNotificationsByUserId } from "@/services";
import { INotification } from "@/types";

import { NotificationList, Search } from "@/components";
import toast from "react-hot-toast";
import {
  MoonIcon,
  SunIcon,
  BellIcon,
  Menu,
  LayoutDashboard,
  SearchIcon,
  Calendar,
  HeartHandshake,
  Activity,
  LayoutList,
  FolderKanban,
  Pill,
  MessageCircle,
  MessagesSquare,
  Bell,
  Bookmark,
  ChartColumnStacked,
  ChevronRight,
  Hash,
  Home,
  Siren,
  Telescope,
  Settings,
} from "lucide-react";

export function Navbar() {
  const { user, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    toggleTheme();
  };

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer-2",
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const [forumOpen, setForumOpen] = useState(false);

  const {
    data: notifications = [],
    isLoading,
    isError,
  } = useQuery<INotification[], Error>({
    queryKey: ["notifications", user?.id],
    queryFn: async ({ queryKey }) => {
      const userId = queryKey[1];

      if (typeof userId !== "string" || userId.trim() === "") {
        return [];
      }

      try {
        const result = await getNotificationsByUserId(userId);
        return result;
      } catch (error) {
        toast.error(
          "Erreur de chargement des notifications: " +
            (error instanceof Error ? error.message : String(error)),
        );
        navigate("/login");

        return [];
      }
    },
    enabled: !!user?.id,
    retry: 1,
  });

  if (!isAuthenticated) return null;

  if (isLoading && user?.id)
    return (
      <div className="text-center mt-40">Chargement des notifications...</div>
    );
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Erreur de chargement des notifications
      </div>
    );

  return (
    <header className="header-area">
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div
            className="navbar md:block fixed top-0 z-20 h-16 w-full shadow-sm border-b border-base-200"
            style={{
              backdropFilter: "blur(2rem)",
              WebkitBackdropFilter: "blur(2rem)",
            }}
          >
            <div className="flex-none md:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <Menu />
              </label>
            </div>

            <div className="md:visible w-full bg-transparent">
              <div className="flex justify-between items-center bg-transparent">
                <Link to="/dashboard">
                  <div className="flex p-2 items-center gap-4 font-normal text-2xl text-primary">
                    <img
                      src="/images/elderly.png"
                      alt="Logo"
                      className="w-16 md:w-8 float-left"
                    />
                    <span className="text-primary text-2xl invisible md:visible">
                      Elderly
                    </span>
                  </div>
                </Link>

                <Search
                  search={""}
                  className="invisible md:visible"
                  placeholder={"Rechercher..."}
                  setSearch={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <div className="flex items-center gap-6">
                  {/* Theme Toggle */}

                  <label className="swap swap-rotate">
                    <input
                      type="checkbox"
                      className="theme-controller appearance-none"
                      value="m3e"
                      onChange={handleToggle}
                      checked={theme === "m3e"}
                    />
                    {theme === "m3e" ? (
                      <SunIcon className="size-6 text-yellow-400" />
                    ) : (
                      <MoonIcon className="size-6 text-accent/50" />
                    )}
                  </label>

                  <div className="relative mr-4" ref={notifRef}>
                    <button
                      role="button"
                      className="cursor-pointer text-base-content avatar tooltip tooltip-bottom tooltip-accent"
                      data-tip="Notifications"
                      onClick={() => setIsNotifOpen(!isNotifOpen)}
                    >
                      <BellIcon className="size-6 text-slate-00 dark:text-accent/50" />

                      {notifications && notifications.length > 0 && (
                        <span className="absolute p-1.5 avatar bg-red-600 rounded-xl right-0 bottom-0" />
                      )}
                    </button>
                    {isNotifOpen && (
                      <div
                        className="absolute right-0 mt-2 bg-transparent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <NotificationList
                          notifications={
                            Array.isArray(notifications) ? notifications : []
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side bg-white dark:bg-card mt-16">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white dark:bg-card min-h-full w-80 z-30 top-16 p-4 gap-2 pb-10">
            <Search
              search={""}
              placeholder={"Rechercher..."}
              className="visible dark:border-slate-700"
              setSearch={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <div className="divider expert-blue p-0 m-0"></div>
            <NavLink
              to="/dashboard"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Tableau de Bord"
            >
              <LayoutDashboard className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Tableau de Bord</span>
            </NavLink>
            <NavLink
              to="/explore"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } `
              }
              title="Explorer"
            >
              <SearchIcon className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Explorer</span>
            </NavLink>
            <div className="divider expert-blue p-0 m-0"></div>
            <NavLink
              to="/activities"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mes Activités"
            >
              <Calendar className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mes Activités</span>
            </NavLink>
            <NavLink
              to="/wellness"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mon Bien-Être"
            >
              <HeartHandshake className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mon Bien-Être</span>
            </NavLink>
            <NavLink
              to="/exercises"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mes Exercices"
            >
              <Activity className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mes Exercices</span>
            </NavLink>
            <NavLink
              to="/objectives"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mes Objectifs"
            >
              <LayoutList className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mes Objectifs</span>
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mes Projets"
            >
              <FolderKanban className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mes Projets</span>
            </NavLink>
            <NavLink
              to="/medications"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Mes Traitements"
            >
              <Pill className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Mes Traitements</span>
            </NavLink>
            <div className="divider expert-blue m-0"></div>
            <NavLink
              to="/messages"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                }`
              }
              title="Messages"
            >
              <MessageCircle className="dark:text-accent text-primary size-4 shrink-0" />
              <span className="text-sm">Messages</span>
            </NavLink>

            <ul className="border-l-0 pl-0 w-full">
              <li className="w-full">
                <button
                  type="button"
                  onClick={() => setForumOpen((s) => !s)}
                  aria-expanded={forumOpen}
                  className={`w-full p-3 pl-4 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                    forumOpen ? "bg-primary/10" : ""
                  } `}
                  title="Forum"
                >
                  <MessagesSquare className="dark:text-accent text-primary size-4 shrink-0" />
                  <>
                    <span className="flex-1 text-left text-sm">Forum</span>
                    <span
                      className={`transition-transform ${forumOpen ? "rotate-90" : ""}`}
                    >
                      <ChevronRight className="size-4 text-slate-400" />
                    </span>
                  </>
                </button>

                {forumOpen && (
                  <ul className="ml-4 mt-2 space-y-1 w-full">
                    <li className="w-48">
                      <NavLink
                        to="/forum/home"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Home className="size-4 text-orange-400" />
                        <span className="text-sm">Accueil</span>
                      </NavLink>
                    </li>
                    <li className="w-48">
                      <NavLink
                        to="/forum/discover"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Telescope className="size-4 text-orange-400" />
                        <span className="text-sm">Découvrir</span>
                      </NavLink>
                    </li>
                    <li className="w-48">
                      <NavLink
                        to="/forum/discussions"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Hash className="size-4 text-orange-400" />
                        <span className="text-sm">Discussions</span>
                      </NavLink>
                    </li>
                    <li className="w-48">
                      <NavLink
                        to="/forum/categories"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <ChartColumnStacked className="size-4 text-orange-400" />
                        <span className="text-sm">Catégories</span>
                      </NavLink>
                    </li>
                    <li className="w-48">
                      <NavLink
                        to="/forum/bookmarks"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Bookmark className="size-4 text-orange-400" />
                        <span className="text-sm">Mes Favoris</span>
                      </NavLink>
                    </li>
                    <li className="w-48">
                      <NavLink
                        to="/forum/notifications"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                          `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                            isActive ? "bg-primary/10" : ""
                          }`
                        }
                      >
                        <Bell className="size-4 text-orange-400" />
                        <span className="text-sm">Notifications</span>
                      </NavLink>
                    </li>

                    {user?.isAdmin && (
                      <li className="w-48">
                        <NavLink
                          to="/forum/moderation"
                          onClick={closeDrawer}
                          className={({ isActive }) =>
                            `p-3 pl-5 flex gap-2 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 ${
                              isActive ? "bg-primary/10" : ""
                            }`
                          }
                        >
                          <Siren className="size-4 text-orange-400" />
                          <span className="text-sm">Modération</span>
                        </NavLink>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            </ul>

            <div className="divider m-0"></div>

            <NavLink
              to="/profile"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `p-3 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 ${
                  isActive ? "bg-primary/10" : ""
                } }`
              }
              title={`${user?.firstName} ${user?.lastName}`}
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
              <span className="truncate text-sm">
                {user?.firstName} {user?.lastName}
              </span>
            </NavLink>

            {user?.isAdmin && (
              <>
                <div className="divider m-0"></div>
                <NavLink
                  to="/admin"
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `p-3 flex gap-3 justify-start items-center rounded-3xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 focus:bg-primary/10 mb-12 ${
                      isActive ? "bg-primary/10" : ""
                    } }`
                  }
                  title="Administration"
                  data-tip="Espace administration"
                >
                  <Settings className="dark:text-accent text-primary size-4 shrink-0" />
                  <span className="text-sm">Administration</span>
                </NavLink>
              </>
            )}
          </ul>
        </div>{" "}
      </div>
    </header>
  );
}
