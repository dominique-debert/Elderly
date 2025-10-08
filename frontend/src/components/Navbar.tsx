import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  mdiAccount,
  mdiBellOutline,
  mdiBottleTonicPlusOutline,
  mdiCogOutline,
  mdiForumOutline,
  mdiHeadHeartOutline,
  mdiHeartOutline,
  mdiMoonWaxingCrescent,
  mdiViewDashboardOutline,
  mdiWeatherSunny,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/stores/auth";
import { useQuery } from "@tanstack/react-query";
import { fetchNotificationsByUserId } from "@/services";
import { INotification } from "@/types";
import NotificationList from "./Notifications/NotificationList";
import axios, { AxiosError } from "axios";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    toggleTheme();
  };

  // Debug log for auth state
  useEffect(() => {
    console.log("Auth state in Navbar:", {
      isAuthenticated,
      user,
      hasUserId: !!user?.id,
      accessToken: localStorage.getItem("accessToken") ? "present" : "missing",
      userObject: user,
    });
  }, [isAuthenticated, user]);

  const {
    data: notifications = [],
    isLoading,
    isError,
  } = useQuery<INotification[], Error>({
    queryKey: ["notifications", user?.id],
    queryFn: async ({ queryKey }) => {
      const userId = queryKey[1];
      console.log("Fetching notifications for user ID:", userId);

      // Ensure userId is a non-empty string before making the API call
      if (typeof userId !== "string" || userId.trim() === "") {
        console.log("Invalid or missing user ID, returning empty array");
        return [];
      }

      try {
        console.log("Calling fetchNotificationsByUserId with userId:", userId);
        const result = await fetchNotificationsByUserId(userId);
        console.log("Received notifications:", result);
        return result;
      } catch (error) {
        console.error("Error fetching notifications:", error);

        const axiosError = error as AxiosError;
        if (axios.isAxiosError(axiosError)) {
          console.error("Axios error details:", {
            status: axiosError.response?.status,
            data: axiosError.response?.data,
            url: axiosError.config?.url,
            method: axiosError.config?.method,
          });
        }

        // Return empty array on error to prevent UI breakage
        return [];
      }
    },
    enabled: !!user?.id, // Only run the query if we have a user ID
    retry: 1,
  });

  if (!isAuthenticated) return null;

  // Show loading state only if we're trying to fetch notifications
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
      <div className="navbar fixed top-0 z-50 h-16 w-full bg-base-100 shadow-sm border-b border-base-200">
        <div className="flex justify-between w-full items-center">
          <Link
            to="/"
            className="btn btn-ghost text-2xl text-primary hover:bg-primary/30 rounded-xl"
          >
            <div className="p-2">
              <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
            </div>
            Helpy
          </Link>

          {/* Mobile menu items */}
          <div className="flex space-x-2 xs:block lg:hidden">
            <Link to={"/"}>
              <button className="btn-active w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
                <Icon
                  path={mdiViewDashboardOutline}
                  size={1}
                  className="text-primary"
                />
              </button>
            </Link>

            <Link to="/profile" className="justify-between">
              <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
                {user?.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt="avatar"
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <Icon path={mdiAccount} title="Profil" size={1} />
                )}
              </button>
            </Link>

            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiBottleTonicPlusOutline} title="Profil" size={1} />
            </button>

            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiHeartOutline} title="Profil" size={1} />
            </button>

            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiHeadHeartOutline} title="Profil" size={1} />
            </button>

            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiForumOutline} title="Profil" size={1} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="tooltip tooltip-bottom" data-tip="Changer de thème">
              <label className="toggle text-base-content mr-4 border">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "dim"}
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
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip="Notifications"
                onClick={() => setIsNotifOpen(!isNotifOpen)}
              >
                <Icon path={mdiBellOutline} size={1.3} />
                {notifications && notifications.length > 0 && (
                  <span className="absolute p-1.5 text-white avatar border-2 bg-orange-600 rounded-xl right-1 bottom-1" />
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
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                data-tip="Espace administration"
              >
                <Icon path={mdiCogOutline} size={1.3} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
