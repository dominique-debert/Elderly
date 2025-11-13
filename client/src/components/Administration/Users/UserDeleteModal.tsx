import { deleteUser } from "@/services";
import type { IUser } from "@/types";
import { toast } from "react-hot-toast";

type UserDeleteModalProps = {
  user: IUser;
  onClose: () => void;
  onConfirm?: () => void;
};

export function UserDeleteModal({
  user,
  onClose,
  onConfirm,
}: UserDeleteModalProps) {
  const handleDelete = async () => {
    try {
      await deleteUser(user.id);
      toast.success("Utilisateur supprimé");
      onConfirm?.();
      onClose();
    } catch (error) {
      toast.error(`Erreur lors de la suppression: ${error}`);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white! dark:bg-card!">
        <h3 className="font-bold text-lg">Supprimer l'utilisateur</h3>
        <p className="py-4">
          Confirmer la suppression de{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>{" "}
          ({user.email}) ?
        </p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={handleDelete}>
            Supprimer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            Annuler
          </button>
        </div>
      </div>
    </dialog>
  );
}
