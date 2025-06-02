import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchResourceCategories } from "@/services/resourceCategory.service";
import type { ICategory } from '@/@types/ICategory';
import { ResourceCardView } from "./ResourceCardView"; 
import { ResourceListSwitcher } from "./ResourceModeSwitcher";
import { ResourceListView } from "./ResourceListView";

import { ResourceTableView } from "./ResourceTableView";

import { useMemo } from "react";

type Mode = 'card' | 'list' | 'table';

export const ResourceList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('resourceViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('resourceViewMode', mode);
  }, [mode]);

  const { data: groupedResources, isLoading, isError } = useQuery({
    queryKey: ['resource'],
    queryFn: fetchResourceCategories,
  });

  // === Filtrage et tri dans une structure hiérarchique ===
  const filteredGrouped = useMemo(() => {
    if (!groupedResources) return {};

    const searchLower = search.toLowerCase();
    const filtered: Record<string, Record<string, ICategory[]>> = {};

    Object.entries(groupedResources).forEach(([typeName, chapters]) => {
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
  }, [groupedResources, search]);

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const hasResults = Object.keys(filteredGrouped).length > 0;

  return (
    <div className="w-full p-4">
      <ResourceListSwitcher
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
            {mode === 'list' && <ResourceListView resourceCategories={categories} />}
            {mode === 'card' && <ResourceCardView resourceCategories={categories} />}
            {mode === 'table' && <ResourceTableView resourceCategories={categories} />}
          </div>
        ))
      ))}
    </div>
  );
};