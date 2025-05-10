import { mdiDeleteOutline, mdiDotsVertical, mdiPencilOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { IMood } from '../../@types/IMood';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ConfirmDeleteMoodModal } from './ConfirmDeleteMoodModal';
import { MoodEditModal } from './MoodEditModal';

type MoodCardProps = {
  mood: IMood;
};

export function MoodCard({ mood }: MoodCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['moods'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['moods'] });
  };
return (
  <>
    <div
      className="rounded-lg p-4 pt-0 shadow-lg"
      style={{ borderLeft: `10px solid ${mood.color}`}}>
      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-xl font-semibold mb-2"> {mood.name}</p>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-xs btn-ghost w-auto mb-2">
            <Icon
              path={mdiDotsVertical}
              size={1}
            />
          </div>
          
          <ul
            tabIndex={0}
            className="menu dropdown-left-top dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md">
            <li>
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditOpen(true);
                }}              
              >
                <Icon
                  path={mdiPencilOutline}
                  size={0.8}
                />
                Modifier
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  setIsConfirmDeleteOpen(true);
                }}              
              >
                <Icon
                  path={mdiDeleteOutline}
                  size={0.8}
                  className="text-red-500"
                />              
                Supprimer
              </a>
            </li>
          </ul>
          
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {mood.valence} · intensité {mood.intensity}/5
      </p>
      {mood.description && <p className="mt-2">{mood.description}</p>}
    </div>
    {isEditOpen && (
      <MoodEditModal
        mood={mood}
        onClose={() => setIsEditOpen(false)}
        onUpdated={handleUpdated}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteMoodModal
        mood={mood}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={handleDeleted}
      />
    )}
  </>
  );
}
