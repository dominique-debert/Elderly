import { deleteWellnessCategory } from "@/services";
import type { ICategory } from "@/types";
import { toast } from "react-hot-toast";

type DeleteWellnessModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function DeleteWellnessModal({
  category,
  onClose,
  onConfirm,
}: DeleteWellnessModalProps) {
  const handleDelete = async () => {
    try {
      await deleteWellnessCategory(category.id.toLocaleString());
      toast.success("Catégorie de bien-être supprimée");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Supprimer la catégorie de bien-être
        </h3>
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
