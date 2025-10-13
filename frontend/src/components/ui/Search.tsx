import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";

type SearchProps = {
  search: string;
  placeholder: string;
  setSearch: (value: string) => void;
};

export function Search({ search, setSearch, placeholder }: SearchProps) {
  return (
    <label className="input flex items-center gap-2 dark:bg-card rounded-lg">
      <Icon path={mdiMagnify} size={0.8} />
      <input
        type="search"
        placeholder={placeholder}
        className="grow"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="cursor-pointer" onClick={() => setSearch("")}>
        <Icon path={mdiClose} size={0.8} />
      </button>
    </label>
  );
}
