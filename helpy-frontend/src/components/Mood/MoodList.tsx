import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMoods } from '../../services/mood.service'
import { MoodCard } from './MoodCard';
import { MoodListView } from './MoodListView';
import { MoodListTable } from './MoodListTable';
import { MoodListSwitcher } from './MoodListSwitcher';

export default function MoodList() {
  const [mode, setMode] = useState<'card' | 'list' | 'table'>('card');

  const { data: moods, isLoading, isError } = useQuery({
    queryKey: ['mood'],
    queryFn: fetchMoods,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full relative">
      <MoodListSwitcher mode={mode} setMode={setMode} />

      {mode === 'card' && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {moods?.map((mood) => <MoodCard key={mood.id} mood={mood} />)}
        </div>
      )}

      {mode === 'list' && <MoodListView moods={moods || []} />}
      {mode === 'table' && <MoodListTable moods={moods || []} />}
    </div>
  );
}
