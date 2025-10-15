import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  SkillCardView,
  SkillListView,
  CategoryModeSwitcher,
  SkillTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function SkillList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Skill + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Skill + "ViewMode", mode);
  }, [mode]);

  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Skill],
    queryFn: () => getCategories(ECategoryType.SKILL),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!skills || !Array.isArray(skills)) return [];

    // Filtrer par recherche
    const filtered = skills.filter((skill: ICategory) =>
      skill.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, skill: ICategory) => {
      const chapterId = skill.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(skill);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterSkills]) => {
        const firstSkill = chapterSkills[0];
        return {
          chapterName:
            firstSkill.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstSkill.categoryChapter?.chapterDescription || "",
          skills: chapterSkills.sort((a, b) =>
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
        activeTab={ETabKey.Skill}
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
          ({ chapterName, chapterDescription, skills }, index: number) => (
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
              {mode === "list" && <SkillListView skills={skills} />}
              {mode === "card" && <SkillCardView skills={skills} />}
              {mode === "table" && <SkillTableView skills={skills} />}
            </div>
          )
        )
      )}
    </div>
  );
}
