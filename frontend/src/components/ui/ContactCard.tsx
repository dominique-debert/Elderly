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
    <div className="card bg-card pl-6 pr-6 pt-0 pb-8">
      <div className="flex items-center gap-5 pl-4">
        {/* Avatar */}
        <img
          src={user.avatarUrl || "/default-avatar.png"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="card-title text-base text-slate-300">
            {user.firstName} {user.lastName}
          </h3>
          {user.email && (
            <div className="flex items-center text-xs text-slate-400 mt-2">
              <a href={`mailto:${user.email}`} className="">
                {user.email}
              </a>
            </div>
          )}
        </div>
        {/* Action Button */}
        <div>
          {myContact && (
            <div className="flex gap-6 pr-4 align-middle items-center">
              <button className="btn btn-sm bg-slate-400 text-slate-800 h-10 w-10 p-0">
                <Icon path={mdiPencilOutline} size={1} />
              </button>
              <button className="btn btn-sm bg-slate-400 text-slate-800 h-10 w-10 p-0">
                <Icon path={mdiTrashCanOutline} size={1} />
              </button>
              <button className="btn btn-sm bg-slate-400 text-slate-800 h-10 w-10 p-0">
                <Icon path={mdiDotsVertical} size={1} />
              </button>
            </div>
          )}
          {suggested && (
            <div className="pr-4">
              <button className="btn btn-sm bg-slate-400 text-slate-800 h-10 w-10 p-0">
                <Icon path={mdiPlus} size={1} />
              </button>
            </div>
          )}
          {blocked && (
            <div className="pr-4">
              <button className="btn btn-sm text-sm font-medium bg-slate-400 text-slate-800">
                Débloquer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
