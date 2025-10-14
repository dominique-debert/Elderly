import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getNutritionCategories } from "@/services";
import type { ICategory } from "@/types";

import {
  NutritionCardView,
  NutritionModeSwitcher,
  NutritionListView,
  NutritionTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

type NutritionListProps = {
  mode?: Mode;
  setMode?: (m: Mode) => void;
  search?: string;
  setSearch?: (s: string) => void;
};

export function NutritionList({
  mode: externalMode,
  setMode: externalSetMode,
  search: externalSearch,
  setSearch: externalSetSearch,
}: NutritionListProps = {}) {
  // local fallback state if parent doesn't provide handlers
  const [localMode, setLocalMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("NutritionViewMode");
    return (savedMode as Mode) || "list";
  });

  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    const m = externalMode ?? localMode;
    localStorage.setItem("NutritionViewMode", m);
  }, [externalMode, localMode]);

  const mode = externalMode ?? localMode;
  const setMode = externalSetMode ?? setLocalMode;
  const search = externalSearch ?? localSearch;
  const setSearch = externalSetSearch ?? setLocalSearch;

  const {
    data: groupednutritions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["nutritions"],
    queryFn: getNutritionCategories,
  });

  const processedChapters = (() => {
    // normalize: if the query returned an axios response object, use its .data
    const source =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      groupednutritions && (groupednutritions as any).data
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (groupednutritions as any).data
        : groupednutritions;

    return Object.entries(source || {})
      .flatMap(([, chapters]) => {
        return Object.entries(chapters || {}).map(([chapterId, nutritions]) => {
          // Normalize nutritions to an array (handle array, object map or single item)
          let chapternutritions: ICategory[] = [];
          if (Array.isArray(nutritions)) {
            chapternutritions = nutritions as ICategory[];
          } else if (nutritions && typeof nutritions === "object") {
            chapternutritions = Object.values(nutritions) as ICategory[];
          } else {
            console.warn(
              "NutritionList: nutritions not iterable for chapterId",
              chapterId,
              nutritions
            );
            chapternutritions = [];
          }

          const chapterInfo = chapternutritions[0]?.categoryChapter || {
            chapterName: `${chapterId}`,
            chapterDescription: "",
          };

          // ensure we only operate on items that have a categoryName string
          const filteredNutritions = chapternutritions.filter(
            (a) => typeof a?.categoryName === "string"
          );

          return {
            chapterName: chapterInfo.chapterName,
            chapterDescription: chapterInfo.chapterDescription,
            nutritions: filteredNutritions
              .filter((Nutrition) =>
                Nutrition.categoryName
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
          };
        });
      })
      .filter((chapter) => chapter.nutritions.length > 0)
      .sort((a, b) => a.chapterName.localeCompare(b.chapterName));
  })();

  return (
    <div className="w-full p-4">
      <NutritionModeSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
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
