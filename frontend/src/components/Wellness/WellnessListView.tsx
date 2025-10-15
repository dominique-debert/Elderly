import { ICategory } from "@/types";
import { WellnessListItem } from "./WellnessListItem";

type WellnessListViewProps = {
  wellnessCategories: ICategory[];
};

export function WellnessListView({
  wellnessCategories,
}: WellnessListViewProps) {
  return (
    <ul className="flex flex-col gap-2">
      {wellnessCategories.map((wellness) => (
        <WellnessListItem key={wellness.id} wellness={wellness} />
      ))}
    </ul>
  );
}
