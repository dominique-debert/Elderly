import { Search, UsersSwitchButtons } from "@/components";

type UsersModeSwitcherProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
  search: string;
  setSearch: (value: string) => void;
};

export const UsersModeSwitcher = ({
  mode,
  setMode,
  search,
  setSearch,
}: UsersModeSwitcherProps) => {
  return (
    <div className="w-full bg-(--root-bg) dark:bg-transparent pb-6 flex items-center justify-between gap-4">
      {/* Recherche */}
      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Rechercher un utilisateur..."
      />

      {/* Boutons */}
      <UsersSwitchButtons mode={mode} setMode={setMode} />
    </div>
  );
};
