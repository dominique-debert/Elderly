import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProgramCategories } from '@/services/programCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { ProgramCardView } from "./ProgramCardView";
import { ProgramListSwitcher } from "./ProgramModeSwitcher";
import { ProgramListView } from "./ProgramListView";
import { ProgramTableView } from "./ProgramTableView";
import { useMemo } from "react";

type Mode = 'card' | 'list' | 'table';

export const ProgramList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('programViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('programViewMode', mode);
  }, [mode]);

  const { data: groupedPrograms, isLoading, isError } = useQuery({
    queryKey: ['programs'],
    queryFn: fetchProgramCategories,
  });

  // === Filtrage et tri dans une structure hiérarchique ===
  const filteredGrouped = useMemo(() => {
    if (!groupedPrograms) return {};

    const searchLower = search.toLowerCase();
    const filtered: Record<string, Record<string, ICategory[]>> = {};

    Object.entries(groupedPrograms).forEach(([typeName, chapters]) => {
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
  }, [groupedPrograms, search]);

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const hasResults = Object.keys(filteredGrouped).length > 0;

  return (
    <div className="w-full p-4">
      <ProgramListSwitcher
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
            {mode === 'list' && <ProgramListView programCategories={categories} />}
            {mode === 'card' && <ProgramCardView programCategories={categories} />}
            {mode === 'table' && <ProgramTableView programCategories={categories} />}
          </div>
        ))
      ))}
    </div>
  );
};