import {ICategory} from '@/@types/ICategory'
import UrbanIssueListItem from './UrbanIssueListItem';

type UrbanIssueListViewProps = {
  urbanIssues: ICategory[];
};

export function UrbanIssueListView({ urbanIssues }: UrbanIssueListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {urbanIssues?.map((urbanIssue) => (
        <UrbanIssueListItem key={urbanIssue.id} urbanIssue={urbanIssue}/>
      ))}
    </ul>
  );
}
