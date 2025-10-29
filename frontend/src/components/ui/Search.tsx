import { XIcon, SearchIcon } from "lucide-react";

type SearchProps = {
  search: string;
  placeholder: string;
  setSearch: (value: string) => void;
};

export function Search({ search, setSearch, placeholder }: SearchProps) {
  return (
    <label className="input flex items-center gap-2 bg-white dark:bg-card rounded-lg">
      <SearchIcon className="text-slate-600 dark:text-slate-400 size-4" />
      <input
        type="search"
        placeholder={placeholder}
        className="grow dark:bg-card"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="cursor-pointer" onClick={() => setSearch("")}>
        <XIcon className="text-slate-600 dark:text-slate-400 size-4" />
      </button>
    </label>
  );
}
