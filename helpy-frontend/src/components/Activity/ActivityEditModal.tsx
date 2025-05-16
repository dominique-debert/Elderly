import { useState } from 'react';
import { updateActivityCategory } from '@/services/activityCategory.service';
import { toast } from 'react-hot-toast';
import { ICategory } from "@/@types/ICategory";
import { ECategoryType } from "@/@types/ECategory";

type ActivityModalProps = {
  activity: ICategory;
  onClose: () => void;
  onUpdated?: () => void;
};

export function ActivityModal({ activity, onClose, onUpdated }: ActivityModalProps) {
  const [form, setForm] = useState({
    name: activity.categoryName,
    description: activity.description,
    typeId: ECategoryType.ACTIVITY,
    chapterId: activity.chapterId,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateActivityCategory(activity.id.toString(), form);
      toast.success('Activité mise à jour');
      onClose();
      onUpdated?.(); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Erreur lors de la mise à jour : ${error.message}`);
      } else {
        toast.error('Erreur lors de la mise à jour : Une erreur inconnue est survenue');
      }
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Modifier l'humeur</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-full">

          <label className="text-sm -mb-2 mt-4" htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Nom"
            required
          />
          
          <label className="text-sm -mb-2 mt-4" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">Enregistrer</button>
            <button type="button" className="btn" onClick={onClose}>Annuler</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
