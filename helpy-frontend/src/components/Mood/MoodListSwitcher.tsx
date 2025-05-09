import Icon from '@mdi/react';
import { mdiViewGrid, mdiViewList, mdiTable } from '@mdi/js';
import { useMoodDisplayStore } from '../../stores/Mood/useMoodDisplayStore'

export function MoodListSwitcher() {
  const { mode, setMode } = useMoodDisplayStore();

  return (
    <div className="flex justify-end mb-4 join sticky top-2 z-40">
      <button
        onClick={() => setMode('card')}
        className={`btn btn-sm ${mode === 'card' ? 'btn-primary' : 'btn-outline'}`}
      >
        <Icon path={mdiViewGrid} size={1} />
      </button>
      <button
        onClick={() => setMode('list')}
        className={`btn btn-sm ${mode === 'list' ? 'btn-primary' : 'btn-outline'}`}
      >
        <Icon path={mdiViewList} size={1} />
      </button>
      <button
        onClick={() => setMode('table')}
        className={`btn btn-sm ${mode === 'table' ? 'btn-primary' : 'btn-outline'}`}
      >
        <Icon path={mdiTable} size={1} />
      </button>
    </div>
  );
}
