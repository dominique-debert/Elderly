import { useState } from "react";
import { createMood } from "@/services/moods.service";
import { toast } from "react-hot-toast";
import { EValence } from "@/types";

type MoodCreateModalProps = {
  onClose: () => void;
  onCreated?: () => void;
};

export function MoodCreateModal({ onClose, onCreated }: MoodCreateModalProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    valence: EValence.Neutral, // ou une autre valeur par défaut
    intensity: 1,
    color: "#000000",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleValenceChange = (val: EValence) => {
    setForm({ ...form, valence: val });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMood(form);
      toast.success("Humeur créée");
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
      <div className="modal-box">
        <h3 className="border-b border-base-300 font-medium text-xl">
          Créer une nouvelle humeur
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

          <label className="text-sm -mb-2 mt-4" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Nom"
            required
          />

          <label className="text-sm -mb-2 mt-4" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />

          <label className="text-sm -mb-2 mt-4">Valence</label>
          <div className="grid w-full grid-cols-3 gap-2">
            {Object.values(EValence).map((val) => (
              <div key={val}>
                <input
                  type="radio"
                  name="valence"
                  id={val}
                  className="peer hidden"
                  value={val}
                  checked={form.valence === val}
                  onChange={() => handleValenceChange(val)}
                />
                <label
                  htmlFor={val}
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
                >
                  {val}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center gap-4 mt-4 w-full">
            <div>
              <label className="text-sm mr-4" htmlFor="intensity">
                Intensité
              </label>
              <input
                type="number"
                name="intensity"
                value={form.intensity}
                onChange={handleChange}
                className="input input-bordered w-fit"
                placeholder="Intensité"
                min={1}
                max={5}
                required
              />
            </div>
            <div className="flex items-center">
              <label className="text-sm mr-4" htmlFor="color">
                Couleur
              </label>
              <input
                className="cursor-pointer rounded-lg border border-base-300"
                type="color"
                name="color"
                value={form.color}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
