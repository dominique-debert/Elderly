import type { ICategory } from '@/@types/ICategory';
import { UrbanIssueCard } from './UrbanIssueCard';

type UrbanIssueCardViewProps = {
  urbanIssueCategories: ICategory[];
};

export function UrbanIssueCardView({ urbanIssueCategories }: UrbanIssueCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {urbanIssueCategories.map((urbanIssueCategory) => (
        <UrbanIssueCard key={urbanIssueCategory.id} urbanIssueCategory={urbanIssueCategory} />
      ))}
    </div>
  );
}
