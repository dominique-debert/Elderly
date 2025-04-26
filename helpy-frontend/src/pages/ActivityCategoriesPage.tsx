import { useQuery } from '@tanstack/react-query';
import { fetchActivityCategories } from '../services/activityCategory';
import ICategory from '../@types/ICategory';
import { useAuthStore } from '../store/auth';
import { Icon } from '@mdi/react';
import { mdiPlus, mdiDotsVertical } from '@mdi/js';
import { useState } from 'react';

const ActivityCategoriesPage = () => {
  const { isAuthenticated } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['activityCategories'],
    queryFn: fetchActivityCategories,
  });

  const handleAddCategory = () => {
    // Implémenter la logique pour ajouter une catégorie
    console.log('Nouvelle catégorie ajoutée:', { name: newCategoryName, description: newCategoryDescription });
    setIsModalOpen(false);
  };

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  if (isLoading) return <div className="text-center mt-10">Chargement...</div>;
  if (isError) return <div className="text-center text-red-500 mt-10">Erreur lors du chargement.</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Catégories d'activités</h1>
        <button className="btn btn-primary flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
          <Icon path={mdiPlus} size={1} />
          Ajouter
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category: ICategory) => (
          <div key={category.id} className="card bg-base-100 shadow-md relative">
            <div className="absolute top-2 right-2">
              <button className="btn btn-ghost btn-sm">
                <Icon path={mdiDotsVertical} size={1} />
              </button>
            </div>
            <div className="card-body">
              <h2 className="card-title">{category.name}</h2>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour ajouter une nouvelle catégorie */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-2xl font-bold mb-4">Ajouter une nouvelle catégorie</h2>
              <div>
                <label className="block mb-2">Nom de la catégorie</label>
                <input
                  type="text"
                  className="input input-bordered w-full mb-4"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <label className="block mb-2">Description</label>
                <textarea
                  className="textarea textarea-bordered w-full mb-4"
                  value={newCategoryDescription}
                  onChange={(e) => setNewCategoryDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Annuler</button>
                <button className="btn btn-primary" onClick={handleAddCategory}>Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityCategoriesPage;
