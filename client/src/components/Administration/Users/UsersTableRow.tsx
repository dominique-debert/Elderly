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
            <div className="w-10 h-10 rounded-full">
              {user.avatar ? (
                <img
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
          <div className="font-medium">
            {user.firstName} {user.lastName}
          </div>
        </td>
        <td>{user.email}</td>
        <td>{user.city || "-"}</td>
        <td>{user.phone || "-"}</td>
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
        <td>
          {user.isAdmin ? (
            <span className="badge badge-primary badge-sm">Admin</span>
          ) : (
            <span className="badge badge-ghost badge-sm">User</span>
          )}
        </td>
        <td>
          <div className="flex gap-2">
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setIsEditOpen(true)}
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={() => setIsDeleteOpen(true)}
            >
              <Trash2 className="w-4 h-4" />
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
