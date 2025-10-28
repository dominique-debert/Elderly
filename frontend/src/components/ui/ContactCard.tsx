import Icon from "@mdi/react";
import {
  mdiCancel,
  mdiCheck,
  mdiDotsVertical,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { IUser } from "@/types";

interface ContactCardProps {
  user: IUser;
  myContact?: boolean;
  suggested?: boolean;
  blocked?: boolean;
}

export function ContactCard({
  user,
  myContact,
  suggested,
  blocked,
}: ContactCardProps) {
  return (
    <div className="dark:bg-card bg-white pt-0 pb-8">
      <div className="flex items-center gap-5 ml-8 mr-4">
        {/* Avatar */}
        <img
          src={user.avatarUrl || "/default-avatar.png"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-12 h-12 rounded-full object-cover border-2 border-secondary dark:border-slate-500"
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-base font-normal dark:text-slate-300">
            {user.firstName} {user.lastName}
          </h3>
          {user.email && (
            <div className="flex items-center text-sm font-light text-secondary dark:text-slate-400 mt-2">
              <a
                href={`mailto:${user.email}`}
                className="hover:underline hover:text-primary"
              >
                {user.email}
              </a>
            </div>
          )}
        </div>
        {/* Action Button */}
        <div>
          {myContact && (
            <div className="flex gap-4 pr-4 align-middle items-center">
              <button
                className="btn text-primary bg-primary/10 p-1 rounded-sm tooltip tooltip-bottom size-8"
                data-tip="Modifier"
              >
                <Icon path={mdiPencilOutline} size={0.8} />
              </button>
              <button
                className="btn bg-red-600/10 text-red-400 p-1 rounded-sm tooltip tooltip-bottom size-8"
                data-tip="Supprimer"
              >
                <Icon path={mdiTrashCanOutline} size={0.8} />
              </button>
              <button
                className="btn p-1 rounded-sm bg-transparent border-0 tooltip tooltip-bottom size-8"
                data-tip="Plus..."
              >
                <Icon path={mdiDotsVertical} size={0.8} />
              </button>
            </div>
          )}
          {suggested && (
            <div className="pr-4">
              <button
                data-tip="accepter"
                className="btn bg-accent/10 text-accent p-1 rounded-sm tooltip tooltip-bottom size-6"
              >
                <Icon path={mdiCheck} size={0.8} />
              </button>
            </div>
          )}
          {blocked && (
            <div className="pr-4">
              <button
                data-tip="debloquer"
                className="btn bg-secondary/10 text-secondary p-1 rounded-sm tooltip tooltip-bottom size-6"
              >
                <Icon path={mdiCancel} size={0.8} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
