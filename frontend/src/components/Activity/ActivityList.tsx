import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  ActivityCardView,
  ActivityListView,
  ActivityTableView,
  CategoryModeSwitcher,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ActivityList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Activity + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Activity + "ViewMode", mode);
  }, [mode]);

  const {
    data: activities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Activity],
    queryFn: () => getCategories(ECategoryType.ACTIVITY),
  });

  // Nouveau traitement: grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!activities || !Array.isArray(activities)) return [];

    // Filtrer par recherche
    const filtered = activities.filter((activity: ICategory) =>
      activity.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, activity: ICategory) => {
      const chapterId = activity.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(activity);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterActivities]) => {
        const firstActivity = chapterActivities[0];
        return {
          chapterName:
            firstActivity.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstActivity.categoryChapter?.chapterDescription || "",
          activities: chapterActivities.sort((a, b) =>
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
        activeTab={ETabKey.Activity}
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
          ({ chapterName, chapterDescription, activities }, index: number) => (
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

              {mode === "list" && <ActivityListView activities={activities} />}
              {mode === "card" && <ActivityCardView activities={activities} />}
              {mode === "table" && (
                <ActivityTableView activities={activities} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
