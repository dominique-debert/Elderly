import { LayoutGridIcon, Grid2X2Icon, ListIcon } from "lucide-react";

type UsersSwitchProps = {
  mode: "card" | "list" | "table";
  setMode: (mode: "card" | "list" | "table") => void;
};

export function UsersSwitchButtons({ mode, setMode }: UsersSwitchProps) {
  return (
    <>
      <div className="join">
        <button
          onClick={() => setMode("card")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "card" ? "btn-primary" : ""
          }`}
        >
          <LayoutGridIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("list")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "list" ? "btn-primary" : ""
          }`}
        >
          <ListIcon className="size-5" />
        </button>
        <button
          onClick={() => setMode("table")}
          className={`btn btn-sm dark:border-slate-800 join-item bg-white dark:bg-transparent h-10 ${
            mode === "table" ? "btn-primary" : ""
          }`}
        >
          <Grid2X2Icon className="size-5" />
        </button>
      </div>
    </>
  );
}
