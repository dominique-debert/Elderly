import type { ICategory } from '@/@types/ICategory';
import { CognitionCard } from './CognitionCard';

type CognitionCardViewProps = {
  cognitiveCategories: ICategory[];
};

export function CognitionCardView({ cognitiveCategories }: CognitionCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {cognitiveCategories.map((cognitiveCategory) => (
        <CognitionCard key={cognitiveCategory.id} cognitiveCategory={cognitiveCategory} />
      ))}
    </div>
  );
}
