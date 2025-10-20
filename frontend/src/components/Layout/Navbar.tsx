import Icon from "@mdi/react";
import {
  mdiBellOutline,
  mdiCogOutline,
  mdiMoonWaxingCrescent,
  mdiWeatherSunny,
} from "@mdi/js";

import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "@/context";
import { useAuth, useAuthStore } from "@/stores";

import { getNotificationsByUserId } from "@/services";
import { INotification } from "@/types";

import { NotificationList } from "@/components";
import toast from "react-hot-toast";

export function Navbar() {
  const { user, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleToggle = () => {
    toggleTheme();
  };

  const {
    data: notifications = [],
    isLoading,
    isError,
  } = useQuery<INotification[], Error>({
    queryKey: ["notifications", user?.id],
    queryFn: async ({ queryKey }) => {
      const userId = queryKey[1];

      // Ensure userId is a non-empty string before making the API call
      if (typeof userId !== "string" || userId.trim() === "") {
        return [];
      }

      try {
        const result = await getNotificationsByUserId(userId);
        return result;
      } catch (error) {
        toast.error(
          "Erreur de chargement des notifications: " +
            (error instanceof Error ? error.message : String(error))
        );

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
      <div className="navbar bg-white dark:bg-card fixed top-0 z-50 h-16 w-full shadow-sm border-b border-base-200">
        <div className="flex justify-between w-full items-center">
          <Link
            to="/dashboard"
            className="btn btn-ghost text-2xl text-primary rounded-xl"
          >
            <div className="p-2">
              <img src="/images/logo.png" alt="Logo" className="h-10" />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-bottom tooltip-accent"
              data-tip="Changer de thème"
            >
              <label className="toggle mr-4 border">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "dark"}
                />
                <Icon
                  path={mdiWeatherSunny}
                  size={0.7}
                  className="text-primary"
                />
                <Icon
                  path={mdiMoonWaxingCrescent}
                  size={0.7}
                  className="text-primary"
                />
              </label>
            </div>

            <div className="relative" ref={notifRef}>
              <button
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom mr-3 tooltip-accent"
                data-tip="Notifications"
                onClick={() => setIsNotifOpen(!isNotifOpen)}
              >
                <Icon path={mdiBellOutline} size={1.3} />
                {notifications && notifications.length > 0 && (
                  <span className="absolute p-1.5 avatar border bg-orange-600 rounded-xl right-1 bottom-1" />
                )}
              </button>
              {isNotifOpen && (
                <div
                  className="absolute right-0 mt-2"
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

            {user?.isAdmin && (
              <Link
                to="/admin-page"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom mr-3 tooltip-accent"
                data-tip="Espace administration"
              >
                <Icon path={mdiCogOutline} size={1.3} />
              </Link>
            )}

            {isAuthenticated && (
              <div className="flex flex-row gap-2 mr-4">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="rounded-full border-2 border-slate-400">
                      <img
                        alt="avatar"
                        src={
                          useAuthStore.getState().user?.avatarUrl ||
                          `/images/${
                            useAuthStore.getState().user?.avatar ||
                            "default-avatar.svg"
                          }`
                        }
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu border border-slate-800 dropdown-content dropdown-end bg-white dark:bg-card rounded-box mt-3 w-52 p-2 shadow-md"
                  >
                    <li>
                      <Link to="/profile">Profil</Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={() => logout(navigate)}>
                        Se déconnecter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
