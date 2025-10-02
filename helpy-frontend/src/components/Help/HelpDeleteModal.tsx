import type { ICategory } from '@/@types/ICategory';
import { deleteHelpCategory } from '@/services/helpCategory.service';
import { toast } from 'react-hot-toast';

type HelpDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function HelpDeleteModal({ category, onClose, onConfirm }: HelpDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteHelpCategory(category.id.toLocaleString());
      toast.success('Catégorie d\'aide supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie d'aide</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
