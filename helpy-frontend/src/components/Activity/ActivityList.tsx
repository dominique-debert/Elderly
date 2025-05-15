import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '@/services/activityCategory.service';
// import { MoodListView } from './MoodListView';
// import { MoodTableView } from './MoodTableView';
// import { MoodListSwitcher } from './MoodListSwitcher';
// import { MoodCardView } from './MoodCardView';

type Mode = 'card' | 'list' | 'table';

export const ActivityList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    // Lecture initiale du localStorage
    const savedMode = localStorage.getItem('activityViewMode');
    return (savedMode as Mode) || 'card';
  });

  // Sauvegarde du mode dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('activityViewMode', mode);
  }, [mode]);

  const { data: activityCategories, isLoading, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full relative">
      {activityCategories && activityCategories.length > 0 ? (
        // <MoodListSwitcher mode={mode} setMode={setMode} />
        <div> 
          { activityCategories.map((activityCategory) => (
            // <MoodCard key={mood.id} mood={mood} />
            <div key={activityCategory.id}>{activityCategory.id}</div>
          ))}
        </div>
      ) : (
        <div>
          Aucune catégorie
        </div>
      )}
      {/* {mode === 'card' && <MoodCardView moods={moods || []} />}
      {mode === 'list' && <MoodListView moods={moods || []} />}
      {mode === 'table' && <MoodTableView moods={moods || []} />} */}
    </div>
  );
}
