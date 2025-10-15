import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  CognitiveCardView,
  CognitiveListView,
  CategoryModeSwitcher,
  CognitiveTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function CognitiveList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Cognitive + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Cognitive + "ViewMode", mode);
  }, [mode]);

  const {
    data: cognitives,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Cognitive],
    queryFn: () => getCategories(ECategoryType.COGNITIVE),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!cognitives || !Array.isArray(cognitives)) return [];

    // Filtrer par recherche
    const filtered = cognitives.filter((cognitive: ICategory) =>
      cognitive.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, cognitive: ICategory) => {
      const chapterId = cognitive.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(cognitive);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterCognitives]) => {
        const firstCognitive = chapterCognitives[0];
        return {
          chapterName:
            firstCognitive.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstCognitive.categoryChapter?.chapterDescription || "",
          cognitives: chapterCognitives.sort((a, b) =>
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
        activeTab={ETabKey.Cognitive}
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
          ({ chapterName, chapterDescription, cognitives }, index: number) => (
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
              {mode === "list" && <CognitiveListView cognitives={cognitives} />}
              {mode === "card" && <CognitiveCardView cognitives={cognitives} />}
              {mode === "table" && (
                <CognitiveTableView cognitives={cognitives} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
