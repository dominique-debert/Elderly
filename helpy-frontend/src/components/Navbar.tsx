import { Link } from 'react-router-dom';
import { mdiAccount, mdiBellOutline, mdiBottleTonicPlusOutline, mdiCogOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiMoonWaxingCrescent, mdiViewDashboardOutline, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useAuthStore } from '../stores/auth';
import { useEffect, useRef, useState } from 'react';
import { fetchNotificationsByUserId } from '../services/notifications.service';
import { useQuery } from '@tanstack/react-query';
import NotificationList from './Notifications/NotificationList';

const Navbar = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cmyk"
  );

  const handleToggle = (e: { target: { checked: boolean; }; }) => {
    if (e.target.checked) setTheme("dim");
    else setTheme("cmyk");
  };

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("theme", theme || "cmyk");
    const localTheme = localStorage.getItem("theme");
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", localTheme || 'cmyk');
    }
  }, [theme]);

  const { data: notifications, isLoading, isError } = useQuery({
    queryFn: ({ queryKey }) => fetchNotificationsByUserId(queryKey[1] as string),
    queryKey: ['notifications', user?.id || ''],
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  if (!isAuthenticated) return null;
  
  return (
    <header className="header-area">
      <div className="navbar fixed top-0 z-50 h-16 w-full bg-base-100 shadow-sm border-b border-base-200">
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
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Changer de thème"
              >
                <label
                  className="toggle text-base-content mr-4 border"
                  >
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={theme === "dim"}
                    />
                  <Icon
                    path={mdiWeatherSunny}
                    size={.7}
                    className="text-primary"
                    />
                  <Icon
                    path={mdiMoonWaxingCrescent}
                    size={.7}
                    className="text-primary"
                    />
                </label>
              </div>

              <div className="relative" ref={notifRef}>
                <button role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip="Notifications"
                  onClick={() => setIsNotifOpen(!isNotifOpen)}
                  >
                  <Icon path={mdiBellOutline} size={1.3} />
                  { notifications && notifications.length > 0 && (
                    <span className='absolute p-1.5 text-white avatar border-2 bg-orange-600 rounded-xl right-1 bottom-1'/>
                  )}
                </button>
                { isNotifOpen && (
                  <div className="absolute right-0 mt-2">
                    <NotificationList notifications={notifications || []}/>
                  </div>
                )}      
              </div>
            </>

            {user?.isAdmin && (
              <Link to="/admin-page"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                data-tip="Espace administration"
              >
                <Icon path={mdiCogOutline} size={1.3} />
              </Link>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;