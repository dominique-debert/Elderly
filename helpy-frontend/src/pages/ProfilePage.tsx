import { useAuthStore } from '../store/auth';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="profile-container p-10 w-full h-100">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary">{user.firstName} {user.lastName}</h1>
          <p>Bienvenue sur votre profil</p>
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;
