import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser, uploadAvatar, changePassword } from "@/services";
import { Card, CardHeader } from "@/components";
import type { IUser } from "@/types";
import Icon from "@mdi/react";
import { mdiCamera, mdiContentSave } from "@mdi/js";
import toast from "react-hot-toast";

export function EditProfilePage() {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
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
    phone: user?.phone || "",
  });

  const [, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    user?.avatarUrl || ""
  );
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateMutation = useMutation({
    mutationFn: (updatedUser: Partial<IUser>) =>
      updateUser(user?.id || "", updatedUser),
    onSuccess: (data: Partial<IUser>) => {
      // Update Zustand store with new user data
      useAuthStore.setState({ user: { ...user!, ...data } });
      queryClient.invalidateQueries({ queryKey: ["user", user?.id] });
      toast.success("Profil mis à jour avec succès!");
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
      setShowPasswordModal(false);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("L'image ne doit pas dépasser 5MB");
        return;
      }

      // Validate file type
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

      // Upload immediately
      avatarMutation.mutate(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert birthDate (string from input) to Date before sending to API
    const { birthDate, ...rest } = formData;
    const payload = {
      ...rest,
      birthDate: birthDate ? new Date(birthDate) : undefined,
    } as unknown as Partial<IUser>;

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

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="w-full p-6 my-16">
      <Card className="p-6 mb-6">
        <h1 className="text-xl font-bold mt-4" style={{ lineHeight: 0 }}>
          Modifier mon profil
        </h1>
        <div className="divider expert-blue p-0 m-0"></div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-50 h-50 rounded-full border-4 border-slate-600 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-3 right-3 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary-focus"
              >
                <Icon path={mdiCamera} size={1} />
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
            <span className="text-sm text-slate-500 mt-2">
              {avatarMutation.isPending
                ? "Upload en cours..."
                : "Cliquez sur l'icône pour changer votre photo"}
            </span>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="form-control">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Prénom
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Nom
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Date de naissance
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Adresse
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Ville
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Code postal
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="input input-bordered"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="textarea textarea-bordered h-24"
              placeholder="Parlez-nous de vous..."
            />
          </div>
          <div className="divider expert-blue p-0 m-0"></div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end mt-3">
            <button
              type="button"
              onClick={() => setShowPasswordModal(true)}
              className="btn btn-outline btn-sm"
            >
              Changer le mot de passe
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? "Enregistrement..." : "Enregistrer"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-ghost btn-sm hover:bg-red-800"
            >
              Annuler
            </button>
          </div>
        </form>
      </Card>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Changer le mot de passe</h3>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mot de passe actuel</span>
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
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nouveau mot de passe</span>
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
                  className="input input-bordered"
                  required
                  minLength={8}
                />
                <label className="label">
                  <span className="label-text-alt">Minimum 8 caractères</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirmer le mot de passe</span>
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
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                  }}
                  className="btn btn-ghost"
                  disabled={passwordMutation.isPending}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={passwordMutation.isPending}
                >
                  {passwordMutation.isPending ? "Changement..." : "Changer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
