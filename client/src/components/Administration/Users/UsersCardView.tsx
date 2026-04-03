import { type IUser } from "@/types";
import { UsersCardItem } from "./UsersCardItem";

type UsersCardViewProps = {
  users: IUser[];
};

export function UsersCardView({ users }: UsersCardViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
      {users.map((user) => (
        <UsersCardItem key={user.id} user={user} />
      ))}
    </div>
  );
}
