import type { ICategory } from '@/@types/ICategory';
import { deleteResourceCategory } from "@/services/resourceCategory.service";
import { toast } from 'react-hot-toast';

type ConfirmDeleteCategoryModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ConfirmDeleteResourceModal({ category, onClose, onConfirm }: ConfirmDeleteCategoryModalProps) {
  const handleDelete = async () => {
    try {
      await deleteResourceCategory(category.id);
      toast.success('Catégorie de ressource supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie de ressource</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog> 
  );
}
