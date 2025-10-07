import { deleteSkillCategory } from "@/services/skillCategory.service";
import { toast } from "react-hot-toast";
import type { ICategory } from "@/@types";

type SkillDeleteModalProps = {
  category: ICategory;
  onClose: () => void;
  onConfirm?: () => void;
};

export function SkillDeleteModal({
  category,
  onClose,
  onConfirm,
}: SkillDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteSkillCategory(category.id.toLocaleString());
      toast.success("Catégorie de compétence supprimée");
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
