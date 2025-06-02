import {ICategory} from '@/@types/ICategory'
import ForumListItem from './ForumListItem';

type ForumListViewProps = {
  forumCategories: ICategory[];
};

export function ForumListView({ forumCategories }: ForumListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {forumCategories?.map((forumCategory) => (
        <ForumListItem key={ forumCategory.id } forumCategory={ forumCategory }/>
      ))}
    </ul>
  );
}
