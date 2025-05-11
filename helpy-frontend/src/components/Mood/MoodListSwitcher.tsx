import Icon from '@mdi/react';
import { mdiViewGrid, mdiViewList, mdiTable, mdiPlus } from '@mdi/js';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { MoodCreateModal } from './MoodCreateModal';
import { IMood } from '../../@types/IMood';

type Props = {
  mode: 'card' | 'list' | 'table';
  setMode: (mode: 'card' | 'list' | 'table') => void;
  mood: IMood;
};

export function MoodListSwitcher({ mode, setMode, mood }: Props) {
  
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const queryClient = useQueryClient();
  
  const handleCreated = () => {
    setIsCreateOpen(false);
    queryClient.invalidateQueries({ queryKey: ['moods'] });
  };
  
  return (
    <>
      <div className="flex justify-end mb-4 join sticky top-2 z-40">
        <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCreateOpen(true);
            }}   
            className={`btn btn-sm join-item ${mode === 'card' ? 'btn-primary' : 'btn-outline'}`}
          >
            <Icon path={mdiPlus} size={1} />
        </button>
        <button
          onClick={() => setMode('card')}
          className={`btn btn-sm join-item ${mode === 'card' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiViewGrid} size={1} />
        </button>
        <button
          onClick={() => setMode('list')}
          className={`btn btn-sm join-item ${mode === 'list' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiViewList} size={1} />
        </button>
        <button
          onClick={() => setMode('table')}
          className={`btn btn-sm join-item ${mode === 'table' ? 'btn-primary' : 'btn-outline'}`}
        >
          <Icon path={mdiTable} size={1} />
        </button>
      </div>
          {isCreateOpen && (
            <MoodCreateModal
              mood={mood}
              onClose={() => setIsCreateOpen(false)}
              onCreated={handleCreated}
            />
          )}
    </>
  );
}
