import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import ActivityCard from "@/components/ActivityDashboardCard";
import ForumCard from "@/components/ForumCard";
import HealthCard from "@/components/HealthCard";
import UserCard from "@/components/UserCard";
import ServiceCard from "@/components/ServiceCard";
import MedicationCard from "@/components/MedicationCard";
import { MeteoWidget } from "@/components/MeteoWidget";

const HomePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <div className="lg:flex lg:flex-row gap-4 mt-4">
          {user ? (
            <>
              <UserCard />
              <MeteoWidget />
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
          <ForumCard />
        </div>

        <div className="lg:flex lg:flex-row gap-4">
          <ActivityCard />
          <HealthCard />
          <ServiceCard />
        </div>

        <div className="lg:flex lg:flex-row">
          <MedicationCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
