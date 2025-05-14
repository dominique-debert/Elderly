import { useEffect } from 'react';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction } from 'react';
import { fetchMenuItems } from '@/services/menuItem.service';
import { useQuery } from '@tanstack/react-query';
import { iconMap } from '@/constants/iconMap';
import { ITabKey } from '@/@types/ITabKey';

type AdminTabProps = {
  activeTab: ITabKey | null;
  setActiveTab: Dispatch<SetStateAction<ITabKey | null>>;
};

function AdminTabBar({ activeTab, setActiveTab }: AdminTabProps) {
  const { data: menuItems, isLoading, isError } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
  });

  // Définir le premier onglet comme actif par défaut
  useEffect(() => {
    if (menuItems && menuItems.length > 0 && !activeTab) {
      setActiveTab(menuItems[0].key as ITabKey);
    }
  }, [menuItems, activeTab, setActiveTab]);

  if (isLoading) return <div className="text-sm text-gray-500">Chargement...</div>;
  if (isError) return <div className="text-sm text-red-500">Erreur lors du chargement du menu</div>;

  return (
    <ul className="menu bg-base-100 lg:menu-horizontal rounded-box p-0">
      {menuItems?.map(({ id, label, icon, key }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => setActiveTab(key as ITabKey)}
            className={`btn btn-ghost w-full justify-start ${
              activeTab === key ? 'bg-primary text-white' : ''
            }`}
            aria-selected={activeTab === key}
          >
            {icon && iconMap[icon] && (
              <Icon path={iconMap[icon]} size={0.8} className="mr-2 text-white-400" />
            )}
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AdminTabBar;
