import Icon from "@mdi/react";
import { mdiCamera, mdiClose } from "@mdi/js";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/stores";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser, uploadAvatar, changePassword } from "@/services";
import type { IUser } from "@/types";
import toast from "react-hot-toast";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    birthDate: user?.birthDate
      ? new Date(user.birthDate).toISOString().split("T")[0]
      : "",
    profession: user?.profession || "",
    city: user?.city || "",
    postalCode: user?.postalCode || "",
    address: user?.address || "",
    description: user?.description || "",
    phone: user?.phone || "", // Make sure user.phone exists in IUser type
  });

  const [, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    user?.avatarUrl || ""
  );
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateMutation = useMutation({
    mutationFn: (updatedUser: Partial<IUser>) =>
      updateUser(user?.id || "", updatedUser),
    onSuccess: (data: Partial<IUser>) => {
      useAuthStore.setState({ user: { ...user!, ...data } });
      queryClient.invalidateQueries({ queryKey: ["user", user?.id] });
      toast.success("Profil mis à jour avec succès!");
      onClose();
    },
    onError: (error) => {
      toast.error("Erreur lors de la mise à jour du profil");
      console.error(error);
    },
  });

  const avatarMutation = useMutation({
    mutationFn: (file: File) => uploadAvatar(user?.id || "", file),
    onSuccess: (data) => {
      useAuthStore.setState({
        user: {
          ...user!,
          avatar: data.user.avatar,
          avatarUrl: data.avatarUrl,
        },
      });
      setAvatarPreview(data.avatarUrl);
      toast.success("Avatar mis à jour avec succès!");
    },
    onError: (error) => {
      toast.error("Erreur lors de l'upload de l'avatar");
      console.error(error);
    },
  });

  const passwordMutation = useMutation({
    mutationFn: ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string;
      newPassword: string;
    }) => changePassword(user?.id || "", currentPassword, newPassword),
    onSuccess: () => {
      toast.success("Mot de passe changé avec succès!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        "Erreur lors du changement de mot de passe";
      toast.error(errorMessage);
      console.error(error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("L'image ne doit pas dépasser 5MB");
        return;
      }

      if (!file.type.startsWith("image/")) {
        toast.error("Seules les images sont acceptées");
        return;
      }

      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      avatarMutation.mutate(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { birthDate, ...rest } = formData;
    const payload = {
      ...rest,
      phone: formData.phone, // Explicitly include phone
      birthDate: birthDate ? new Date(birthDate) : undefined,
    } as Partial<IUser>;

    console.log("Submitting payload:", payload); // Debug log to verify phone is included

    updateMutation.mutate(payload);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    passwordMutation.mutate({
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
    });
  };

  useEffect(() => {
    if (isOpen && user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        birthDate: user.birthDate
          ? new Date(user.birthDate).toISOString().split("T")[0]
          : "",
        profession: user.profession || "",
        city: user.city || "",
        postalCode: user.postalCode || "",
        address: user.address || "",
        description: user.description || "",
        phone: user.phone || "",
      });
      setAvatarPreview(user.avatarUrl || "");
    }
  }, [isOpen, user]);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl overflow-y-auto bg-white! dark:bg-card!">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold m-0 p-0">Modifier mon profil</h1>
          <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle">
            <Icon path={mdiClose} size={1} />
          </button>
        </div>
        <div className="divider expert-blue p-0 m-0"></div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              {avatarMutation.isPending && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
              <img
                src={avatarPreview || "/default-avatar.png"}
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 dark:border-slate-600 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-focus"
              >
                <Icon path={mdiCamera} size={0.8} />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                disabled={avatarMutation.isPending}
              />
            </div>
            <span className="text-sm dark:text-slate-500 mt-2">
              {avatarMutation.isPending
                ? "Upload en cours..."
                : "Cliquez sur l'icône pour changer votre photo"}
            </span>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Prénom
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Nom
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Date de naissance
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
              />
            </div>
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="block text-sm font-medium dark:text-slate-400 mb-2">
              Adresse
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered bg-white dark:bg-card w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Ville
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Code postal
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="input input-bordered bg-white dark:bg-card w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="block text-sm font-medium dark:text-slate-400 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="textarea textarea-bordered bg-white h-24 dark:bg-card w-full"
              placeholder="Parlez-nous de vous..."
            />
          </div>

          {/* Password Change Section */}
          <div className="space-y-4 mt-6">
            <h2 className="text-lg font-semibold dark:text-slate-200 p-0 m-0">
              Changer le mot de passe
            </h2>
            <div className="divider expert-blue p-0 m-0"></div>

            <div className="form-control mt-4">
              <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                Mot de passe actuel
              </label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    currentPassword: e.target.value,
                  }))
                }
                className="input input-bordered bg-white! dark:bg-card! w-full"
                placeholder="Entrez votre mot de passe actuel"
                disabled
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  className="input input-bordered bg-white dark:bg-card w-full"
                  placeholder="Minimum 8 caractères"
                  minLength={8}
                />
              </div>

              <div className="form-control">
                <label className="block text-sm font-medium dark:text-slate-400 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className="input input-bordered bg-white dark:bg-card w-full"
                  placeholder="Confirmez le nouveau mot de passe"
                />
              </div>
            </div>

            {(passwordData.currentPassword ||
              passwordData.newPassword ||
              passwordData.confirmPassword) && (
              <button
                type="button"
                onClick={handlePasswordChange}
                className="btn btn-outline btn-primary btn-sm"
                disabled={
                  passwordMutation.isPending ||
                  !passwordData.currentPassword ||
                  !passwordData.newPassword ||
                  !passwordData.confirmPassword
                }
              >
                {passwordMutation.isPending
                  ? "Changement..."
                  : "Changer le mot de passe"}
              </button>
            )}
          </div>

          <div className="divider expert-blue p-0 m-0"></div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end mt-4">
            <button
              type="submit"
              className="btn btn-primary text-white"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? "Enregistrement..." : "Enregistrer"}
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
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
