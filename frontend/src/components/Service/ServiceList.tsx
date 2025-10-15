import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services";
import { ECategoryType, ETabKey, type ICategory } from "@/types";

import {
  ServiceCardView,
  ServiceListView,
  CategoryModeSwitcher,
  ServiceTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ServiceList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Service + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(ETabKey.Service + "ViewMode", mode);
  }, [mode]);

  const {
    data: services,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Service],
    queryFn: () => getCategories(ECategoryType.SERVICE),
  });

  // Grouper un tableau plat par chapitre
  const processedChapters = (() => {
    if (!services || !Array.isArray(services)) return [];

    // Filtrer par recherche
    const filtered = services.filter((service: ICategory) =>
      service.categoryName?.toLowerCase().includes(search.toLowerCase())
    );

    // Grouper par chapterId
    const grouped = filtered.reduce((acc, service: ICategory) => {
      const chapterId = service.chapterId || 0;
      if (!acc[chapterId]) {
        acc[chapterId] = [];
      }
      acc[chapterId].push(service);
      return acc;
    }, {} as Record<number, ICategory[]>);

    // Transformer en tableau de chapitres
    return Object.entries(grouped)
      .map(([, chapterServices]) => {
        const firstService = chapterServices[0];
        return {
          chapterName:
            firstService.categoryChapter?.chapterName || "Sans chapitre",
          chapterDescription:
            firstService.categoryChapter?.chapterDescription || "",
          services: chapterServices.sort((a, b) =>
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
        activeTab={ETabKey.Service}
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
          ({ chapterName, chapterDescription, services }, index: number) => (
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
              {mode === "list" && <ServiceListView services={services} />}
              {mode === "card" && <ServiceCardView services={services} />}
              {mode === "table" && <ServiceTableView services={services} />}
            </div>
          )
        )
      )}
    </div>
  );
}
