import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  DashboardActivityCard,
  DashboardForumCard,
  DashboardHealthCard,
  DashboardMedicationCard,
  DashboardUserCard,
  DashboardServiceCard,
  WeatherWidget,
} from "@/components";

export function HomePage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 mt-18 p-4">
        <div className="lg:flex lg:flex-row gap-4">
          {user ? (
            <>
              <DashboardUserCard />
              <WeatherWidget />
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
          <DashboardForumCard />
        </div>

        <div className="lg:flex lg:flex-row gap-4">
          <DashboardActivityCard />
          <DashboardHealthCard />
          <DashboardServiceCard />
        </div>

        <div className="lg:flex lg:flex-row">
          <DashboardMedicationCard />
        </div>
      </div>
    </>
  );
}
