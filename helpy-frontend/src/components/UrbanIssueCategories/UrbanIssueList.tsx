import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUrbanIssueCategories } from '@/services/urbanIssueCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { UrbanIssueCardView } from "./UrbanIssueCardView";
import { UrbanIssueListSwitcher } from "./UrbanIssueModeSwitcher";
import { UrbanIssueListView } from "./UrbanIssueListView";
import { UrbanIssueTableView } from "./UrbanIssueTableView";
import { useMemo } from "react";

type Mode = 'card' | 'list' | 'table';

export const UrbanIssueList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('urbanIssueViewMode');
    return (savedMode as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('urbanIssueViewMode', mode);
  }, [mode]);

  const { data: groupedUrbanIssues, isLoading, isError } = useQuery({
    queryKey: ['urbanIssues'],
    queryFn: fetchUrbanIssueCategories,
  });

  // === Filtrage et tri dans une structure hiérarchique ===
  const filteredGrouped = useMemo(() => {
    if (!groupedUrbanIssues) return {};

    const searchLower = search.toLowerCase();
    const filtered: Record<string, Record<string, ICategory[]>> = {};

    Object.entries(groupedUrbanIssues).forEach(([typeName, chapters]) => {
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
  }, [groupedUrbanIssues, search]);

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  const hasResults = Object.keys(filteredGrouped).length > 0;

  return (
    <div className="w-full p-4">
      <UrbanIssueListSwitcher
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
            {mode === 'list' && <UrbanIssueListView urbanIssueCategories={categories} />}
            {mode === 'card' && <UrbanIssueCardView urbanIssueCategories={categories} />}
            {mode === 'table' && <UrbanIssueTableView urbanIssueCategories={categories} />}
          </div>
        ))
      ))}
    </div>
  );
};