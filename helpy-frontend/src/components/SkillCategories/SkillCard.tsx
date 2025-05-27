import { mdiDeleteOutline, mdiPencilOutline } from '@mdi/js';
import Icon from '@mdi/react';
import type { ICategory } from '@/@types/ICategory';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ConfirmDeleteSkillModal } from "./ConfirmDeleteSkillModal";
import { SkillEditModal } from './SkillEditModal';

type SkillCardProps = {
  skillCategory: ICategory;
};

export function SkillCard({ skillCategory }: SkillCardProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdated = () => {
    setIsEditOpen(false);
    queryClient.invalidateQueries({ queryKey: ['skills'] });
  };

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['skills'] });
  };
  
return (
  <>
    <div
      className="card rounded-lg pt-0 shadow-lg h-full">
        <div className="card-body">
      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-xl font-semibold mb-2"> {skillCategory.categoryName}</p>
      </div>
      <div className="text-sm text-gray-600">
        {skillCategory.description && <p className="mt-2">{skillCategory.description}</p>}
      </div>
      <div className="divider"></div>
      <div className="justify-end card-actions">
          <button className="btn btn-primary"
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
          </button>
          <button className="btn btn-outline"
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
          </button>
        </div>
    </div>
    {isEditOpen && (
      <SkillEditModal
        category={skillCategory}
        onClose={() => setIsEditOpen(false)}
        onUpdated={handleUpdated}
      />
    )}

    {isConfirmDeleteOpen && (
      <ConfirmDeleteSkillModal
        category={skillCategory}
        onClose={() => setIsConfirmDeleteOpen(false)}
        onConfirm={handleDeleted}
      />
    )}
    </div>
  </>
  );
}
