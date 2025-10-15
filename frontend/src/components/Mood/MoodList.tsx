import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMoods } from "@/services";

import {
  CategoryModeSwitcher,
  MoodCardView,
  MoodListView,
  MoodTableView,
} from "@/components";
import { ETabKey } from "@/types";

type Mode = "card" | "list" | "table";

export function MoodList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(ETabKey.Mood + "ViewMode");
    return (savedMode as Mode) || "list";
  });

  useEffect(() => {
    localStorage.setItem(ETabKey.Mood + "ViewMode", mode);
  }, [mode]);

  const {
    data: moods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [ETabKey.Mood],
    queryFn: getMoods,
  });

  const [search, setSearch] = useState<string>("");

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Erreur de chargement</div>
    );

  // 🔍 Filtrage local des humeurs
  const filteredMoods =
    moods?.filter((mood) =>
      mood.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="w-full p-4">
      {moods && moods.length > 0 && (
        <CategoryModeSwitcher
          mode={mode}
          setMode={setMode}
          search={search}
          setSearch={setSearch}
          activeTab={ETabKey.Mood}
        />
      )}

      {mode === "card" && <MoodCardView moods={filteredMoods} />}
      {mode === "list" && <MoodListView moods={filteredMoods} />}
      {mode === "table" && <MoodTableView moods={filteredMoods} />}
    </div>
  );
}
