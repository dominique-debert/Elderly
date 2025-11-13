import { type IUser } from "@/types";
import { Pencil, Trash2, Mail, Phone, MapPin } from "lucide-react";
import { getAvatarUrl } from "@/utils/avatar";
import { useState } from "react";
import { UserDeleteModal, UserEditModal } from "@/components";
import { useQueryClient } from "@tanstack/react-query";

type UsersCardItemProps = {
  user: IUser;
};

export function UsersCardItem({ user }: UsersCardItemProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleted = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <>
      <div className="card bg-white dark:bg-card shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
        <div className="card-body p-4">
          <div className="flex flex-col items-center text-center">
            <div className="avatar mb-3">
              <div className="w-20 h-20 rounded-full">
                {user.avatar ? (
                  <img
                    src={getAvatarUrl(user.avatar) || ""}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                ) : (
                  <div className="bg-primary/20 w-full h-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-2xl">
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <h3 className="font-semibold text-lg">
              {user.firstName} {user.lastName}
            </h3>

            <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-400 mt-2 w-full">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                <span className="truncate">{user.email}</span>
              </div>
              {user.phone && (
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
              )}
              {user.city && (
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-4 h-4" />
                  <span>{user.city}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              <span
                className={`badge ${
                  user.status === "active"
                    ? "badge-success"
                    : user.status === "inactive"
                      ? "badge-warning"
                      : "badge-error"
                } badge-sm`}
              >
                {user.status === "active"
                  ? "Actif"
                  : user.status === "inactive"
                    ? "Inactif"
                    : user.status}
              </span>
              {user.isAdmin && (
                <span className="badge badge-error badge-sm">Admin</span>
              )}
              {user.reducedMobility && (
                <span className="badge badge-info badge-sm">
                  Mobilité réduite
                </span>
              )}
            </div>

            <div className="flex gap-2 mt-4 w-full">
              <button
                className="btn btn-ghost btn-sm flex-1"
                onClick={() => setIsEditOpen(true)}
              >
                <Pencil className="w-4 h-4" />
                Modifier
              </button>
              <button
                className="btn btn-ghost btn-sm text-error"
                onClick={() => setIsDeleteOpen(true)}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEditOpen && (
        <UserEditModal
          user={user}
          onClose={() => setIsEditOpen(false)}
          onUpdated={handleDeleted}
        />
      )}
      {isDeleteOpen && (
        <UserDeleteModal
          user={user}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={handleDeleted}
        />
      )}
    </>
  );
}
