import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateActivityCategory } from '../services/activityCategory';
import { useCategoryStore } from '../stores/categoryStore';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const UpdateCategoryModal = () => {
  const { selectedCategory, isUpdateModalOpen, closeUpdateModal } = useCategoryStore();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
      setDescription(selectedCategory.description ?? '');
    }
  }, [selectedCategory]);

  const { mutate, isPending } = useMutation({
    mutationFn: (updatedData: { name: string; description?: string }) => {
      if (!selectedCategory) throw new Error('Aucune catégorie sélectionnée.');
      if (!selectedCategory.id) throw new Error('L\'ID de la catégorie est manquant.');
      return updateActivityCategory(selectedCategory.id, updatedData);
    },
    onSuccess: () => {
      toast.success('Catégorie mise à jour');
      queryClient.invalidateQueries({ queryKey: ['activityCategories'] });
      closeUpdateModal();
    },
    onError: () => {
      toast.error('Erreur lors de la mise à jour');
    },
  });

  if (!isUpdateModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Modifier la catégorie</h2>
        <input
          className="input input-bordered w-full mb-4"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button className="btn btn-ghost" onClick={closeUpdateModal}>Annuler</button>
          <button
            className="btn btn-primary"
            onClick={() => mutate({ name, description })}
            disabled={isPending}
          >
            {isPending ? 'En cours...' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryModal;
