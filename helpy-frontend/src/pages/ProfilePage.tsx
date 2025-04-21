import Layout from '../components/Layout';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}'); // Récupérer les infos de l'utilisateur (par exemple)

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Profil</h1>
      <div className="mt-4">
        <p><strong>Email:</strong> {user.email}</p>
        {/* Ajoute d'autres informations de l'utilisateur si nécessaire */}
      </div>
    </Layout>
  );
};

export default ProfilePage;
