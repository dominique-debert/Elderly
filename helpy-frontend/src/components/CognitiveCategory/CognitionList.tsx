import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCognitiveCategories } from '@/services/cognitiveCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { CognitionCardView } from "./CognitionCardView";
import { CognitionListSwitcher } from "./CognitionModeSwitcher";
import { CognitionListView } from "./CognitionListView";
import { CognitionTableView } from "./CognitionTableView";

type Mode = 'card' | 'list' | 'table';

export const CognitiveList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('cognitiveViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('cognitiveViewMode', mode);
  }, [mode]);

  const { data: groupedCognitions, isLoading, isError } = useQuery({
    queryKey: ['cognitive'],
    queryFn: fetchCognitiveCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const filteredChapters = Object.entries(groupedCognitions ?? {}).filter(([, types]) => {
    const allCognitiveCategories = Object.values(types).flat() as ICategory[];
    return allCognitiveCategories.some((category) =>
      category.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <CognitionListSwitcher
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
        const allCognitiveCategories = Object.values(types).flat() as ICategory[];
        const filtered = allCognitiveCategories.filter((badge) =>
          badge.categoryName.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={chapterName} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <CognitionListView cognitiveCategories={filtered} />}
            {mode === 'card' && <CognitionCardView cognitiveCategories={filtered} />}
            {mode === 'table' && <CognitionTableView cognitiveCategories={filtered} />}
          </div>
        );
      })}
    </div>
  );
};
