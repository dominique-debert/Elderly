import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getWellnessCategories } from "@/services";
import { ETabKey, type ICategory } from "@/types";

import {
  WellnessCardView,
  WellnessModeSwitcher,
  WellnessListView,
  WellnessTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function WellnessList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("urbanIssueViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("urbanIssueViewMode", mode);
  }, [mode]);

  const {
    data: groupedWellnesss,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Wellness],
    queryFn: getWellnessCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // Process and sort the urban issues
  const processedChapters = Object.entries(groupedWellnesss || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, wellnessCategories]) => {
        const chapterWellnesss = wellnessCategories as ICategory[];
        const chapterInfo = chapterWellnesss[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          wellnessCategories: [...chapterWellnesss]
            .filter((urbanIssue) =>
              urbanIssue.categoryName
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.wellnessCategories.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <WellnessModeSwitcher
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
          (
            { chapterName, chapterDescription, wellnessCategories },
            index: number
          ) => (
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
                <WellnessListView wellnessCategories={wellnessCategories} />
              )}
              {mode === "card" && (
                <WellnessCardView wellnessCategories={wellnessCategories} />
              )}
              {mode === "table" && (
                <WellnessTableView wellnessCategories={wellnessCategories} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
