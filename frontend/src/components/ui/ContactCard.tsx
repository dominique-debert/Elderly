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
    <div className="dark:bg-card pt-0 pb-8">
      <div className="flex items-center gap-5 ml-8 mr-4">
        {/* Avatar */}
        <img
          src={user.avatarUrl || "/default-avatar.png"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-500"
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-base font-normal text-slate-300">
            {user.firstName} {user.lastName}
          </h3>
          {user.email && (
            <div className="flex items-center text-xs font-light text-slate-400 mt-2">
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
            <div className="flex gap-2 pr-4 align-middle items-center">
              <button
                className="btn btn-xs btn-primary text-xs p-1 rounded-sm tooltip tooltip-bottom"
                data-tip="Modifier"
              >
                <Icon path={mdiPencilOutline} size={0.6} />
              </button>
              <button
                className="btn btn-xs border bg-red-600 border-red-600 text-white hover:bg-red-800 text-xs p-1 rounded-sm tooltip tooltip-bottom"
                data-tip="Supprimer"
              >
                <Icon path={mdiTrashCanOutline} size={0.6} />
              </button>
              <button
                className="btn btn-ghost btn-xs hover:bg-primary hover:border-primary text-xs p-1 rounded-sm tooltip tooltip-bottom"
                data-tip="Plus..."
              >
                <Icon path={mdiDotsVertical} size={0.6} />
              </button>
            </div>
          )}
          {suggested && (
            <div className="pr-4">
              <button
                data-tip="accepter"
                className="btn btn-xs btn-accent text-xs p-1 rounded-sm tooltip tooltip-bottom"
              >
                <Icon path={mdiCheck} size={0.6} />
              </button>
            </div>
          )}
          {blocked && (
            <div className="pr-4">
              <button
                data-tip="debloquer"
                className="btn btn-xs btn-secondary text-xs p-1 rounded-sm tooltip tooltip-bottom"
              >
                <Icon path={mdiCancel} size={0.6} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
