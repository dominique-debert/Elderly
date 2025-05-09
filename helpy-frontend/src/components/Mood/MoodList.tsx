import { useQuery } from '@tanstack/react-query';
import { useMoodDisplayStore } from '../../stores/Mood/useMoodDisplayStore'
import { MoodCard } from './MoodCard';
import { MoodListView } from './MoodListView';
import { MoodListTable } from './MoodListTable';
import { MoodListSwitcher } from './MoodListSwitcher';
import { fetchMoods } from '../../services/mood';

export default function MoodList() {
  const { data: moods, isLoading, isError } = useQuery({
    queryKey: ['mood'],
    queryFn: fetchMoods,
  });

  const { mode } = useMoodDisplayStore();

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full relative">
      <MoodListSwitcher />
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
