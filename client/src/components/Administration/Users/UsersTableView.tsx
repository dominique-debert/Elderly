import { type IUser } from "@/types";
import { UsersTableRow } from "./UsersTableRow";

type UsersTableViewProps = {
  users: IUser[];
};

export function UsersTableView({ users }: UsersTableViewProps) {
  return (
    <div className="overflow-x-auto mt-2">
      <table className="table table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="size-16"></th>
            <th>Nom</th>
            <th>Email</th>
            <th>Ville</th>
            <th>Téléphone</th>
            <th className="text-center">Status</th>
            <th className="text-center">Role</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
