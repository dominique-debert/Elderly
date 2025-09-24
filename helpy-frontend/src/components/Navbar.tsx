import { Link } from 'react-router-dom';
import { mdiAccount, mdiBellOutline, mdiBottleTonicPlusOutline, mdiCogOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiMoonWaxingCrescent, mdiViewDashboardOutline, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useAuthStore } from '../stores/auth';
import { useEffect, useRef, useState } from 'react';
import { fetchNotificationsByUserId } from '../services/notifications.service';
import { useQuery } from '@tanstack/react-query';
import NotificationList from './Notifications/NotificationList';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Switch } from './ui/switch';

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
    <TooltipProvider>
      <header className="header-area">
        <div className="fixed top-0 z-50 h-16 w-full bg-background shadow-sm border-b border-border">
          <div className="flex justify-between w-full items-center px-4">

            <Button variant="ghost" size="lg" asChild className="text-2xl text-primary hover:bg-primary/30 rounded-xl">
              <Link to="/">
                <div className="p-2">
                  <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
                </div>
                Helpy
              </Link>
            </Button>

            <div className='flex space-x-2 xs:block lg:hidden'>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:bg-primary/30">
                <Link to={"/"}>
                  <Icon path={mdiViewDashboardOutline}
                    size={1}
                    className="text-primary"
                  />
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:bg-primary/30">
                <Link to="/profile">
                  <Icon path={mdiAccount}
                    title="Profil"
                    size={1}
                    />
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-primary/30">
                <Icon path={mdiBottleTonicPlusOutline}
                  title="Profil"
                  size={1}
                />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-primary/30">
                <Icon path={mdiHeartOutline}
                  title="Profil"
                  size={1}
                />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-primary/30">
                <Icon path={mdiHeadHeartOutline}
                  title="Profil"
                  size={1}
                />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-primary/30">
                <Icon path={mdiForumOutline}
                  title="Profil"
                  size={1}
                />
              </Button>
            </div>

            <div className='flex items-center gap-4'>
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 mr-4 border rounded-full p-2">
                      <Icon
                        path={mdiWeatherSunny}
                        size={.7}
                        className="text-primary"
                        />
                      <Switch
                        checked={theme === "dim"}
                        onCheckedChange={(checked) => handleToggle({ target: { checked } })}
                      />
                      <Icon
                        path={mdiMoonWaxingCrescent}
                        size={.7}
                        className="text-primary"
                        />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Changer de thème</p>
                  </TooltipContent>
                </Tooltip>

                <div className="relative" ref={notifRef}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="relative rounded-full"
                        onClick={() => setIsNotifOpen(!isNotifOpen)}
                      >
                        <Icon path={mdiBellOutline} size={1.3} />
                        { notifications && notifications.length > 0 && (
                          <span className='absolute p-1.5 text-white border-2 bg-orange-600 rounded-xl right-1 bottom-1'/>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Notifications</p>
                    </TooltipContent>
                  </Tooltip>
                  { isNotifOpen && (
                    <div className="absolute right-0 mt-2">
                      <NotificationList notifications={notifications || []}/>
                    </div>
                  )}      
                </div>
              </>

              {user?.isAdmin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                      <Link to="/admin-page">
                        <Icon path={mdiCogOutline} size={1.3} />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Espace administration</p>
                  </TooltipContent>
                </Tooltip>
              )}

            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Navbar;