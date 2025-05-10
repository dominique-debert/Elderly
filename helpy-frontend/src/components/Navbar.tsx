import { Link } from 'react-router-dom';
import { mdiAccount, mdiBellOutline, mdiBottleTonicPlusOutline, mdiCogOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiMoonWaxingCrescent, mdiViewDashboardOutline, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useAuthStore } from '../stores/auth';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cmyk"
  );

  const handleToggle = (e: { target: { checked: boolean; }; }) => {
    if (e.target.checked) setTheme("dim");
    else setTheme("cmyk");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme || "cmyk");
    const localTheme = localStorage.getItem("theme");
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", localTheme || 'cmyk');
    }
  }, [theme]);

  return (
    <header className="header-area">

      <div className="navbar fixed top-0 z-50 h-16 w-full bg-base-100 shadow-sm border-b border-gray-200">
        <div className="flex justify-between w-full items-center">

        <Link to="/" className="btn btn-ghost text-2xl text-primary hover:bg-primary/30 rounded-xl">
          <div className="p-2">
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
          </div>
          Helpy
        </Link>

        <div className='flex space-x-2 xs:block lg:hidden'>
          <Link to={"/"}>
            <button className="btn-active w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
                <Icon path={mdiViewDashboardOutline}
                  title="Tableau de bord"
                  size={1}
                  className="text-primary"
                />
            </button>
          </Link>
          
          <Link to="/profile" className="justify-between">
            <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
              <Icon path={mdiAccount}
                title="Profil"
                size={1}
                />
            </button>
          </Link>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiBottleTonicPlusOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiHeartOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiHeadHeartOutline}
              title="Profil"
              size={1}
            />
          </button>
          
          <button className="w-full p-3 flex justify-center rounded-lg text-gray-400 hover:bg-primary/30">
            <Icon path={mdiForumOutline}
              title="Profil"
              size={1}
            />
          </button>
        </div>

        <div className='flex items-center gap-4'>
          {isAuthenticated && (
            <>
            <label className="toggle text-base-content mr-4">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "dim"}
              />
                <Icon
                  path={mdiWeatherSunny}
                  size={.7}
                />
                <Icon
                  path={mdiMoonWaxingCrescent}
                  size={.7}
                />
            </label>
            <Link to="/profile" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
              <Icon path={mdiBellOutline} size={1} />
            </Link>
            </>
          )}
          {user?.isAdmin && (
            <Link to="/admin-page" className="btn btn-ghost text-gray-400 hover:bg-primary/30 rounded-lg">
              <Icon path={mdiCogOutline} size={1} />
            </Link>
          )}
        </div>
      </div>
    </div>
  </header>

  );
};

export default Navbar;