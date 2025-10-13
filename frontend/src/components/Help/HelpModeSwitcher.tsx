import { ETabKey } from "@/types";
import { Search, SwitchButtons } from "@/components";

type SwitchProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
  search: string;
  setSearch: (value: string) => void;
};

export const HelpModeSwitcher = ({
  mode,
  setMode,
  search,
  setSearch,
}: SwitchProps) => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-4 mb-4 sticky top-2 z-40">
      {/* Recherche */}
      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Rechercher une catégorie d'aide..."
      />

      {/* Boutons */}
      <SwitchButtons mode={mode} setMode={setMode} activeTab={ETabKey.Help} />
    </div>
  );
};
