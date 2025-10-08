import { ICategory } from "@/types/ICategory";
import ForumListItem from "./ForumListItem";

type ForumListViewProps = {
  forums: ICategory[];
};

export function ForumListView({ forums }: ForumListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {forums?.map((forum) => (
        <ForumListItem key={forum.id} forum={forum} />
      ))}
    </ul>
  );
}
