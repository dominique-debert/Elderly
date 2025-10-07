import { deleteNutritionCategory } from "@/services/nutritionCategory.service";
import { toast } from "react-hot-toast";
import type { ICategory } from "@/@types";

type NutritionDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function NutritionDeleteModal({
  category,
  onClose,
  onConfirm,
}: NutritionDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteNutritionCategory(category.id.toLocaleString());
      toast.success("Catégorie nutrition supprimée");
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
          Supprimer la catégorie de nutrition
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
