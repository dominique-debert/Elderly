import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "@/context";
import { useAuth } from "@/stores";

import { getNotificationsByUserId } from "@/services";
import { INotification } from "@/types";

import { NotificationList, Search } from "@/components";
import toast from "react-hot-toast";
import { MoonIcon, SunIcon, BellIcon } from "lucide-react";

export function Navbar() {
  const { user, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

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
      <div className="navbar bg-white dark:bg-card fixed top-0 z-50 h-16 w-full shadow-sm border-b border-base-200">
        <div className="flex justify-between w-full items-center">
          <Link to="/dashboard">
            <div className="flex p-2 pl-3 items-center gap-4 font-normal text-2xl text-primary">
              <img src="/images/elderly.webp" alt="Logo" className="h-8" />
              <span className="text-primary text-2xl">Elderly</span>
            </div>
          </Link>

          <Search
            search={""}
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
                className="theme-controller"
                value="nord"
                onChange={handleToggle}
                checked={theme === "nord"}
              />
              {theme === "nord" ? (
                <SunIcon className="size-6 text-yellow-400 dark:text-white/50" />
              ) : (
                <MoonIcon className="size-6 text-slate-500 dark:text-white/40" />
              )}
            </label>

            <div className="relative mr-4" ref={notifRef}>
              <button
                role="button"
                className="cursor-pointer text-base-content avatar tooltip tooltip-bottom tooltip-accent"
                data-tip="Notifications"
                onClick={() => setIsNotifOpen(!isNotifOpen)}
              >
                <BellIcon className="size-6 text-slate-500 dark:text-white/40" />

                {notifications && notifications.length > 0 && (
                  <span className="absolute p-1.5 avatar bg-red-600 rounded-xl right-0 bottom-0" />
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
          </div>
        </div>
      </div>
    </header>
  );
}
