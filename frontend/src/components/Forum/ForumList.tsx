import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchForumCategories } from "@/services";
import type { ICategory } from "@/types";

import {
  ForumCardView,
  ForumModeSwitcher,
  ForumListView,
  ForumTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ForumList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("forumViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("forumViewMode", mode);
  }, [mode]);

  const {
    data: groupedForums,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["forums"],
    queryFn: fetchForumCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // Process and sort the forum categories
  const processedChapters = Object.entries(groupedForums || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, forums]) => {
        const chapterForums = forums as ICategory[];
        const chapterInfo = chapterForums[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          forums: [...chapterForums]
            .filter((forum) =>
              forum.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.forums.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <ForumModeSwitcher
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
          ({ chapterName, chapterDescription, forums }, index: number) => (
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
              {mode === "list" && <ForumListView forums={forums} />}
              {mode === "card" && <ForumCardView forums={forums} />}
              {mode === "table" && <ForumTableView forums={forums} />}
            </div>
          )
        )
      )}
    </div>
  );
}
