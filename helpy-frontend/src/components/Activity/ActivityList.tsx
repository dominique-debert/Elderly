import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchActivityCategories } from '@/services/activityCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { Icon } from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { ConfirmDeleteActivityModal } from "./ConfirmDeleteActivityModal";
import { ActivityCardView } from "./ActivityCardView";

type Mode = 'card' | 'list' | 'table';

export const ActivityList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem('activityViewMode') as Mode) || 'card';
  });

  const [search, setSearch] = useState('');
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<ICategory | null>(null);

  const queryClient = useQueryClient();

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['activities'] });
  };

  useEffect(() => {
    localStorage.setItem('activityViewMode', mode);
  }, [mode]);

  const { data: groupedActivities, isLoading, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  // Préparation : filtrer les chapitres avec des résultats
  const filteredChapters = Object.entries(groupedActivities ?? {}).filter(([_, types]) => {
    const allActivities = Object.values(types).flat() as ICategory[];
    return allActivities.some((cat) =>
      cat.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <label className="input">
          <Icon
            path={mdiMagnify}
            size={.8}
          />
          <input
            type="search"
            placeholder="Rechercher une activité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center text-gray-500 italic">Aucun résultat ne correspond à la recherche.</div>
      )}

      {filteredChapters.map(([chapterName, types]) => {
        const allActivities = Object.values(types).flat() as ICategory[];
        const filtered = allActivities.filter((activity) =>

        activity.categoryName.toLowerCase().includes(search.toLowerCase())
      );

      return (
        <>
          <div className="text-xl font-semibold mt-12" key={chapterName}>{chapterName}</div>
          <div className="divider mt-0"></div>
          <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
            {filtered.map((allActivities) => (
              mode === 'card' && <ActivityCardView activities={[allActivities]} />
              // mode === 'list' && <ActivityListView key={category.id} activities={[category]} />
              // mode === 'table' && <ActivityTableView key={category.id} activities={[category]} />
            ))}
            {isConfirmDeleteOpen && activityToDelete && (
              <ConfirmDeleteActivityModal
                category={ activityToDelete }
                onClose={() => setIsConfirmDeleteOpen(false)}
                onConfirm={ handleDeleted }
              />
            )}
          </div>
        </>
      );
    })}
    </div>
  );
};
