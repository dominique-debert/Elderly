import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth'; // ou le bon chemin

const Layout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Helpy
          </Link>
          <div className="space-x-2">
            {!isAuthenticated && (
              <Link to="/login" className="btn btn-outline btn-sm font-display">
                Connexion
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Link to="/profile" className="btn btn-outline btn-sm">Profil</Link>
                <button onClick={() => logout(navigate)} className="btn btn-error btn-sm">Déconnexion</button>
              </>
            )}
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
