import Icon from "@mdi/react";
import { mdiCakeVariantOutline, mdiEmailOutline } from "@mdi/js";

import { useAuthStore } from "@/stores";
import { Card } from "../ui/Card";

export function DashboardUserWidget() {
  const { user } = useAuthStore();

  return (
    <Card className="w-full">
      <figure className="relative rounded-xl top-0 p-0 m-0">
        {user && (
          <img
            src={
              user.avatarUrl ?? `/images/${user.avatar || "default-avatar.svg"}`
            }
            alt="Photo utilisateur"
            className="object-cover h-full rounded-xl"
          />
        )}
        <div className="bottom-4 left-4 absolute w-full mx-auto">
          <div className="p-4 w-fit h-full z-30 rounded-xl bg-card/60 glass">
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
              <span className="ml-2 mt-0.5 align-middle">
                {user &&
                  new Date(user.birthDate).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
              </span>
            </div>
          </div>
        </div>
      </figure>
    </Card>
  );
}
