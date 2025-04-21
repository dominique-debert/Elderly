import toast from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Supprimer le token
    toast.success('Déconnexion réussie');
    navigate('/login'); // Rediriger vers la page de connexion
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Helpy
          </Link>
          <div className="space-x-2">
            <Link to="/login" className="btn btn-outline btn-sm">Connexion</Link>
            <Link to="/profile" className="btn btn-outline btn-sm">Profil</Link>
            <button onClick={handleLogout} className="btn btn-error btn-sm">Déconnexion</button>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
