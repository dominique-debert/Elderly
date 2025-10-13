import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchServiceCategories } from "@/services";
import type { ICategory } from "@/types";

import {
  ServiceCardView,
  ServiceListView,
  ServiceModeSwitcher,
  ServiceTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function ServiceList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("serviceViewMode");
    return (savedMode as Mode) || "list";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("serviceViewMode", mode);
  }, [mode]);

  const {
    data: groupedServices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServiceCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // Process and sort the badges
  const processedChapters = Object.entries(groupedServices || {})
    .flatMap(([, chapters]) => {
      return Object.entries(chapters).map(([chapterId, services]) => {
        const chapterServices = services as ICategory[];
        const chapterInfo = chapterServices[0]?.categoryChapter || {
          chapterName: `${chapterId}`,
          chapterDescription: "",
        };

        return {
          chapterName: chapterInfo.chapterName,
          chapterDescription: chapterInfo.chapterDescription,
          services: [...chapterServices]
            .filter((service) =>
              service.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName)),
        };
      });
    })
    .filter((chapter) => chapter.services.length > 0)
    .sort((a, b) => a.chapterName.localeCompare(b.chapterName));

  return (
    <div className="w-full p-4">
      <ServiceModeSwitcher
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
              <div className="divider mt-0 mb-6"></div>
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
