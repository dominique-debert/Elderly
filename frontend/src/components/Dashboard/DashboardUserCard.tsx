import Icon from "@mdi/react";
import { mdiCakeVariantOutline, mdiEmailOutline } from "@mdi/js";

import { formatDate } from "@/utils";
import { useAuthStore } from "@/stores";
import { Card } from "../ui/Card";

export function DashboardUserCard() {
  const { user } = useAuthStore();

  return (
    <Card className="self-center w-2/3 h-full p-0">
      <figure className="relative rounded-xl top-0">
        {user && (
          <img
            src={
              user.avatarUrl ?? `/images/${user.avatar || "default-avatar.svg"}`
            }
            alt="Photo utilisateur"
            className="object-cover w-full rounded-xl"
          />
        )}
        <div className="m-4 bottom-0 left-4 absolute w-100">
          <div className="p-6 w-full h-full z-30 rounded-xl bg-card/60 glass">
            {user && (
              <h2 className="text-2xl mb-3 card-title">
                {user.firstName} {user.lastName}
              </h2>
            )}
            <div className="text-white flex align-middle">
              <Icon
                path={mdiEmailOutline}
                title="Email"
                size={1}
                className="text-gray-300"
              />
              <span className="ml-2 align-middle">{user && user.email}</span>
            </div>
            <div className="text-white flex align-middle">
              <Icon
                path={mdiCakeVariantOutline}
                title="Anniversaire"
                size={1}
                className="text-gray-300"
              />
              <span className="ml-2 mt-1">
                {user && user.birthDate
                  ? formatDate(user.birthDate)
                  : "Non disponible"}
              </span>
            </div>
          </div>
        </div>
      </figure>
    </Card>
  );
}
