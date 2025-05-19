import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBadgeCategories } from '@/services/badgeCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { BadgeCardView } from "./BadgeCardView";
import { BadgeListSwitcher } from "./BadgeModeSwitcher";
import { BadgeListView } from "./BadgeListView";
import { BadgeTableView } from "./BadgeTableView";

type Mode = 'card' | 'list' | 'table';

export const BadgeList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('badgeViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('badgeViewMode', mode);
  }, [mode]);

  const { data: groupedBadges, isLoading, isError } = useQuery({
    queryKey: ['badges'],
    queryFn: fetchBadgeCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const filteredChapters = Object.entries(groupedBadges ?? {}).filter(([, types]) => {
    const allBadges = Object.values(types).flat() as ICategory[];
    return allBadges.some((category) =>
      category.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <BadgeListSwitcher
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
        const allBadges = Object.values(types).flat() as ICategory[];
        const filtered = allBadges.filter((badge) =>
          badge.categoryName.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={chapterName} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <BadgeListView badgeCategories={filtered} />}
            {mode === 'card' && <BadgeCardView badgeCategories={filtered} />}
            {mode === 'table' && <BadgeTableView badgeCategories={filtered} />}
          </div>
        );
      })}
    </div>
  );
};
