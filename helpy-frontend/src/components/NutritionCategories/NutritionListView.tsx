import {ICategory} from '@/@types/ICategory'
import NutritionListItem from './NutritionListItem';

type NutritionListViewProps = {
  nutritionCategories: ICategory[];
};

export function NutritionListView({ nutritionCategories }: NutritionListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {nutritionCategories?.map((nutritionCategory) => (
        <NutritionListItem key={ nutritionCategory.id } nutritionCategory={ nutritionCategory }/>
      ))}
    </ul>
  );
}
