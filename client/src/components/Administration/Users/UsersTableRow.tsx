import { type IUser } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { getAvatarUrl } from "@/utils/avatar";
import { useState } from "react";
import { UserDeleteModal, UserEditModal } from "@/components";
import { useQueryClient } from "@tanstack/react-query";

type UsersTableRowProps = {
  user: IUser;
};

export function UsersTableRow({ user }: UsersTableRowProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleted = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <>
      <tr>
        <td>
          <div className="avatar">
            <div className="size-12 rounded-full">
              {user.avatar ? (
                <img
                  className="avatar size-12 rounded-full border-2 border-slate-300 dark:border-slate-500"
                  src={getAvatarUrl(user.avatar) || ""}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              ) : (
                <div className="bg-primary/20 w-full h-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {user.firstName?.[0]}
                    {user.lastName?.[0]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </td>
        <td>
          <div className="font-medium whitespace-nowrap">
            {user.firstName} {user.lastName}
          </div>
        </td>
        <td className="whitespace-nowrap">
          {" "}
          <a
            className="link link-primary text-xs"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </td>
        <td className="whitespace-nowrap">{user.city || "-"}</td>
        <td className="whitespace-nowrap">{user.phone || "-"}</td>
        <td>
          <td>
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
          </td>
        </td>
        <td className="text-center">
          {user.isAdmin ? (
            <span className="badge badge-error badge-sm">Admin</span>
          ) : (
            <span className="badge badge-ghost badge-sm">User</span>
          )}
        </td>
        <td>
          <div className="flex gap-2">
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
        </td>
      </tr>
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
