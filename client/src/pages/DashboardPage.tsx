import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  DashboardUserCard,
  DashboardWeatherWidget,
  DashboardActivityCard,
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
      <div className="flex flex-col mt-4 mr-3 h-full justify-items-center align-items-center">
        <h1 className="text-2xl font-semibold m-2">
          {getGreeting()}, {user?.firstName}
        </h1>
        <span className="m-2 mt-0 font-normal text-slate-400">
          Nous sommes le{" "}
          {formatLongDate(currentTime, {
            showWeekday: true,
            showTime: true,
            showSeconds: true,
          })}
        </span>
        <div className="lg:flex lg:flex-row gap-4">
          {user ? (
            <>
              <DashboardActivityCard />
              <DashboardWeatherWidget />
              <DashboardUserCard />
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
        </div>
      </div>
    </>
  );
}
