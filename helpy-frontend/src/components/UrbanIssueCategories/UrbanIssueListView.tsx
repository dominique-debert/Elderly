import {ICategory} from '@/@types/ICategory'
import UrbanIssueListItem from './UrbanIssueListItem';

type UrbanIssueListViewProps = {
  urbanIssueCategories: ICategory[];
};

export function UrbanIssueListView({ urbanIssueCategories }: UrbanIssueListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {urbanIssueCategories?.map((urbanIssueCategory) => (
        <UrbanIssueListItem key={ urbanIssueCategory.id } urbanIssueCategory={ urbanIssueCategory }/>
      ))}
    </ul>
  );
}
