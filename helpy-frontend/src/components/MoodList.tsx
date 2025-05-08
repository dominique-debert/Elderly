import { useQuery } from '@tanstack/react-query';
import type { IMood } from '../@types/IMood';
import { fetchMoods } from '../services/mood';
import MoodCard from './MoodCard';

export default function MoodList() {
  const { data: moods, isLoading, isError } = useQuery({
    queryKey: ['mood'],
    queryFn: fetchMoods,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {moods?.map((mood: IMood) => (
        <MoodCard key={mood.id} mood={mood} />
      ))}
    </div>
  );
}
