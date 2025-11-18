import { type IUser } from "@/types";
import { UsersListItem } from "./UsersListItem";

type UsersListViewProps = {
  users: IUser[];
};

export function UsersListView({ users }: UsersListViewProps) {
  return (
    <ul className="flex flex-col gap-4 mt-2">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
