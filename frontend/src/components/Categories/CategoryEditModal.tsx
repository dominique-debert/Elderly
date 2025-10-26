import { useState } from "react";
import { updateCategory } from "@/services";
import type { ICategory } from "@/types";
import { toast } from "react-hot-toast";

type CategoryModalProps = {
  category: ICategory;
  onClose: () => void;
  onUpdated?: () => void;
};

export function CategoryEditModal({
  category,
  onClose,
  onUpdated,
}: CategoryModalProps) {
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [description, setDescription] = useState(category.description || "");

  const chapterName = category.categoryChapter?.chapterName || "Non défini";
  const typeName = category.categoryType?.name || "Non défini";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateCategory(category.id, {
        name: categoryName,
        description: description || undefined,
      });
      toast.success("Activité mise à jour");
      onClose();
      onUpdated?.();
    } catch (error: unknown) {
      toast.error(
        "Erreur lors de la mise à jour : " +
          (error instanceof Error ? error.message : "Inconnue")
      );
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white! dark:bg-card!">
        <h3 className="font-bold text-lg">Modifier l'activité</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <label className="text-sm -mb-2 mt-4">Nom</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="input input-bordered w-full bg-white dark:bg-card"
            required
          />

          <label className="text-sm -mb-2 mt-4">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full bg-white dark:bg-card"
          />

          <label className="text-sm -mb-2 mt-4">
            Chapitre (non modifiable)
          </label>
          <input
            type="text"
            value={chapterName}
            disabled
            className="input input-bordered w-full bg-gray-100 dark:bg-card"
          />

          <label className="text-sm -mb-2 mt-4">Type (non modifiable)</label>
          <input
            type="text"
            value={typeName}
            disabled
            className="input input-bordered w-full bg-gray-100"
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost hover:bg-red-600 hover:text-white"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
