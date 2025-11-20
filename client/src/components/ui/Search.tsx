import { XIcon, SearchIcon } from "lucide-react";

type SearchProps = {
  search: string;
  placeholder: string;
  setSearch: (value: string) => void;
};

export function Search({ search, setSearch, placeholder }: SearchProps) {
  return (
    <label className="input invisible md:visible md:w-100 rounded-3xl pl-4 pr-4 py-2.5 text-sm border border-slate-200 dark:border-gray-700  bg-white dark:bg-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
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
