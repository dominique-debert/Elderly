import type { ICategory } from "@/types";
import { NutritionCard } from "@/components";

type NutritionCardViewProps = {
  nutritions: ICategory[];
};

export function NutritionCardView({ nutritions }: NutritionCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {nutritions.map((nutrition) => (
        <NutritionCard key={nutrition.id} nutrition={nutrition} />
      ))}
    </div>
  );
}
