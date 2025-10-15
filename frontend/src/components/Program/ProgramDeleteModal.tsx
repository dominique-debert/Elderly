import type { ICategory } from "@/types";
import { deleteProgramCategory } from "@/services";
import { toast } from "react-hot-toast";

type ProgramDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function ProgramDeleteModal({
  category,
  onClose,
  onConfirm,
}: ProgramDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteProgramCategory(category.id.toLocaleString());
      toast.success("Catégorie de programme supprimée");
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
          Supprimer la catégorie de programme
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
