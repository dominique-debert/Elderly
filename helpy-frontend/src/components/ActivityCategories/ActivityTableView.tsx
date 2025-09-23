import type { ICategory } from '@/@types/ICategory'
import ActivityTableRow from "./ActivityTableRow";

export function ActivityTableView({ activities }: { activities: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {activities?.map((activity) => (
          <ActivityTableRow key={activity.id} activity={activity}/>
        ))}
      </tbody>
    </table>
  );
}