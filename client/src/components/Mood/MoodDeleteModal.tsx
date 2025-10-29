import type { IMood } from "@/types";
import { deleteMood } from "@/services";
import { toast } from "react-hot-toast";

type ConfirmDeleteMoodModalProps = {
  mood: IMood;
  onClose: () => void;
  onConfirm?: () => void;
};

export function MoodDeleteModal({
  mood,
  onClose,
  onConfirm,
}: ConfirmDeleteMoodModalProps) {
  const handleDelete = async () => {
    try {
      await deleteMood(mood.id.toLocaleString());
      toast.success("Humeur supprimée");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Supprimer l'humeur</h3>
        <p className="py-4">
          Confirmer la suppression de <strong>{mood.name}</strong> ?
        </p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={handleDelete}>
            Supprimer
          </button>
          <button className="btn" onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </dialog>
  );
}
