import type { ICategory } from '@/@types/ICategory';
import { deleteBadgeCategory } from '@/services/badgeCategory.service';
import { toast } from 'react-hot-toast';

type BadgeDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function BadgeDeleteModal({ category, onClose, onConfirm }: BadgeDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteBadgeCategory(category.id.toLocaleString());
      toast.success('Badge supprimé');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer le badge</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
