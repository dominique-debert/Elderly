import { XIcon, SearchIcon } from "lucide-react";

type SearchProps = {
  search: string;
  placeholder: string;
  setSearch: (value: string) => void;
};

export function Search({ search, setSearch, placeholder }: SearchProps) {
  return (
    <label className="input w-150 pl-4 pr-4 flex items-center gap-2 focus-visible:border-0 bg-white dark:bg-transparent rounded-3xl">
      <SearchIcon className="text-slate-600 dark:text-slate-400 size-4 mr-2" />
      <input
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="cursor-pointer" onClick={() => setSearch("")}>
        <XIcon className="text-slate-600 dark:text-slate-400 size-4" />
      </button>
    </label>
  );
}
