import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSkillCategories } from "@/services";
import type { ICategory } from "@/types";
import { SkillCardView } from "./SkillCardView";
import { SkillModeSwitcher } from "./SkillModeSwitcher";
import { SkillListView } from "./SkillListView";
import { SkillTableView } from "./SkillTableView";

type Mode = "card" | "list" | "table";

export const SkillList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("skillViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("skillViewMode", mode);
  }, [mode]);

  const {
    data: groupedSkills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkillCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  const processedChapters = Object.entries(groupedSkills || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, skills]) => {
        const chapterSkills = skills as ICategory[];
        const chapterInfo = chapterSkills[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          skills: [...chapterSkills]
            .filter((skill) =>
              skill.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.skills.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <SkillModeSwitcher
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
          ({ chapterName, chapterDescription, skills }, index: number) => (
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
              {mode === "list" && <SkillListView skills={skills} />}
              {mode === "card" && <SkillCardView skills={skills} />}
              {mode === "table" && <SkillTableView skills={skills} />}
            </div>
          )
        )
      )}
    </div>
  );
};
