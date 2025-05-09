import { IMood } from '../../@types/IMood'
import MoodTableRow from "./MoodTableRow";

export function MoodTableView({ moods }: { moods: IMood[] }) {   
  return (
  <table className="table w-full table-zebra mt-10">
    <thead className='text-semibold'>
      <tr>
        <th>Titre</th>
        <th>Description</th>
        <th>Valence</th>
        <th className='text-center'>Intensité</th>
        <th className='text-center'>Date de création</th>
      </tr>
    </thead>
    <tbody>
      {moods?.map((mood) => (
        <MoodTableRow key={mood.id} mood={mood}/>
      ))}
    </tbody>
  </table>
  );
}