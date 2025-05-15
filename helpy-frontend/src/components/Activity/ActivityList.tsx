import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { ICategory } from '@/@types/ICategory';

import { fetchActivityCategories } from '@/services/activityCategory.service';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Mode = 'card' | 'list' | 'table';

export const ActivityList = () => {
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem('activityViewMode') as Mode) || 'card';
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('activityViewMode', mode);
  }, [mode]);

  const { data: groupedCategories, isLoading, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivityCategories,
  });

  if (isLoading) return <div className="text-center mt-40">Chargement...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Erreur de chargement</div>;

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Rechercher une catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {Object.entries(groupedCategories ?? {}).map(([chapterName, types]) => {
        // Fusionner tous les types (plus besoin de les séparer)
        const allCategories: ICategory[] = Object.values(types).flat() as ICategory[];

        // Filtrer selon la recherche
        const filtered = allCategories.filter((category) =>
          category.categoryName.toLowerCase().includes(search)
        );

        return (
          <div className="collapse collapse-arrow bg-base-200 mb-4" key={chapterName}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">{chapterName}</div>
            <div className="collapse-content">
              {filtered.length > 0 ? (
                <ul className="list-disc ml-6">
                  {filtered.map((category) => (
                    <li key={category.id} className="flex justify-between items-center my-1">
                      <span>{category.categoryName}</span>
                      <div className="flex gap-2">
                        <Button
                          className="cursor-pointer"
                          variant="outline"
                          size="sm"
                          onClick={() => alert('Modifier ' + category.id)}
                        >
                          Modifier
                        </Button>
                        <Button
                          className="cursor-pointer"
                          size="sm"
                          onClick={() => alert('Supprimer ' + category.id)}
                        >
                          Supprimer
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm italic text-gray-500">Aucune catégorie correspondante</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
