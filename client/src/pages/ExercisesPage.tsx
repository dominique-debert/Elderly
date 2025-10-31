import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function ExercisesPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="bg-white dark:bg-card flex flex-col mt-20 ml-68 mr-4 rounded-2xl shadow-xl justify-items-center align-items-center p-8">
        <div className="lg:flex lg:flex-row gap-4">
          {user ? (
            <>
              <h2 className="text-slate-400 font-light">
                Exercices - Bientot !
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
