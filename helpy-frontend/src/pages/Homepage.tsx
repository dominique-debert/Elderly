import { useAuthStore } from "../stores/auth";
import ActivityCard from "../components/ActivityCard";
import ForumCard from "../components/ForumCard";
import HealthCard from "../components/HealthCard";
import UserCard from "../components/UserCard";
import ServiceCard from "../components/ServiceCard";
import MedicationCard from "../components/MedicationCard";

const HomePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="flex flex-col m-4 lg:ml-0 w-full">
        {user ? (
          <>
            <UserCard />
          </>
        ) : (
          <p>Les informations de profil sont introuvables.</p>
        )}
        <ForumCard />
        
      <div className="lg:flex lg:flex-column w-full lg:space-x-4">
        <ActivityCard />
        <HealthCard />
        <ServiceCard />
      </div>


      <MedicationCard />
    </div>
  );
};

export default HomePage;
