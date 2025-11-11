import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  CategoryModeSwitcher,
  CategoryListView,
  CategoryCardView,
  CategoryTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

type CategoryListProps = {
  categoryType: ECategoryType;
  tabKey: ETabKey;
};

export function CategoryList({ categoryType, tabKey }: CategoryListProps) {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(tabKey + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(tabKey + "ViewMode", mode);
  }, [mode, tabKey]);

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [tabKey],
    queryFn: () => getCategories(categoryType),
  });

  const chapters = (() => {
    if (!categories || !Array.isArray(categories)) return [];

    const filtered = categories.filter((category: ICategory) =>
      category.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    const grouped = filtered.reduce(
      (acc, category: ICategory) => {
        const chapterId = category.chapterId || 0;
        if (!acc[chapterId]) {
          acc[chapterId] = [];
        }
        acc[chapterId].push(category);
        return acc;
      },
      {} as Record<number, ICategory[]>
    );

    return Object.entries(grouped)
      .map(([, chapterCategories]) => {
        const firstCategory = chapterCategories[0];
        return {
          chapterName:
            firstCategory.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstCategory.categoryChapter?.chapterDescription || "",
          categories: chapterCategories.sort((a, b) =>
            a.categoryName.localeCompare(b.categoryName)
          ),
        };
      })
      .sort((a, b) => a.chapterName.localeCompare(b.chapterName));
  })();

  return (
    <div className="w-full p-4 bg-white dark:bg-transparent">
      <CategoryModeSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
        activeTab={tabKey}
      />

      {isLoading ? (
        <div className="text-center mt-40">Chargement...</div>
      ) : isError ? (
        <div className="text-center mt-10 text-red-500">
          Erreur de chargement
        </div>
      ) : chapters.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun résultat ne correspond à la recherche.
        </div>
      ) : (
        chapters.map(
          ({ chapterName, chapterDescription, categories }, index: number) => (
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
                <CategoryListView categories={categories} tabKey={tabKey} />
              )}
              {mode === "card" && (
                <CategoryCardView categories={categories} tabKey={tabKey} />
              )}
              {mode === "table" && (
                <CategoryTableView categories={categories} tabKey={tabKey} />
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
