import { useAuthStore } from '../store/auth';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="profile-container p-10">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary">{user.firstName} {user.lastName}</h1>
          <p>Bienvenue sur votre profil</p>
          {/* {user.avatar && <img src={user.avatar} alt="Avatar" className="avatar w-24 h-24 rounded-full" />}
          <p>Email: {user.email}</p>
          <p>Date de naissance: {user.birthdate}</p> */}
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;
