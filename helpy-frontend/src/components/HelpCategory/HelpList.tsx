import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHelpCategories } from '@/services/helpCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { HelpCardView } from "./HelpCardView";
import { HelpListSwitcher } from "./HelpModeSwitcher";
import { HelpListView } from "./HelpListView";
import { HelpTableView } from "./HelpTableView";

type Mode = 'card' | 'list' | 'table';

export const HelpList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('helpViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('helpViewMode', mode);
  }, [mode]);

  const { data: groupedHelp, isLoading, isError } = useQuery({
    queryKey: ['help'],
    queryFn: fetchHelpCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const filteredChapters = Object.entries(groupedHelp ?? {}).filter(([, types]) => {
    const allHelpCategories = Object.values(types).flat() as ICategory[];
    return allHelpCategories.some((category) =>
      category.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <HelpListSwitcher
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
        const allHelpCategories = Object.values(types).flat() as ICategory[];
        const filtered = allHelpCategories.filter((badge) =>
          badge.categoryName.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={chapterName} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <HelpListView helpCategories={filtered} />}
            {mode === 'card' && <HelpCardView helpCategories={filtered} />}
            {mode === 'table' && <HelpTableView helpCategories={filtered} />}
          </div>
        );
      })}
    </div>
  );
};
