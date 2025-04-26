import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteActivityCategory } from '../services/activityCategory';
import { useCategoryStore } from '../stores/categoryStore';
import toast from 'react-hot-toast';

const DeleteCategoryModal = () => {
  const { selectedCategory, isDeleteModalOpen, closeDeleteModal } = useCategoryStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteActivityCategory(id),
    onSuccess: () => {
      toast.success('Catégorie supprimée');
      queryClient.invalidateQueries({ queryKey: ['activityCategories'] });
      closeDeleteModal();
    },
    onError: () => {
      toast.error('Erreur lors de la suppression');
    },
  });

  if (!isDeleteModalOpen || !selectedCategory) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Supprimer cette catégorie ?</h2>
        <p className="mb-6">{selectedCategory.name}</p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-ghost" onClick={closeDeleteModal}>Annuler</button>
          <button
            className="btn btn-error"
            onClick={() => selectedCategory.id && mutate(selectedCategory.id)}
            disabled={isPending}
          >
            {isPending ? 'Suppression...' : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
