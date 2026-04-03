import { Pencil, Trash2, Mail, Phone, MapPin } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { UserDeleteModal, UserEditModal } from "@/components";
import { type IUser } from "@/types";
import { getAvatarUrl } from "@/utils/avatar";

type UsersListItemProps = {
  user: IUser;
};

export function UsersListItem({ user }: UsersListItemProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleted = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <>
      <li className="card bg-white dark:bg-card shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
        <div className="card-body p-4 pl-6 pr-6">
          <div className="flex items-start gap-6">
            <div className="avatar">
              <div className="size-12 rounded-full mt-1">
                {user.avatar ? (
                  <img
                    className="avatar size-12 rounded-full border-2 border-slate-300 dark:border-slate-500"
                    src={getAvatarUrl(user.avatar) || ""}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                ) : (
                  <div className="bg-primary/20 w-full h-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xl">
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mt-1">
                <div className="flex items-center gap-2">
                  <Mail className="size-3 mt-1" />
                  <span>
                    {" "}
                    <a
                      className="link link-primary text-xs"
                      href={`mailto:${user.email}`}
                    >
                      {user.email}
                    </a>
                  </span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="size-3" />
                    <span>{user.phone}</span>
                  </div>
                )}
                {user.city && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3" />
                    <span>{user.city}</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-4">
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
            </div>

            <div className="flex gap-2">
              <button
                className="btn p-1 size-8 text-primary bg-primary/10 hover:bg-primary/20"
                onClick={() => setIsEditOpen(true)}
              >
                <Pencil className="size-3" />
              </button>
              <button
                className="btn text-error p-1 size-8 bg-error/10 hover:bg-error/20"
                onClick={() => setIsDeleteOpen(true)}
              >
                <Trash2 className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </li>
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
