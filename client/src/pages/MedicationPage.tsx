import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function MedicationPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 mt-18 p-4">
        <div className="lg:flex lg:flex-row gap-4">
          {user ? (
            <>
              <h2 className="text-slate-400 font-light">
                Médicaments - Bientot !
              </h2>
            </>
          ) : (
            <p>Les informations de profil sont introuvables.</p>
          )}
        </div>
      </div>
    </>
  );
}
