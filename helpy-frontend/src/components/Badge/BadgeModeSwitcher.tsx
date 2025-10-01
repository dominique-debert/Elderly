import Icon from '@mdi/react';
import { mdiViewGrid, mdiViewList, mdiTable, mdiPlus, mdiMagnify, mdiClose } from '@mdi/js';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { BadgeCreateModal } from './BadgeCreateModal';

type SwitchProps = {
  mode: 'card' | 'list' | 'table';
  setMode: (mode: 'card' | 'list' | 'table') => void;
  search: string;
  setSearch: (value: string) => void;
};

export function BadgeModeSwitcher({ mode, setMode, search, setSearch }: SwitchProps) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleCreated = () => {
    setIsCreateOpen(false);
    queryClient.invalidateQueries({ queryKey: ['badges'] });
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-end gap-4 mb-4 sticky top-2 z-40">
        {/* Recherche */}
        <label className="input flex items-center gap-2">
          <Icon path={mdiMagnify} size={0.8} />
          <input
            type="search"
            placeholder="Rechercher un badge..."
            className="grow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="cursor-pointer"
            onClick={() => setSearch('')}
          >
            <Icon path={mdiClose} size={0.8} />
          </button>
        </label>

        {/* Boutons */}
        <div className="join">
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
      </div>

      {isCreateOpen && (
        <BadgeCreateModal
          onClose={() => setIsCreateOpen(false)}
          onCreated={handleCreated}
        />
      )}
    </>
  );
}
