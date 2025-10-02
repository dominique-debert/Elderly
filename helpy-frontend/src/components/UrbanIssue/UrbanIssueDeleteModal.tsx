import type { ICategory } from '@/@types/ICategory';
import { deleteUrbanIssueCategory } from '@/services/urbanIssueCategory.service';
import { toast } from 'react-hot-toast';

type UrbanIssueDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function UrbanIssueDeleteModal({ category, onClose, onConfirm }: UrbanIssueDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteUrbanIssueCategory(category.id.toLocaleString());
      toast.success('Catégorie d\'incident urbain supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie d'incident urbain</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
