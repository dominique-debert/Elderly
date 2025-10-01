import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '@/services/activityCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { ActivityCardView } from "./ActivityCardView";
import { ActivityListSwitcher } from "./ActivityModeSwitcher";
import { ActivityListView } from "./ActivityListView";
import { ActivityTableView } from "./ActivityTableView";

type Mode = 'card' | 'list' | 'table';

export const ActivityList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('activityViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('activityViewMode', mode);
  }, [mode]);

  const { data: groupedActivities, isLoading, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const filteredChapters = Object.entries(groupedActivities ?? {}).filter(([, types]) => {
    const allActivities = Object.values(types).flat() as ICategory[];
    return allActivities.some((category) =>
      category.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <ActivityListSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
      />

      {filteredChapters.length === 0 && (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun résultat ne correspond à la recherche.
        </div>
      )}

      {filteredChapters.map(([chapterName, types], index) => {
        const allActivities = Object.values(types).flat() as ICategory[];
        const filtered = allActivities.filter((activity) =>
          activity.categoryName.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={chapterName} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <ActivityListView activities={filtered} />}
            {mode === 'card' && <ActivityCardView activities={filtered} />}
            {mode === 'table' && <ActivityTableView activities={filtered} />}
          </div>
        );
      })}
    </div>
  );
};
