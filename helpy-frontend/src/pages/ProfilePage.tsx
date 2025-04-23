import { useAuthStore } from '../store/auth';
import { formatDate } from '../utils/formatDate';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="profile-container p-10 w-full h-100">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary mb-4">Bienvenue sur votre profil</h1>

          <div className="card w-96 glass shadow-lg">
            <figure><img src={`/images/${user.avatar}`} alt="Admin" /></figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{user.firstName} {user.lastName}</h2>
              <p>{user.email}</p>
              <p>{user.birthDate ? formatDate(user.birthDate) : 'Non disponible'}</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div> */}
            </div>
          </div>

        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;

