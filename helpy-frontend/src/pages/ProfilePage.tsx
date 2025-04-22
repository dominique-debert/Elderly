import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  // On s'assure que les données utilisateur sont chargées au démarrage
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  if (loading) {
    return <div>Chargement des informations du profil...</div>;
  }

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h1>{user.firstName} {user.lastName}</h1>
          {user.avatar && <img src={user.avatar} alt="Avatar" className="avatar" />}
          <p>Utilisateur: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;
