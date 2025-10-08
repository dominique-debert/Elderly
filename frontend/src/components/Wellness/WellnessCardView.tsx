import { WellnessCard } from "./WellnessCard";
import type { ICategory } from "@/types";

type WellnessCardViewProps = {
  wellnessCategories: ICategory[];
};

export function WellnessCardView({
  wellnessCategories,
}: WellnessCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {wellnessCategories.map((wellnessCategory) => (
        <WellnessCard
          key={wellnessCategory.id}
          wellnessCategory={wellnessCategory}
        />
      ))}
    </div>
  );
}
