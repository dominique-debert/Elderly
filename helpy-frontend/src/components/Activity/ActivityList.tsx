import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchActivityCategories } from '@/services/activityCategory.service';
import type { ICategory } from '@/@types/ICategory';
import { Icon } from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline, mdiMagnify } from "@mdi/js";
import { ConfirmDeleteActivityModal } from "./ConfirmDeleteActivityModal";
type Mode = 'card' | 'list' | 'table';

export const ActivityList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem('activityViewMode') as Mode) || 'card';
  });

  const [search, setSearch] = useState('');
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<ICategory | null>(null);

  const queryClient = useQueryClient();

  const handleDeleted = () => {
    setIsConfirmDeleteOpen(false);
    queryClient.invalidateQueries({ queryKey: ['activities'] });
  };

  useEffect(() => {
    localStorage.setItem('activityViewMode', mode);
  }, [mode]);

  const { data: groupedCategories, isLoading, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  // Préparation : filtrer les chapitres avec des résultats
  const filteredChapters = Object.entries(groupedCategories ?? {}).filter(([_, types]) => {
    const allCategories = Object.values(types).flat() as ICategory[];
    return allCategories.some((cat) =>
      cat.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <label className="input">
          <Icon
            path={mdiMagnify}
            size={.8}
          />
          <input
            type="search"
            placeholder="Rechercher une catégorie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center text-gray-500 italic">Aucun résultat ne correspond à la recherche.</div>
      )}

      {filteredChapters.map(([chapterName, types]) => {
        const allCategories = Object.values(types).flat() as ICategory[];
        const filtered = allCategories.filter((category) =>

        category.categoryName.toLowerCase().includes(search.toLowerCase())
      );

      return (
        <>
          <div className="text-xl font-semibold mt-12" key={chapterName}>{chapterName}</div>
          <div className="divider mt-0"></div>

          <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
          {filtered.map((category) => (
            <div key={category.id} className="card w-full bg-base-100 card-xs shadow-lg">
              <div className="card-body p-4">
                <h2 className="text-xl card-title">{category.categoryName}</h2>
                
                <p className="text-sm">{category.description}</p>
                <div className="divider"></div>
                  <div className="justify-end card-actions">
                    <button className="btn btn-primary"
                      onClick={() => console.log('Modifier', category.id)}
                    >
                    <Icon
                      path={mdiPencilOutline}
                      size={0.8}
                    />                          
                    Modifier
                  </button>
                  <button className="btn btn-ghost bg-base-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCategoryToDelete(category);
                      setIsConfirmDeleteOpen(true);
                    }}      
                  >
                    <Icon
                      path={mdiDeleteOutline}
                      size={0.8}
                    />    
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
          {isConfirmDeleteOpen && categoryToDelete && (
            <ConfirmDeleteActivityModal
              category={categoryToDelete}
              onClose={() => setIsConfirmDeleteOpen(false)}
              onConfirm={handleDeleted}
            />
          )}
          </div>
        </>
      );
    })}
    </div>
  );
};
