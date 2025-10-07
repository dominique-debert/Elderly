import { ForumCard } from "./ForumCard";
import type { ICategory } from "@/@types";

type ForumCardViewProps = {
  forums: ICategory[];
};

export function ForumCardView({ forums }: ForumCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {forums.map((forum) => (
        <ForumCard key={forum.id} forum={forum} />
      ))}
    </div>
  );
}
