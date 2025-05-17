import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMoods } from '../../services/moods.service';
import { MoodListView } from './MoodListView';
import { MoodTableView } from './MoodTableView';
import { MoodListSwitcher } from './MoodListSwitcher';
import { MoodCardView } from './MoodCardView';
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

type Mode = 'card' | 'list' | 'table';

export const MoodList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    // Lecture initiale du localStorage
    const savedMode = localStorage.getItem('moodViewMode');
    return (savedMode as Mode) || 'card';
  });

  // Sauvegarde du mode dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('moodViewMode', mode);
  }, [mode]);

  const { data: moods, isLoading, isError } = useQuery({
    queryKey: ['moods'],
    queryFn: fetchMoods,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full relative">
      {moods && moods.length > 0 && (
        <MoodListSwitcher mode={mode} setMode={setMode} />
      )}

      <div className="mb-6">
        <label className="input">
          <Icon
            path={mdiMagnify}
            size={.8}
          />
          <input
            type="search"
            placeholder="Rechercher une humeur..."
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {mode === 'card' && <MoodCardView moods={moods || []} />}
      {mode === 'list' && <MoodListView moods={moods || []} />}
      {mode === 'table' && <MoodTableView moods={moods || []} />}

    </div>
  );
}
