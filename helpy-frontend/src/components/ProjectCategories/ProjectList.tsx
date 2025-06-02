import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProjectCategories } from '@/services/projectCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { ProjectCardView } from "./ProjectCardView";
import { ProjectListSwitcher } from "./ProjectModeSwitcher";
import { ProjectListView } from "./ProjectListView";
import { ProjectTableView } from "./ProjectTableView";
import { useMemo } from "react";

type Mode = 'card' | 'list' | 'table';

export const ProjectList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('projectViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('projectViewMode', mode);
  }, [mode]);

  const { data: groupedProjects, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjectCategories,
  });

  // === Filtrage et tri dans une structure hiérarchique ===
  const filteredGrouped = useMemo(() => {
    if (!groupedProjects) return {};

    const searchLower = search.toLowerCase();
    const filtered: Record<string, Record<string, ICategory[]>> = {};

    Object.entries(groupedProjects).forEach(([typeName, chapters]) => {
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
  }, [groupedProjects, search]);

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const hasResults = Object.keys(filteredGrouped).length > 0;

  return (
    <div className="w-full p-4">
      <ProjectListSwitcher
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
            {mode === 'list' && <ProjectListView projectCategories={categories} />}
            {mode === 'card' && <ProjectCardView projectCategories={categories} />}
            {mode === 'table' && <ProjectTableView projectCategories={categories} />}
          </div>
        ))
      ))}
    </div>
  );
};