import { ICategory } from "@/types/ICategory";
import WellnessListItem from "./WellnessListItem";

type WellnessListViewProps = {
  wellnessCategories: ICategory[];
};

export function WellnessListView({
  wellnessCategories,
}: WellnessListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {wellnessCategories?.map((wellnessCategory) => (
        <WellnessListItem
          key={wellnessCategory.id}
          wellnessCategory={wellnessCategory}
        />
      ))}
    </ul>
  );
}
