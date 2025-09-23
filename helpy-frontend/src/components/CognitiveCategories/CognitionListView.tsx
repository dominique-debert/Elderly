import {ICategory} from '@/@types/ICategory'
import CognitionListItem from './CognitionListItem';

type CognitionListViewProps = {
  cognitiveCategories: ICategory[];
};

export function CognitionListView({ cognitiveCategories }: CognitionListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {cognitiveCategories?.map((cognitiveCategory) => (
        <CognitionListItem key={ cognitiveCategory.id } cognitiveCategory={ cognitiveCategory }/>
      ))}
    </ul>
  );
}
