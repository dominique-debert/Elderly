import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  UrbanIssueCardView,
  UrbanIssueListView,
  UrbanIssueTableView,
  CategoryModeSwitcher,
} from "@/components";

type Mode = "card" | "list" | "table";

export function UrbanIssueList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.UrbanIssue + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.UrbanIssue + "ViewMode", mode);
  }, [mode]);

  const {
    data: urbanIssues,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.UrbanIssue],
    queryFn: () => getCategories(ECategoryType.URBAN_ISSUE),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!urbanIssues || !Array.isArray(urbanIssues)) return [];

    // Filtrer par recherche
    const filtered = urbanIssues.filter((urbanIssue: ICategory) =>
      urbanIssue.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, urbanIssue: ICategory) => {
      const chapterId = urbanIssue.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(urbanIssue);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterUrbanIssues]) => {
        const firstUrbanIssue = chapterUrbanIssues[0];
        return {
          chapterName:
            firstUrbanIssue.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstUrbanIssue.categoryChapter?.chapterDescription || "",
          urbanIssues: chapterUrbanIssues.sort((a, b) =>
            a.categoryName.localeCompare(b.categoryName)
          ),
        };
      })
      .sort((a, b) => a.chapterName.localeCompare(b.chapterName));
  })();

  return (
    <div className="w-full p-4">
      <CategoryModeSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
        activeTab={ETabKey.UrbanIssue}
      />

      {isLoading ? (
        <div className="text-center mt-40">Chargement...</div>
      ) : isError ? (
        <div className="text-center mt-10 text-red-500">
          Erreur de chargement
        </div>
      ) : processedChapters.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun résultat ne correspond à la recherche.
        </div>
      ) : (
        processedChapters.map(
          ({ chapterName, chapterDescription, urbanIssues }, index: number) => (
            <div
              key={`${chapterName}-${index}`}
              className={index !== 0 ? "mt-12" : "mt-6"}
            >
              <div className="mb-2">
                <h2 className="text-2xl font-light text-primary">
                  {chapterName}
                </h2>
                {chapterDescription && (
                  <p className="text-gray-600 mt-1">{chapterDescription}</p>
                )}
              </div>
              <div className="divider mt-0 mb-0"></div>
              {mode === "list" && (
                <UrbanIssueListView urbanIssues={urbanIssues} />
              )}
              {mode === "card" && (
                <UrbanIssueCardView urbanIssues={urbanIssues} />
              )}
              {mode === "table" && (
                <UrbanIssueTableView urbanIssues={urbanIssues} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
