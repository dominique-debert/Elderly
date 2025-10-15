import { deleteCategory } from "@/services";
import type { ICategory } from "@/types";
import { toast } from "react-hot-toast";

type CategoryDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function CategoryDeleteModal({
  category,
  onClose,
  onConfirm,
}: CategoryDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteCategory(category.id);
      toast.success("Catégorie supprimée");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie</h3>
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
