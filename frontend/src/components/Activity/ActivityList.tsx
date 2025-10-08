import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchActivityCategories } from "@/services";
import type { ICategory } from "@/types";

import {
  ActivityCardView,
  ActivityListSwitcher,
  ActivityListView,
  ActivityTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ActivityList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("activityViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("activityViewMode", mode);
  }, [mode]);

  const {
    data: groupedActivities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // Process and sort the activities
  const processedChapters = Object.entries(groupedActivities || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, activities]) => {
        const chapterActivities = activities as ICategory[];
        const chapterInfo = chapterActivities[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          activities: [...chapterActivities]
            .filter((activity) =>
              activity.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.activities.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <ActivityListSwitcher
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
        processedChapters.map(
          ({ chapterName, chapterDescription, activities }, index: number) => (
            <div
              key={`${chapterName}-${index}`}
              className={index !== 0 ? "mt-12" : "mt-6"}
            >
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  {chapterName}
                </h2>
                {chapterDescription && (
                  <p className="text-gray-600 mt-1">{chapterDescription}</p>
                )}
              </div>
              <div className="divider mt-0 mb-6"></div>
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
