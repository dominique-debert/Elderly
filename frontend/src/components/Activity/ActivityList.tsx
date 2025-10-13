import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchActivityCategories } from "@/services";
import type { ICategory } from "@/types";

import {
  ActivityCardView,
  ActivityModeSwitcher,
  ActivityListView,
  ActivityTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ActivityList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("ActivityViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("ActivityViewMode", mode);
  }, [mode]);

  const {
    data: groupedactivities,
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

  const processedChapters = (() => {
    console.debug("ActivityList - groupedactivities:", groupedactivities);

    // normalize: if the query returned an axios response object, use its .data
    const source =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      groupedactivities && (groupedactivities as any).data
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (groupedactivities as any).data
        : groupedactivities;

    return Object.entries(source || {})
      .flatMap(([, chapters]) => {
        return Object.entries(chapters || {}).map(([chapterId, activities]) => {
          // Normalize activities to an array (handle array, object map or single item)
          let chapteractivities: ICategory[] = [];
          if (Array.isArray(activities)) {
            chapteractivities = activities as ICategory[];
          } else if (activities && typeof activities === "object") {
            chapteractivities = Object.values(activities) as ICategory[];
          } else {
            console.warn(
              "ActivityList: activities not iterable for chapterId",
              chapterId,
              activities
            );
            chapteractivities = [];
          }

          const chapterInfo = chapteractivities[0]?.categoryChapter || {
            chapterName: `${chapterId}`,
            chapterDescription: "",
          };

          // ensure we only operate on items that have a categoryName string
          const filteredActivities = chapteractivities.filter(
            (a) => typeof a?.categoryName === "string"
          );

          return {
            chapterName: chapterInfo.chapterName,
            chapterDescription: chapterInfo.chapterDescription,
            activities: filteredActivities
              .filter((Activity) =>
                Activity.categoryName
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
          };
        });
      })
      .filter((chapter) => chapter.activities.length > 0)
      .sort((a, b) => a.chapterName.localeCompare(b.chapterName));
  })();

  return (
    <div className="w-full p-4">
      <ActivityModeSwitcher
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
                <h2 className="text-2xl font-light text-primary">
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
