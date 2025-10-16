import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { formatDate } from "@/utils";
import { Card } from "@/components";

export function PreferencesPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-container p-10 w-full h-100 mt-16">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary mb-4">
            Vos préférences
          </h1>

          <Card className="card bg-card/40 w-96 glass">
            {/* <figure>
              <img
                src={
                  user.avatarUrl ??
                  `/images/${user.avatar || "default-avatar.svg"}`
                }
                alt="Admin"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title text-primary">
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
              <p>
                {user.birthDate ? formatDate(user.birthDate) : "Non disponible"}
              </p>
            </div>
          </Card>
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
}
