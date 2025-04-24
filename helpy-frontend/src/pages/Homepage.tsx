import { useAuthStore } from "../store/auth";
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
    <div className="pr-5 pt-5 pl-2 pb-10 w-full">
      <div className="flex space-x-4 mb-4">
        <ActivityCard />
        <HealthCard />
        <ServiceCard />
      </div>

      <div className="flex flex-row space-x-4">
        {user ? (
          <>
            <UserCard />
          </>
        ) : (
          <p>Les informations de profil sont introuvables.</p>
        )}
        <ForumCard />

      </div>
      <MedicationCard />
    </div>
  );
};

export default HomePage;
