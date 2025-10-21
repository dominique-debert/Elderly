import Icon from "@mdi/react";
import {
  mdiPencilOutline,
  mdiTrashCanOutline,
  mdiDotsVertical,
  mdiPlus,
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
            <div className="flex gap-3 pr-4 align-middle items-center">
              <button className="btn btn-sm btn-outline text-slate-800 p-0 w-8">
                <Icon path={mdiPencilOutline} size={0.7} />
              </button>
              <button className="btn btn-sm btn-outline text-slate-800 p-0 w-8">
                <Icon path={mdiTrashCanOutline} size={0.7} />
              </button>
              <button className="btn btn-sm btn-outline text-slate-800 p-0 w-8">
                <Icon path={mdiDotsVertical} size={0.7} />
              </button>
            </div>
          )}
          {suggested && (
            <div className="pr-4">
              <button className="btn btn-sm btn-outline text-slate-800 p-0 w-8">
                <Icon path={mdiPlus} size={0.7} />
              </button>
            </div>
          )}
          {blocked && (
            <div className="pr-4">
              <button className="btn btn-sm btn-outline text-slate-800 text-xs font-normal p-2">
                Débloquer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
