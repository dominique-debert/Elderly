import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { createForumCategory } from '@/services/forumCategory.service';
import { fetchCategoryChapters, fetchCategoryTypes } from '@/services/categoryMeta.service';
import { IChapter } from "@/@types/IChapter";
import { ICategoryType } from "@/@types/ICategoryType";

type ForumCreateModalProps = {
  onClose: () => void;
  onCreated: () => void;
};

export const ForumCreateModal: React.FC<ForumCreateModalProps> = ({ onClose, onCreated }) => {
  const [form, setForm] = useState({
    categoryName: '',
    description: '',
    chapterId: '',
    typeId: '',
  });

  const [chapters, setChapters] = useState<IChapter[]>([]);
  const [types, setTypes] = useState<ICategoryType[]>([]);

  useEffect(() => {
    fetchCategoryChapters().then(setChapters).catch(() => toast.error("Erreur lors du chargement des chapitres"));
    fetchCategoryTypes().then(setTypes).catch(() => toast.error("Erreur lors du chargement des types"));
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
      await createForumCategory({
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

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="border-b border-base-300 font-medium text-xl">Créer une nouvelle catégorie</h3>

        <form method="dialog" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-full">

          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5" onClick={onClose}>✕</button>

          <label className="text-sm -mb-2 mt-4">Nom</label>
          <input
            type="text"
            name="categoryName"
            value={form.categoryName}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Nom de la catégorie"
            required
          />

          <label className="text-sm -mb-2 mt-4">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />

          <label className="text-sm -mb-2 mt-4">Chapitre</label>
          <select
            name="chapterId"
            value={form.chapterId}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Choisir un chapitre</option>
            {chapters.map((ch) => (
              <option key={ch.chapterId} value={ch.chapterId}>{ch.chapterName}</option>
            ))}
          </select>

          <label className="text-sm -mb-2 mt-4">Type</label>
          <select
            name="typeId"
            value={form.typeId}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Choisir un type</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">Enregistrer</button>
            <button type="button" className="btn" onClick={onClose}>Annuler</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
