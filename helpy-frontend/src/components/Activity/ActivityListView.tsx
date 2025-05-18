import {ICategory} from '@/@types/ICategory'
import ActivityListItem from './ActivityListItem';

export function ActivityListView({ activities }: { activities: ICategory[] }) {
  return (
    <ul className="space-y-2 mt-10">
      {activities?.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity}/>
      ))}
    </ul>
  );
}
