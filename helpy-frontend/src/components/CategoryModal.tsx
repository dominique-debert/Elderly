import { useState } from 'react';
import { useCategoryModalStore } from '../stores/categoryModalStore';
import { createActivityCategory } from '../services/activityCategory.service';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const CategoryModal = () => {
  const { isOpen, close } = useCategoryModalStore();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    try {
      const category = await createActivityCategory({ name, description });
      if (category) {
        await queryClient.invalidateQueries({ queryKey: ['activityCategories'] });
        toast.success('Catégorie créée avec succès ! 🎉');
        close();
        setName('');
        setDescription('');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la création de la catégorie ❌');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Ajouter une catégorie</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Nom</span>
          </label>
          <input
            type="text"
            placeholder="Nom de la catégorie"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-4">
          <button onClick={close} className="btn btn-ghost">
            Annuler
          </button>
          <button onClick={handleSubmit} className="btn btn-primary">
            Créer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
