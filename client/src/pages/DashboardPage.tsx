import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  DashboardUserWidget,
  DashboardWeatherWidget,
  DashboardActivityWidget,
} from "@/components";
import { formatLongDate, getGreeting } from "@/utils";

export function DashboardPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col p-4 pl-1 h-fit pb-4 justify-items-center align-items-center">
        <h1 className="text-xl lg:text-2xl font-semibold p-2 pb-0">
          {getGreeting()}, {user?.firstName}
        </h1>
        <span className="m-2 mt-0 font-normal text-xs md:text-base text-slate-400 mb-4">
          Nous sommes le{" "}
          {formatLongDate(currentTime, {
            showWeekday: true,
            showTime: true,
            showSeconds: true,
          })}
        </span>
        {user ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 h-full">
            <DashboardActivityWidget />
            <DashboardWeatherWidget />
            <DashboardUserWidget />
          </div>
        ) : (
          <p>Les informations de profil sont introuvables.</p>
        )}
      </div>
    </>
  );
}
