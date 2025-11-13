import { useState } from "react";
import { updateUser } from "@/services";
import type { IUser } from "@/types";
import { toast } from "react-hot-toast";

type UserEditModalProps = {
  user: IUser;
  onClose: () => void;
  onUpdated?: () => void;
};

export function UserEditModal({
  user,
  onClose,
  onUpdated,
}: UserEditModalProps) {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || "");
  const [city, setCity] = useState(user.city || "");
  const [postalCode, setPostalCode] = useState(user.postalCode || "");
  const [address, setAddress] = useState(user.address || "");
  const [status, setStatus] = useState(user.status || "active");
  const [isAdmin, setIsAdmin] = useState(user.isAdmin || false);
  const [reducedMobility, setReducedMobility] = useState(
    user.reducedMobility || false
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateUser(user.id, {
        firstName,
        lastName,
        email,
        phone,
        city,
        postalCode,
        address,
        status,
        isAdmin,
        reducedMobility,
      });
      toast.success("Utilisateur mis à jour");
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
      <div className="modal-box bg-white! dark:bg-card! max-w-2xl">
        <h3 className="font-bold text-lg">Modifier l'utilisateur</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1 block">Prénom</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-card"
                required
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Nom</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-card"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white dark:bg-card"
              required
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input input-bordered w-full bg-white dark:bg-card"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1 block">Ville</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-card"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Code postal</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="input input-bordered w-full bg-white dark:bg-card"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">Adresse</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-bordered w-full bg-white dark:bg-card"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Statut</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="select select-bordered w-full bg-white dark:bg-card"
            >
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
              <option value="suspended">Suspendu</option>
            </select>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="checkbox checkbox-primary"
              />
              <span className="text-sm">Administrateur</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMobility}
                onChange={(e) => setReducedMobility(e.target.checked)}
                className="checkbox checkbox-primary"
              />
              <span className="text-sm">Mobilité réduite</span>
            </label>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
