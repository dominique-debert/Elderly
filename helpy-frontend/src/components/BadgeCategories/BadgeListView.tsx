import {ICategory} from '@/@types/ICategory'
import BadgeListItem from './BadgeListItem';

type BadgeListViewProps = {
  badgeCategories: ICategory[];
};

export function BadgeListView({ badgeCategories }: BadgeListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {badgeCategories?.map((badgeCategory) => (
        <BadgeListItem key={ badgeCategory.id } badgeCategory={ badgeCategory }/>
      ))}
    </ul>
  );
}
