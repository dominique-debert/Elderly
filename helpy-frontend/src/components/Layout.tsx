import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth'; // ou le bon chemin

const Layout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow">
        <div className="container mx-4 flex justify-between items-center">
          <Link to="/" className="btn btn-ghost normal-case text-2xl text-primary">
            <img className='mr-2' src="/src/images/logo.svg" alt="Logo" />
            Helpy
          </Link>
          <div className="space-x-2">
            {!isAuthenticated && (
              <Link to="/login" className="btn btn-outline btn-sm font-display m-0">
                Connexion
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Link to="/profile" className="btn btn-outline btn-md rounded-xl">Profil</Link>
                <button onClick={() => logout(navigate)} className="btn btn-primary btn-md rounded-xl">Déconnexion</button>
              </>
            )}
          </div>
        </div>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
