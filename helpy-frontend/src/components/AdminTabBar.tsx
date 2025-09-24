import { useEffect } from 'react';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction } from 'react';
import { fetchMenuItems } from '@/services/menuItems.service';
import { useQuery } from '@tanstack/react-query';
import { iconMap } from '@/constants/iconMap';
import { ETabKey } from '@/@types/ETabKey';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

type AdminTabProps = {
  activeTab: ETabKey | null;
  setActiveTab: Dispatch<SetStateAction<ETabKey | null>>;
};

export const AdminTabBar: React.FC<AdminTabProps> = ({ activeTab, setActiveTab }) => {
  const { data: menuItems, isLoading, isError } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
  });

  useEffect(() => {
    if (menuItems && menuItems.length > 0 && !activeTab) {
      setActiveTab(menuItems[0].key as ETabKey);
    }
  }, [menuItems, activeTab, setActiveTab]);

  if (isLoading) {
    return <div className="text-sm text-muted-foreground">Chargement...</div>;
  }

  if (isError) {
    return <div className="text-sm text-destructive">Erreur lors du chargement du menu</div>;
  }

  return (
    <Tabs 
      value={activeTab || undefined} 
      onValueChange={(value) => setActiveTab(value as ETabKey)}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-1 h-auto p-1 bg-muted">
        {menuItems?.map(({ id, label, icon, key }) => (
          <TabsTrigger
            key={id}
            value={key}
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {icon && iconMap[icon] && (
              <Icon path={iconMap[icon]} size={0.7} className="flex-shrink-0" />
            )}
            <span className="truncate">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

