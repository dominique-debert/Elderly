import { useAuthStore } from '../stores/auth';
import { formatDate } from '../utils/formatDate';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-container p-10 w-full h-100 bg-background">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary mb-4">Bienvenue sur votre profil</h1>

          <Card className="w-96 shadow-lg backdrop-blur-sm bg-card/80">
            <CardHeader className="pb-4">
              <figure className="flex justify-center">
                <img src={`/images/${user.avatar}`} alt="Admin" className="rounded-lg" />
              </figure>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary mb-2">{user.firstName} {user.lastName}</CardTitle>
              <p className="text-muted-foreground mb-1">{user.email}</p>
              <p className="text-muted-foreground">{user.birthDate ? formatDate(user.birthDate) : 'Non disponible'}</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div> */}
            </CardContent>
          </Card>

        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
};

export default ProfilePage;

