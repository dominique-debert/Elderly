import { useState, useEffect, useMemo } from 'react';
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
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('wellnessViewMode', mode);
  }, [mode]);

  const { data: groupedWellness, isLoading, isError } = useQuery({
    queryKey: ['wellness'],
    queryFn: fetchWellnessCategories,
  });

  // === Filtrage et tri dans une structure hiérarchique ===
  const filteredGrouped = useMemo(() => {
    if (!groupedWellness) return {};

    const searchLower = search.toLowerCase();
    const filtered: Record<string, Record<string, ICategory[]>> = {};

    Object.entries(groupedWellness).forEach(([typeName, chapters]) => {
      Object.entries(chapters).forEach(([chapterName, categories]) => {
        const categoryArray = categories as ICategory[];
        const filteredCategories = categoryArray.filter((category) =>
          category.categoryName.toLowerCase().includes(searchLower)
        );
        if (filteredCategories.length > 0) {
          if (!filtered[typeName]) filtered[typeName] = {};
          filtered[typeName][chapterName] = filteredCategories;
        }
      });
    });

    return filtered;
  }, [groupedWellness, search]);

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const hasResults = Object.keys(filteredGrouped).length > 0;

  return (
    <div className="w-full p-4">
      <WellnessListSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
      />

      {!hasResults && (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun résultat ne correspond à la recherche.
        </div>
      )}

      {Object.entries(filteredGrouped).sort().map(([typeName, chapters]) => (
        Object.entries(chapters).sort().map(([chapterName, categories], index) => (
          <div key={`${typeName}-${chapterName}`} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="text-xl font-semibold">{typeName} → {chapterName}</div>
            <div className="divider mt-0"></div>
            {mode === 'list' && <WellnessListView wellnessCategories={categories} />}
            {mode === 'card' && <WellnessCardView wellnessCategories={categories} />}
            {mode === 'table' && <WellnessTableView wellnessCategories={categories} />}
          </div>
        ))
      ))}
    </div>
  );
};
