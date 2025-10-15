import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  NutritionCardView,
  CategoryModeSwitcher,
  NutritionListView,
  NutritionTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function NutritionList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Nutrition + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Nutrition + "ViewMode", mode);
  }, [mode]);

  const {
    data: nutritions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Nutrition],
    queryFn: () => getCategories(ECategoryType.NUTRITION),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!nutritions || !Array.isArray(nutritions)) return [];

    // Filtrer par recherche
    const filtered = nutritions.filter((nutrition: ICategory) =>
      nutrition.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, nutrition: ICategory) => {
      const chapterId = nutrition.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(nutrition);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterNutritions]) => {
        const firstNutrition = chapterNutritions[0];
        return {
          chapterName:
            firstNutrition.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstNutrition.categoryChapter?.chapterDescription || "",
          nutritions: chapterNutritions.sort((a, b) =>
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
        activeTab={ETabKey.Nutrition}
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
          ({ chapterName, chapterDescription, nutritions }, index: number) => (
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
              {mode === "list" && <NutritionListView nutritions={nutritions} />}
              {mode === "card" && <NutritionCardView nutritions={nutritions} />}
              {mode === "table" && (
                <NutritionTableView nutritions={nutritions} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
