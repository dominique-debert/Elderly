import Icon from '@mdi/react';
import { mdiBottleTonicPlusOutline, mdiForumOutline, mdiHeadHeartOutline, mdiHeartOutline, mdiViewDashboardOutline } from '@mdi/js';
import { useAuthStore } from '../stores/auth'; 
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Sidebar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <TooltipProvider>
      <aside
        className="hidden w-20 mr-2 lg:block"
        >

        <div className="fixed z-60 top-16 left-0 w-20 h-[calc(100vh-4rem)] bg-background border-r border-border flex flex-col items-center py-4">

          <div className="flex flex-row gap-2">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-16 h-16">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      alt="avatar"
                      src={`/images/${useAuthStore.getState().user?.avatar || 'default-avatar.svg'}`}
                      className="w-full h-full object-cover"
                      />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent side="right" className="w-52">
                <DropdownMenuItem>
                  Tes préférences
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/login" onClick={() => logout(navigate)}>Se déconnecter</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
              
            </DropdownMenu>
          </div>

          <nav className="flex-1 w-full px-2 space-y-2 mt-6 rounded-xl">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full p-3 text-gray-400 hover:bg-primary/30" asChild>
                  <Link to="/">
                    <Icon
                      path={mdiViewDashboardOutline}
                      size={1}
                      className="text-primary"
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tableau de bord</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full p-3 text-gray-400 hover:bg-primary/30" asChild>
                  <Link to={"/wellness"}>
                    <Icon path={mdiHeartOutline}
                      title="Suivi du bien-être"
                      size={1}
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Bien-être</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full p-3 text-gray-400 hover:bg-primary/30" asChild>
                  <Link to={"/medications"}>
                    <Icon path={mdiBottleTonicPlusOutline}
                      title="Médicaments"
                      size={1}
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Médicaments</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full p-3 text-gray-400 hover:bg-primary/30" asChild>
                  <Link to={"/objectives"}>
                    <Icon path={mdiHeadHeartOutline}
                      title="Suivi des objectifs"
                      size={1}
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Objectifs</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-full p-3 text-gray-400 hover:bg-primary/30" asChild>
                  <Link to={"/forum"}>
                    <Icon path={mdiForumOutline}
                      title="Forum"
                      size={1}
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Forum</p>
              </TooltipContent>
            </Tooltip>

          </nav>

        </div>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;