import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container p-10 w-full h-100 mt-16">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold text-primary mb-4">Profil</h1>
        </>
      ) : (
        <p>Les informations de profil sont introuvables.</p>
      )}
    </div>
  );
}
