import { useEffect, useState } from 'react';
import { useCategoryModalStore } from '@/stores/categoryModalStore';
import { createActivityCategory } from '@/services/activityCategory.service';
import toast from 'react-hot-toast';
import { getCategoryChapters, getCategoryTypes } from '@/services/categoryMeta.service';
import { IChapter } from "@/@types/IChapter";
import { ICategoryType } from "@/@types/ICategoryType";

type ActivityCreateModalProps = {
  onClose: () => void;
  onCreated: () => void;
};

export const ActivityCreateModal: React.FC<ActivityCreateModalProps> = ({ onClose, onCreated }) => {
  const { isOpen, close } = useCategoryModalStore();

  const [form, setForm] = useState({
    categoryName: '',
    description: '',
    chapterId: '',
    typeId: '',
  });

  const [chapters, setChapters] = useState<IChapter[]>([]);
  const [types, setTypes] = useState<ICategoryType[]>([]);

  useEffect(() => {
    getCategoryChapters().then(setChapters).catch(() => toast.error("Erreur lors du chargement des chapitres"));
    getCategoryTypes().then(setTypes).catch(() => toast.error("Erreur lors du chargement des types"));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createActivityCategory({
        ...form,
        chapterId: Number(form.chapterId),
        typeId: Number(form.typeId),
      });
      toast.success('Catégorie créée');
      onClose();
      onCreated?.(); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Erreur lors de la création : ${error.message}`);
      } else {
        toast.error('Erreur lors de la création : Une erreur inconnue est survenue');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Ajouter une activité</h2>
        
        <div className="form-control mb-4">
          <label className="label"><span className="label-text">Nom</span></label>
          <input
            type="text"
            name="categoryName"
            placeholder="Nom de la catégorie"
            className="input input-bordered"
            value={form.categoryName}
            onChange={handleChange}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label"><span className="label-text">Description</span></label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label"><span className="label-text">Chapitre</span></label>
          <select
            name="chapterId"
            className="select select-bordered"
            value={form.chapterId}
            onChange={handleChange}
          >
            {chapters.map((ch) => (
              <option key={ch.chapterId} value={ch.chapterId}>{ch.chapterName}</option>
            ))}
          </select>
        </div>

        <div className="form-control mb-6">
          <label className="label"><span className="label-text">Type</span></label>
          <select
            name="typeId"
            className="select select-bordered"
            value={form.typeId}
            onChange={handleChange}
          >
            {types.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button onClick={close} className="btn btn-ghost">Annuler</button>
          <button onClick={handleSubmit} className="btn btn-primary">Créer</button>
        </div>
      </div>
    </div>
  );
};
