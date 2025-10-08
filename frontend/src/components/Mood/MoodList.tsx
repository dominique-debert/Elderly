import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMoods } from "@/services";
import { MoodListView } from "./MoodListView";
import { MoodTableView } from "./MoodTableView";
import { MoodListSwitcher } from "./MoodListSwitcher";
import { MoodCardView } from "./MoodCardView";

type Mode = "card" | "list" | "table";

export const MoodList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("moodViewMode");
    return (savedMode as Mode) || "list";
  });

  useEffect(() => {
    localStorage.setItem("moodViewMode", mode);
  }, [mode]);

  const {
    data: moods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["moods"],
    queryFn: fetchMoods,
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
    <div className="w-full relative">
      {moods && moods.length > 0 && (
        <MoodListSwitcher
          mode={mode}
          setMode={setMode}
          search={search}
          setSearch={setSearch}
        />
      )}

      {mode === "card" && <MoodCardView moods={filteredMoods} />}
      {mode === "list" && <MoodListView moods={filteredMoods} />}
      {mode === "table" && <MoodTableView moods={filteredMoods} />}
    </div>
  );
};
