import { deleteForumCategory } from "@/services";
import type { ICategory } from "@/types";
import { toast } from "react-hot-toast";

type ForumDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ForumDeleteModal({
  category,
  onClose,
  onConfirm,
}: ForumDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteForumCategory(category.id.toString());
      toast.success("Catégorie de forum supprimée");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer la catégorie de forum</h3>
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
