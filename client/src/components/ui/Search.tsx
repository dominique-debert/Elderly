import { cn } from "@/lib";
import { XIcon, SearchIcon } from "lucide-react";

type SearchProps = {
  search: string;
  placeholder: string;
  className: string;
  setSearch: (value: string) => void;
};

export function Search({
  search,
  setSearch,
  placeholder,
  className,
}: SearchProps) {
  return (
    <label
      className={cn(
        "input input-primary bg-white dark:bg-card rounded-3xl focus:outline-none active:outline-none",
        className
      )}
    >
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
