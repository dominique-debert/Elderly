import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWellnessCategories } from '@/services/wellnessCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { WellnessCardView } from "./WellnessCardView";
import { WellnessListSwitcher } from "./WellnessModeSwitcher";
import { WellnessListView } from "./WellnessListView";
import { WellnessTableView } from "./WellnessTableView";

type Mode = 'card' | 'list' | 'table';

export const WellnessList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('wellnessViewMode');
    return (savedMode as Mode) || 'list';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('wellnessViewMode', mode);
  }, [mode]);

  const { data: groupedWellness, isLoading, isError } = useQuery({
    queryKey: ['wellness'],
    queryFn: fetchWellnessCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const filteredChapters = Object.entries(groupedWellness ?? {}).filter(([, types]) => {
    const allWellness = Object.values(types).flat() as ICategory[];
    return allWellness.some((category) =>
      category.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <WellnessListSwitcher
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
        const allWellness = Object.values(types).flat() as ICategory[];
        const filtered = allWellness.filter((wellness) =>
          wellness.categoryName.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={chapterName} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <WellnessListView wellnessCategories={filtered} />}
            {mode === 'card' && <WellnessCardView wellnessCategories={filtered} />}
            {mode === 'table' && <WellnessTableView wellnessCategories={filtered} />}
          </div>
        );
      })}
    </div>
  );
};
