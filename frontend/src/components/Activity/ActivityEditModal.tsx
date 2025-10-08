import { useEffect, useState } from "react";
import { updateActivityCategory } from "@/services/activityCategory.service";
import { toast } from "react-hot-toast";
import {
  getCategoryChapters,
  getCategoryTypes,
} from "@/services/categoryMeta.service";
import type { ICategory } from "@/types";
import type { ICategoryType } from "@/types";
import type { IChapter } from "@/types";

type ActivityModalProps = {
  activity: ICategory;
  onClose: () => void;
  onUpdated?: () => void;
};

export function ActivityEditModal({
  activity,
  onClose,
  onUpdated,
}: ActivityModalProps) {
  const [form, setForm] = useState<{
    categoryName: string;
    description: string;
    chapterId: string;
    typeId: string;
  } | null>(null);

  const [chapters, setChapters] = useState<{ id: number; name: string }[]>([]);
  const [types, setTypes] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [chapterData, typeData] = await Promise.all([
          getCategoryChapters(),
          getCategoryTypes(),
        ]);

        const chaptersFormatted = chapterData.map((chapter: IChapter) => ({
          id: chapter.chapterId,
          name: chapter.chapterName,
        }));

        const typesFormatted = typeData.map((type: ICategoryType) => ({
          id: type.id,
          name: type.name,
        }));

        setChapters(chaptersFormatted);
        setTypes(typesFormatted);

        setForm({
          categoryName: activity.categoryName,
          description: activity.description || "",
          chapterId: String(
            activity.chapterId ?? chaptersFormatted[0]?.id ?? ""
          ),
          typeId: String(activity.typeId ?? typesFormatted[0]?.id ?? ""),
        });
      } catch (error) {
        toast.error(
          "Erreur lors du chargement des données : " +
            (error instanceof Error ? error.message : "Inconnue")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activity]);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (!form) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;

    try {
      await updateActivityCategory(activity.id.toString(), {
        name: form.categoryName,
        description: form.description,
        chapterId: Number(form.chapterId),
        typeId: Number(form.typeId),
      } as {
        name: string;
        description?: string;
        chapterId: number;
        typeId: number;
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

  if (loading || !form) {
    const chapterName =
      chapters.find((c) => c.id === activity.chapterId)?.name ||
      `ID: ${activity.chapterId}`;
    const typeName =
      types.find((t) => t.id === activity.typeId)?.name ||
      `ID: ${activity.typeId}`;
    return (
      <dialog className="modal modal-open" key={activity.id}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Modifier l'activité</h3>
          <form className="flex flex-col gap-4 mt-4 w-full">
            <label className="text-sm -mb-2 mt-4">Nom</label>
            <input
              type="text"
              value={activity.categoryName}
              disabled
              className="input input-bordered w-full bg-gray-100"
            />
            <label className="text-sm -mb-2 mt-4">Description</label>
            <textarea
              value={activity.description || ""}
              disabled
              className="textarea textarea-bordered w-full bg-gray-100"
            />
            <label className="text-sm -mb-2 mt-4">Chapitre</label>
            <input
              type="text"
              value={chapterName}
              disabled
              className="input input-bordered w-full bg-gray-100"
            />
            <label className="text-sm -mb-2 mt-4">Type</label>
            <input
              type="text"
              value={typeName}
              disabled
              className="input input-bordered w-full bg-gray-100"
            />
            <div className="modal-action">
              <button type="button" className="btn" onClick={onClose}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }

  return (
    <dialog className="modal modal-open" key={activity.id}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Modifier l'activité</h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 w-full"
        >
          <label className="text-sm -mb-2 mt-4">Nom</label>
          <input
            type="text"
            name="categoryName"
            value={form.categoryName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <label className="text-sm -mb-2 mt-4">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />

          <label className="text-sm -mb-2 mt-4">Chapitre</label>
          <select
            name="chapterId"
            value={form.chapterId}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">-- Sélectionner un chapitre --</option>
            {chapters.map((chapter) => (
              <option key={chapter.id} value={String(chapter.id)}>
                {chapter.name}
              </option>
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
            <option value="">-- Sélectionner un type --</option>
            {types.map((type) => (
              <option key={type.id} value={String(type.id)}>
                {type.name}
              </option>
            ))}
          </select>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
