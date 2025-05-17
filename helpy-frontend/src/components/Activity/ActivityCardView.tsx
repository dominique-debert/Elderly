import { ICategory } from '@/@types/ICategory';
import { ActivityCard } from './ActivityCard';

type ActivityCardViewProps = {
  activities: ICategory[];
};

export function ActivityCardView({ activities }: ActivityCardViewProps) {
  return (
    <div>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
