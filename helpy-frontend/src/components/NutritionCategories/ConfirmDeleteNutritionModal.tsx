import type { ICategory } from '@/@types/ICategory';
import { deleteNutritionCategory } from '@/services/nutritionCategory.service'
import { toast } from 'react-hot-toast';

type ConfirmDeleteCategoryModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ConfirmDeleteNutritionModal({ category, onClose, onConfirm }: ConfirmDeleteCategoryModalProps) {
  const handleDelete = async () => {
    try {
      await deleteNutritionCategory(category.id.toLocaleString());
      toast.success('Catégorie de bien-être supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie de bien-être</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
