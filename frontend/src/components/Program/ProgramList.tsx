import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProgramCategories } from "@/services/programCategory.service";
import { ProgramCardView } from "./ProgramCardView";
import { ProgramModeSwitcher } from "./ProgramModeSwitcher";
import { ProgramListView } from "./ProgramListView";
import { ProgramTableView } from "./ProgramTableView";
import type { ICategory } from "@/@types";

type Mode = "card" | "list" | "table";

export const ProgramList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("programViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("programViewMode", mode);
  }, [mode]);

  const {
    data: groupedPrograms,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["programs"],
    queryFn: fetchProgramCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // Process and sort the badges
  const processedChapters = Object.entries(groupedPrograms || {})
    .flatMap(([typeName, chapters]) => {
      return Object.entries(chapters).map(([chapterId, programs]) => {
        const chapterPrograms = programs as ICategory[];
        const chapterInfo = chapterPrograms[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          programs: [...chapterPrograms]
            .filter((program) =>
              program.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.programs.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <ProgramModeSwitcher
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
          ({ chapterName, chapterDescription, programs }, index: number) => (
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
              {mode === "list" && <ProgramListView programs={programs} />}
              {mode === "card" && <ProgramCardView programs={programs} />}
              {mode === "table" && <ProgramTableView programs={programs} />}
            </div>
          )
        )
      )}
    </div>
  );
};
