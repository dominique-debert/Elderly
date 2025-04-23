import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth'; // ou le bon chemin

const Layout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 align-middle items-center">
          <Link to="/" className="btn btn-ghost text-2xl text-primary">
            <img className='mr-2' src="./images/logo.svg" alt="Logo" />
            Helpy
          </Link>
        </div>
        {isAuthenticated && (
          <>
            <div className="flex gap-2">
              <input type="text" placeholder="Search" className="input rounded-xl input-bordered w-24 h-10 md:w-auto" />
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-24 rounded-full">
                    <img
                      alt="avatar"
                      src={useAuthStore.getState().user?.avatar || '/images/default-avatar.svg'}
                      />
                  </div>
                </div>
                
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <Link to="/profile" className="justify-between">
                      Ton profil
                    </Link>
                  </li>
                  <li><a>Tes préférences</a></li>
                  <li>
                    <Link to="/login" onClick={() => logout(navigate)}>Se déconnecter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;