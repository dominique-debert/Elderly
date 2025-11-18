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
      <div className="card bg-white dark:bg-card shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
        <div className="card-body p-4">
          <div className="flex flex-col items-center text-center">
            <div className="avatar mb-3">
              <div>
                {user.avatar ? (
                  <img
                    className="avatar size-18 rounded-full border-2 border-slate-300 dark:border-slate-500"
                    src={getAvatarUrl(user.avatar) || ""}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                ) : (
                  <div className="avatar size-18 rounded-full border-2 border-slate-300 dark:border-slate-500 bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-xl">
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
              <div className="flex items-center gap-2 justify-center mb-2">
                <Mail className="size-3" />
                <a
                  className="link link-primary text-xs"
                  href={`mailto:${user.email}`}
                >
                  {user.email}
                </a>
              </div>
              {user.phone && (
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="size-3" />
                  <span>{user.phone}</span>
                </div>
              )}
              {user.city && (
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="size-3" />
                  <span>{user.city}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
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
            <div className="divider mb-0" />
            <div className="flex gap-2 mt-2 w-full justify-end">
              <button
                className="btn p-1 size-8 text-primary bg-primary/10 hover:bg-primary/20"
                onClick={() => setIsEditOpen(true)}
              >
                <Pencil className="size-4" />
              </button>
              <button
                className="btn text-error p-1 size-8 bg-error/10 hover:bg-error/20"
                onClick={() => setIsDeleteOpen(true)}
              >
                <Trash2 className="size-4" />
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
