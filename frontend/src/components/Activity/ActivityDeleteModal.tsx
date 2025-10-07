import type { ICategory } from '@/@types/ICategory';
import { deleteActivityCategory } from '@/services/activityCategory.service'
import { toast } from 'react-hot-toast';

type ActivityDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ActivityDeleteModal({ category, onClose, onConfirm }: ActivityDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteActivityCategory(category.id.toLocaleString());
      toast.success('Activité supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer l'activité</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
