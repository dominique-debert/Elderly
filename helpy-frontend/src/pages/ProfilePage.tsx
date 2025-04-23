import { useAuthStore } from '../store/auth';
import { formatDate } from '../utils/formatDate';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

const dateNaissance = user?.birthDate
  ? new Date(user.birthDate).toLocaleDateString("fr-FR", {
      month: "long",
      day: "2-digit",
      year: "numeric"
    })
  : null;

  return (
    <div className="profile-container p-10 w-full h-100">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary">{user.firstName} {user.lastName}</h1>
          <p>Bienvenue sur votre profil</p>
          <p>Email: {user.email}</p>
          <p>Date de naissance: {dateNaissance ? formatDate(dateNaissance) : 'Non disponible'}</p>
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;
