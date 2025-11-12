import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { DashboardWeatherWidget } from "@/components";

export function DashboardPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col mt-4 mr-3 h-full justify-items-center align-items-center">
        <div className="lg:flex lg:flex-row gap-4">
          {user ? (
            <>
              <DashboardWeatherWidget />
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
        </div>
      </div>
    </>
  );
}
