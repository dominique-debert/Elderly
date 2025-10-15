import { ICategory } from "@/types";
import { WellnessCard } from "@/components";

type WellnessCardViewProps = {
  wellnessCategories: ICategory[];
};

export function WellnessCardView({
  wellnessCategories,
}: WellnessCardViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {wellnessCategories.map((wellness) => (
        <WellnessCard key={wellness.id} wellness={wellness} />
      ))}
    </div>
  );
}
