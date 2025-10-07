import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUrbanIssueCategories } from '@/services/urbanIssueCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { UrbanIssueCardView } from "./UrbanIssueCardView";
import { UrbanIssueModeSwitcher } from "./UrbanIssueModeSwitcher";
import { UrbanIssueListView } from "./UrbanIssueListView";
import { UrbanIssueTableView } from "./UrbanIssueTableView";

type Mode = 'card' | 'list' | 'table';

export const UrbanIssueList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('urbanIssueViewMode');
    return (savedMode as Mode) || 'list';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('urbanIssueViewMode', mode);
  }, [mode]);

  const { data: groupedUrbanIssues, isLoading, isError } = useQuery({
    queryKey: ['urbanIssues'],
    queryFn: fetchUrbanIssueCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  // Process and sort the badges
  const processedChapters = Object.entries(groupedUrbanIssues || {}).flatMap(([typeName, chapters]) => {
    return Object.entries(chapters).map(([chapterId, urbanIssues]) => {
      const chapterUrbanIssues = urbanIssues as ICategory[];
      const chapterInfo = chapterUrbanIssues[0]?.categoryChapter || {
        chapterName: `${chapterId}`,
        chapterDescription: ''
      };

      return {
        chapterName: chapterInfo.chapterName,
        chapterDescription: chapterInfo.chapterDescription,
        urbanIssues: [...chapterUrbanIssues]
          .filter(urbanIssue => 
            urbanIssue.categoryName.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
      };
    });
  }).filter(chapter => chapter.urbanIssues.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <UrbanIssueModeSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
      />

      {processedChapters.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun résultat ne correspond à la recherche.
        </div>
      ) : (
        processedChapters.map(({ chapterName, chapterDescription, urbanIssues }, index: number) => (
          <div key={`${chapterName}-${index}`} className={index !== 0 ? 'mt-12' : 'mt-6'}>
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{chapterName}</h2>
              {chapterDescription && (
                <p className="text-gray-600 mt-1">{chapterDescription}</p>
              )}
            </div>
            <div className="divider mt-0 mb-6"></div>
            {mode === 'list' && <UrbanIssueListView urbanIssues={urbanIssues} />}
            {mode === 'card' && <UrbanIssueCardView urbanIssues={urbanIssues} />}
            {mode === 'table' && <UrbanIssueTableView urbanIssues={urbanIssues} />}
          </div>
        ))
      )}
    </div>
  );
};
