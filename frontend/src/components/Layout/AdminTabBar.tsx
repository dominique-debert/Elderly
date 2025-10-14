import Icon from "@mdi/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { iconMap } from "@/constants";
import { getMenuItems } from "@/services";
import { ETabKey } from "@/types/ETabKey";

type AdminTabProps = {
  activeTab: ETabKey | null;
  setActiveTab: Dispatch<SetStateAction<ETabKey | null>>;
};

export function AdminTabBar({ activeTab, setActiveTab }: AdminTabProps) {
  const {
    data: menuItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItems,
  });

  useEffect(() => {
    if (menuItems && menuItems.length > 0 && !activeTab) {
      setActiveTab(menuItems[0].key as ETabKey);
    }
  }, [menuItems, activeTab, setActiveTab]);

  if (isLoading) {
    return <div className="text-sm text-gray-500">Chargement...</div>;
  }

  if (isError) {
    return (
      <div className="text-sm text-red-500">
        Erreur lors du chargement du menu
      </div>
    );
  }

  return (
    <ul className="menu lg:menu-horizontal rounded-box p-0">
      {menuItems?.map(({ id, label, icon, key }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => setActiveTab(key as ETabKey)}
            className={`btn btn-ghost w-full justify-start ${
              activeTab === key ? "bg-primary text-white" : ""
            }`}
            aria-selected={activeTab === key}
          >
            {icon && iconMap[icon] && (
              <Icon
                path={iconMap[icon]}
                size={0.8}
                className="mr-2 text-white-400"
              />
            )}
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
