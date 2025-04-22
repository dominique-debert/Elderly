import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth'; // ou le bon chemin

const Layout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200">
      {/* <div className="navbar bg-base-100 shadow">
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
                
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                    <img
                      src={useAuthStore.getState().user?.avatar}
                      alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
                
              </>
            )}
          </div>
        </div>
      </div> */}


      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 align-middle items-center">
          <Link to="/" className="btn btn-ghost text-2xl text-primary">
            <img className='mr-2' src="/src/images/logo.svg" alt="Logo" />
            Helpy
          </Link>
        </div>
        {isAuthenticated && (
          <>
            <div className="flex gap-2">
              <input type="text" placeholder="Search" className="input rounded-xl input-bordered w-24 h-10 md:w-auto" />
              <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="avatar"
                          src={useAuthStore.getState().user?.avatar || '/default-avatar.png'}
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