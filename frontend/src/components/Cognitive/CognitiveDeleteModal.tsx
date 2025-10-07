import { deleteCognitiveCategory } from "@/services/cognitiveCategory.service";
import { toast } from "react-hot-toast";
import type { ICategory } from "@/@types";

type CognitiveDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function CognitiveDeleteModal({
  category,
  onClose,
  onConfirm,
}: CognitiveDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteCognitiveCategory(category.id.toLocaleString());
      toast.success("Catégorie cognitive supprimée");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie cognitive</h3>
        <p className="py-4">
          Confirmer la suppression de <strong>{category.categoryName}</strong> ?
        </p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleDelete}>
            Supprimer
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </dialog>
  );
}
