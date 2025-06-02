import type { ICategory } from '@/@types/ICategory';
import { ForumCard } from './ForumCard';

type ForumCardViewProps = {
  forumCategories: ICategory[];
};

export function ForumCardView({ forumCategories }: ForumCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {forumCategories.map((forumCategory) => (
        <ForumCard key={forumCategory.id} forumCategory={forumCategory} />
      ))}
    </div>
  );
}
