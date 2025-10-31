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
      <div className="flex flex-col mt-12 ml-60 mr-4 rounded-2xl shadow-xl justify-items-center align-items-center p-8">
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
