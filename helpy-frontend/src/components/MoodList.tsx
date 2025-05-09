import { useQuery } from '@tanstack/react-query';
import { fetchMoods } from '../services/mood';
import MoodCard from './MoodCard';
import { useMoodDisplayStore } from '../stores/useMoodDisplayStore';
import Icon from '@mdi/react';
import { mdiViewGrid, mdiViewList, mdiTable, mdiCircle, mdiPencilOutline, mdiDeleteOutline } from '@mdi/js';

export default function MoodList() {
  const { data: moods, isLoading, isError } = useQuery({
    queryKey: ['mood'],
    queryFn: fetchMoods,
  });

  const { mode, setMode } = useMoodDisplayStore();

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4 join sticky top-2 z-40">
        <button
          onClick={() => setMode('card')}
          className={`btn btn-sm join-item ${mode === 'card' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiViewGrid} size={.7} />
        </button>
        <button
          onClick={() => setMode('list')}
          className={`btn btn-sm join-item ${mode === 'list' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiViewList} size={.7} />
        </button>
        <button
          onClick={() => setMode('table')}
          className={`btn btn-sm join-item ${mode === 'table' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiTable} size={.7} />
        </button>
      </div>

      {mode === 'card' && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moods?.map((mood) => <MoodCard key={mood.id} mood={mood} />)}
        </div>
      )}

      {mode === 'list' && (
        <ul className="space-y-2">
          {moods?.map((mood) => (
            <>
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
            </>
          ))}
        </ul>
      )}

      {mode === 'table' && (
        <table className="table w-full table-zebra">
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
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
