import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  HelpCardView,
  CategoryModeSwitcher,
  HelpListView,
  HelpTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function HelpList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Help + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Help + "ViewMode", mode);
  }, [mode]);

  const {
    data: helps,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Help],
    queryFn: () => getCategories(ECategoryType.HELP),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!helps || !Array.isArray(helps)) return [];

    // Filtrer par recherche
    const filtered = helps.filter((help: ICategory) =>
      help.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, help: ICategory) => {
      const chapterId = help.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(help);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterHelps]) => {
        const firstHelp = chapterHelps[0];
        return {
          chapterName:
            firstHelp.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstHelp.categoryChapter?.chapterDescription || "",
          helps: chapterHelps.sort((a, b) =>
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
        activeTab={ETabKey.Help}
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
          ({ chapterName, chapterDescription, helps }, index: number) => (
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
              {mode === "list" && <HelpListView helps={helps} />}
              {mode === "card" && <HelpCardView helps={helps} />}
              {mode === "table" && <HelpTableView helps={helps} />}
            </div>
          )
        )
      )}
    </div>
  );
}
