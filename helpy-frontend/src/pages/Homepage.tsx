import { useAuthStore } from "../stores/auth";
import ActivityCard from "../components/ActivityCard";
import ForumCard from "../components/ForumCard";
import HealthCard from "../components/HealthCard";
import UserCard from "../components/UserCard";
import ServiceCard from "../components/ServiceCard";
import MedicationCard from "../components/MedicationCard";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="lg:flex lg:flex-col w-full lg:space-x-4">
        
        <div className="lg:flex lg:flex-row w-full lg:space-x-4 m-4">
          {user ? (
            <>
              <UserCard />
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
          <ForumCard />
        </div>
        
        <div className="lg:flex lg:flex-row w-full lg:space-x-4">
          <ActivityCard />
          <HealthCard />
          <ServiceCard />
        </div>


        <div className="lg:flex lg:flex-row w-full lg:space-x-4">
          <MedicationCard />
        </div>
      </div>
        </>
  );
};

export default HomePage;
