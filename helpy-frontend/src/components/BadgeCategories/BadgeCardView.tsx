import type { ICategory } from '@/@types/ICategory';
import { BadgeCard } from './BadgeCard';

type BadgeCardViewProps = {
  badgeCategories: ICategory[];
};

export function BadgeCardView({ badgeCategories }: BadgeCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {badgeCategories.map((badgeCategory) => (
        <BadgeCard key={badgeCategory.id} badgeCategory={badgeCategory} />
      ))}
    </div>
  );
}
