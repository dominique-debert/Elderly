import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '../services/activityCategory';
import { useAuthStore } from '../stores/auth';
import { useCategoryModalStore } from '../stores/categoryModalStore';
import CategoryModal from '../components/CategoryModal';
import type { ICategory } from '../@types/ICategory';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiPlus } from '@mdi/js';
import { Navigate } from 'react-router-dom';

const CategoriesPage = () => {
  const { isAuthenticated } = useAuthStore();
  const { open: openModal } = useCategoryModalStore();

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['activityCategories'],
    queryFn: fetchActivityCategories,
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isLoading) return <div className="text-center mt-10">Chargement...</div>;
  if (isError) return <div className="text-center text-red-500 mt-10">Erreur lors du chargement.</div>;

  return (
    <div className="flex flex-col m-6 lg:ml-0 xs:ml-4 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-primary">Catégories d'activités</h1>
        <button onClick={openModal} className="btn btn-primary gap-2">
          <Icon path={mdiPlus} size={1} />
          Ajouter
        </button>
      </div>

      {/* Grid des catégories */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category: ICategory) => (
          <div key={category.id} className="card shadow-md bg-base-100">
            <div className="card-body relative">
              {/* Bouton dots vertical */}
              <div className="absolute top-2 right-2">
                <button className="btn btn-ghost btn-xs btn-secondary">
                  <Icon path={mdiDotsVertical} size={1} />
                </button>
              </div>

              <h2 className="card-title">{category.name}</h2>
              {category.description && <p className="text-sm">{category.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Modal d'ajout */}
      <CategoryModal />
    </div>
  );
};

export default CategoriesPage;
