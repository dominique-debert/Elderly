import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {IMood} from '../../@types/IMood'

export function MoodListView({ moods }: { moods: IMood[] }) {
  return (
    <ul className="space-y-2 mt-20">
      {moods?.map((mood) => (
      <li key={mood.id} className="border p-4 rounded border-gray-300" style={{ borderLeft: `4px solid ${mood.color}`}}>
        <div className='flex gap-15'>
          <span className='w-48'>
            {mood.name}
          </span>
          <span className='w-80'>
            {mood.description}
          </span>
          <span className='w-48 text-center'>
            {mood.valence}
          </span>
          <span className='w-24'>
            {mood.intensity}/5
          </span>
          <span className='w-48'>
            {new Date(mood.createdAt).toLocaleDateString()}
          </span>
          <span className='flex justify-end gap-8 w-100 mr-4'>
              <Icon path={mdiPencilOutline} size={0.8} className='text-gray-500' />
              <Icon path={mdiDeleteOutline} size={0.8} className='text-red-600' />
          </span>
        </div>
      </li>
      ))}
    </ul>
  );
}
