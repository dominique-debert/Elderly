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
    <div className="flex flex-col space-y-4 m-4 w-full">
        {user ? (
          <>
            <UserCard />
          </>
        ) : (
          <p>Les informations de profil sont introuvables.</p>
        )}
      <div className="lg:flex lg:flex-auto lg:flex-column w-full">
        <ActivityCard />
        <HealthCard />
        <ServiceCard />
      </div>

        <ForumCard />

      <MedicationCard />
    </div>
  );
};

export default HomePage;
