import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '../services/activityCategory';
import { useAuthStore } from '../store/auth';
import useCategoryModalStore from '../store/categoryModalStore';
import CategoryModal from '../components/CategoryModal';
import ICategory from '../@types/ICategory';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiPlus } from '@mdi/js';

const ActivityCategoriesPage = () => {
  const { isAuthenticated } = useAuthStore();
  const { open: openModal } = useCategoryModalStore();

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['activityCategories'],
    queryFn: fetchActivityCategories,
  });

  if (!isAuthenticated) {
    return <div className="text-center mt-10">Vous devez être connecté pour voir votre profil.</div>;
  }

  if (isLoading) return <div className="text-center mt-10">Chargement...</div>;
  if (isError) return <div className="text-center text-red-500 mt-10">Erreur lors du chargement.</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Catégories d'activités</h1>
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
                <button className="btn btn-ghost btn-xs">
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

export default ActivityCategoriesPage;
