import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '../services/activityCategory';
import ICategory from '../@types/ICategory';
import { useAuthStore } from '../store/auth';

const ActivityCategoriesPage = () => {

  const { isAuthenticated } = useAuthStore();

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['activityCategories'],
    queryFn: fetchActivityCategories,
  });

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  if (isLoading) return <div className="text-center mt-10">Chargement...</div>;
  if (isError) return <div className="text-center text-red-500 mt-10">Erreur lors du chargement.</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Catégories d'activités</h1>

      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category: ICategory) => (
          <div key={category.id} className="card shadow-md bg-base-100">
            <div className="card-body">
              <h2 className="card-title">{category.name}</h2>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCategoriesPage;
