import type { ICategory } from '@/@types/ICategory';
import { deleteProgramCategory } from "@/services/programCategory.service";
import { toast } from 'react-hot-toast';

type ConfirmDeleteCategoryModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ConfirmDeleteProgramModal({ category, onClose, onConfirm }: ConfirmDeleteCategoryModalProps) {
  const handleDelete = async () => {
    try {
      await deleteProgramCategory(category.id);
      toast.success('Catégorie de programme supprimée');
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie de programme</h3>
        <p className="py-4">Confirmer la suppression de <strong>{category.categoryName}</strong> ?</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>Supprimer</button>
          <button className="btn btn-ghost" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </dialog>
  );
}
