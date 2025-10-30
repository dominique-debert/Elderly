import { ETabKey } from "@/types";
import { Search, SwitchButtons } from "@/components";

type SwitchProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
  search: string;
  setSearch: (value: string) => void;
  activeTab: ETabKey;
};

export const CategoryModeSwitcher = ({
  mode,
  setMode,
  search,
  setSearch,
  activeTab,
}: SwitchProps) => {
  return (
    <div className="fixed w-full bg-(--root-bg) dark:bg-[#060e21] z-30 right-0 pr-8 pb-6 h-20 top-52 flex flex-wrap items-center justify-end gap-4 m-4">
      {/* Recherche */}
      <Search
        search={search}
        setSearch={setSearch}
        placeholder={`Rechercher...`}
      />

      {/* Boutons */}
      <SwitchButtons mode={mode} setMode={setMode} activeTab={activeTab} />
    </div>
  );
};
