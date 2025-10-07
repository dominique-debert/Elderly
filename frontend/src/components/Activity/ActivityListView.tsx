import {ICategory} from '@/@types/ICategory'
import ActivityListItem from './ActivityListItem';

type ActivityListViewProps = {
  activities: ICategory[];
};

export function ActivityListView({ activities }: ActivityListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {activities?.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity}/>
      ))}
    </ul>
  );
}
