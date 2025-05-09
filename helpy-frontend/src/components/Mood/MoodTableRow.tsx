import type { IMood } from '../../@types/IMood';
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiCircle, mdiDeleteOutline } from '@mdi/js';

export default function MoodTableRow({ mood }: { mood: IMood }) {
  return (
    <tr key={mood.id}>
      <td>
        <div className='flex gap-4'>
          <Icon path={mdiCircle} size={0.8} style={{ color: mood.color }} />
          {mood.name}
        </div>
      </td>
      <td>{mood.description}</td>
      <td>{mood.valence}</td>
      <td className='text-center'>{mood.intensity}/5</td>
      <td className='text-center'>{new Date(mood.createdAt).toLocaleDateString()}</td>
      <td className='text-center w-0'>
        <button className='btn btn-ghost'>
          <Icon path={mdiPencilOutline} size={0.8} className='text-gray-500' />
        </button>
      </td>
      <td className='text-center w-0'>
        <button className='btn btn-ghost'>
        <Icon path={mdiDeleteOutline} size={0.8} className='text-red-600' />
        </button>
      </td>
    </tr>
  );
}