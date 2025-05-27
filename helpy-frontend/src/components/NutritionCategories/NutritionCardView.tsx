import type { ICategory } from '@/@types/ICategory';
import { NutritionCard } from './NutritionCard';

type NutritionCardViewProps = {
  nutritionCategories: ICategory[];
};

export function NutritionCardView({ nutritionCategories }: NutritionCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {nutritionCategories.map((nutritionCategory) => (
        <NutritionCard key={nutritionCategory.id} nutritionCategory={nutritionCategory} />
      ))}
    </div>
  );
}
