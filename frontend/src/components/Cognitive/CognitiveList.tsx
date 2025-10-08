import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCognitiveCategories } from "@/services";
import type { ICategory } from "@/types";
import { CognitiveCardView } from "./CognitiveCardView";
import { CognitiveModeSwitcher } from "./CognitiveModeSwitcher";
import CognitiveListView from "./CognitiveListView";
import CognitiveTableView from "./CognitiveTableView";

type Mode = "card" | "list" | "table";

export const CognitiveList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("cognitiveViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("cognitiveViewMode", mode);
  }, [mode]);

  const {
    data: groupedCognitive,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cognitive"],
    queryFn: fetchCognitiveCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  const processedChapters = Object.entries(groupedCognitive || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, cognitives]) => {
        const chapterCognitives = cognitives as ICategory[];
        const chapterInfo = chapterCognitives[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          cognitives: [...chapterCognitives]
            .filter((cognitive) =>
              cognitive.categoryName
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.cognitives.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <CognitiveModeSwitcher
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
          ({ chapterName, chapterDescription, cognitives }, index: number) => (
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
};
