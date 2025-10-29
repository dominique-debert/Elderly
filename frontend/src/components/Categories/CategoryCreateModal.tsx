import { useEffect, useState } from "react";
import {
  createCategory,
  getCategoryChapters,
  getCategoryTypes,
} from "@/services";
import { ICategoryType, IChapter } from "@/types";
import toast from "react-hot-toast";

type CategoryCreateModalProps = {
  onClose: () => void;
  onCreated: () => void;
  selectedTab: string;
  tabToTypeName: Record<string, string>;
};

export function CategoryCreateModal({
  onClose,
  onCreated,
  selectedTab,
  tabToTypeName,
}: CategoryCreateModalProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    chapterId: "",
    typeId: "",
  });

  const [chapters, setChapters] = useState<IChapter[]>([]);
  const [types, setTypes] = useState<ICategoryType[]>([]);

  useEffect(() => {
    getCategoryChapters()
      .then((chs) => setChapters(Array.isArray(chs) ? chs : [chs]))
      .catch(() => toast.error("Erreur lors du chargement des chapitres"));
    getCategoryTypes()
      .then((ts) => setTypes(Array.isArray(ts) ? ts : []))
      .catch(() => toast.error("Erreur lors du chargement des types"));
  }, []);

  // Sync selectedTab -> typeId once types are loaded or selectedTab changes
  useEffect(() => {
    if (!selectedTab || types.length === 0) return;

    // Determine desired type name: use mapping if provided, otherwise try the tab key itself
    const desiredName =
      (tabToTypeName && tabToTypeName[selectedTab]) || selectedTab;

    const desiredLower = desiredName.toLowerCase();

    // Try exact match first, then includes
    const found =
      types.find((t) => t.name.toLowerCase() === desiredLower) ||
      types.find((t) => t.name.toLowerCase().includes(desiredLower));

    if (found) {
      setForm((prev) => ({ ...prev, typeId: String(found.id) }));
    }
  }, [types, selectedTab, tabToTypeName]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCategory({
        categoryName: form.name,
        description: form.description,
        chapterId: Number(form.chapterId),
        typeId: Number(form.typeId),
      });
      toast.success("Catégorie créée");
      onClose();
      onCreated?.();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Erreur lors de la création : ${error.message}`);
      } else {
        toast.error(
          "Erreur lors de la création : Une erreur inconnue est survenue"
        );
      }
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white! dark:bg-card! relative max-w-lg">
        <h3 className="border-b border-base-300 font-medium text-xl">
          Créer une nouvelle catégorie
        </h3>

        <form
          method="dialog"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 w-full"
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5"
            onClick={onClose}
          >
            ✕
          </button>

          <legend className="fieldset-legend text-sm -mb-4 mt-4">Nom</legend>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input border bg-white focus-visible:border-0 dark:bg-card w-full"
            placeholder="Nom de la catégorie"
            required
          />

          <label className="text-sm -mb-2 mt-4">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea border bg-white focus-visible:border-0 dark:bg-card w-full"
            placeholder="Description"
          />

          <label htmlFor="chapterId" className="text-sm -mb-2 mt-4">
            Chapitre
          </label>
          <select
            name="chapterId"
            value={form.chapterId}
            onChange={handleChange}
            className="select bg-white focus-visible:border-0 dark:bg-card w-full"
            required
          >
            <option value="" disabled>
              Choisir un chapitre
            </option>
            {chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.chapterName}
              </option>
            ))}
          </select>

          <label htmlFor="typeId" className="text-sm -mb-2 mt-4">
            Type
          </label>
          <select
            name="typeId"
            value={form.typeId}
            onChange={handleChange}
            className="select select-bordered w-full bg-white dark:bg-card"
            disabled
          >
            <option value="" disabled>
              Choisir un type
            </option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

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
