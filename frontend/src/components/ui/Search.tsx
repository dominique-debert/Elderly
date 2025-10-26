import Icon from "@mdi/react";
import { mdiMagnify, mdiBackspaceOutline } from "@mdi/js";

type SearchProps = {
  search: string;
  placeholder: string;
  setSearch: (value: string) => void;
};

export function Search({ search, setSearch, placeholder }: SearchProps) {
  return (
    <label className="input flex items-center gap-2 bg-white dark:bg-card rounded-lg">
      <Icon
        path={mdiMagnify}
        size={0.8}
        className="text-slate-600 dark:text-slate-400"
      />
      <input
        type="search"
        placeholder={placeholder}
        className="grow dark:bg-card"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="cursor-pointer" onClick={() => setSearch("")}>
        <Icon
          path={mdiBackspaceOutline}
          size={0.8}
          className="text-slate-600 dark:text-slate-400"
        />
      </button>
    </label>
  );
}
