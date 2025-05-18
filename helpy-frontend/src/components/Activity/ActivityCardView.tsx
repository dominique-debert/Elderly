import { ICategory } from '@/@types/ICategory';
import { ActivityCard } from './ActivityCard';

type ActivityCardViewProps = {
  activities: ICategory[];
};

export function ActivityCardView({ activities }: ActivityCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
