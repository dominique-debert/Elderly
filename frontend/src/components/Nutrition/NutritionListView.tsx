import {ICategory} from '@/@types/ICategory'
import NutritionListItem from './NutritionListItem';

type NutritionListViewProps = {
  nutritions: ICategory[];
};

export function NutritionListView({ nutritions }: NutritionListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {nutritions?.map((nutrition) => (
        <NutritionListItem key={nutrition.id} nutrition={nutrition}/>
      ))}
    </ul>
  );
}
  