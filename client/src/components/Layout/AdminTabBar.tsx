import { Dispatch, SetStateAction, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
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
    <ul className="menu gap-4 lg:menu-horizontal w-full p-0 m-0 mt-4">
      {menuItems?.map(({ id, label, icon, key }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => setActiveTab(key as ETabKey)}
            className={`tab w-full justify-start rounded-none hover:bg-transparent ${
              activeTab === key
                ? "border-b-3 border-primary text-slate-00 dark:text-white font-medium"
                : ""
            }`}
            aria-selected={activeTab === key}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
